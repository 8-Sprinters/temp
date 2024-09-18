import { ChangeEvent } from 'react';
import { UseFormRegisterReturn, useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { useLanguage } from '@/store/useLanguage';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { ListDetailType } from '@/lib/types/listType';
import { itemPlaceholder } from '@/lib/constants/placeholder';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { itemTitleRules, itemCommentRules } from '@/lib/constants/formInputValidationRules';
import { StrictModeDroppable } from '@/components/StrictModeDroppable';
import { FormErrors } from '@/app/list/create/page';
import { getListDetail } from '@/app/_api/list/getLists';

import ItemLayout from './ItemLayout';
import LinkModal from './LinkModal';
import LinkPreview from './LinkPreview';
import ImagePreview from './ImagePreview';
import AddItemButton from './AddItemButton';
import * as styles from './Items.css';

interface ItemsProps {
  type: 'create' | 'edit';
}

export default function Items({ type }: ItemsProps) {
  const { language } = useLanguage();
  const {
    register,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const {
    fields: items,
    append,
    remove,
  } = useFieldArray({
    name: 'items',
    control,
    rules: { minLength: 3, maxLength: 10 },
  });

  const watchItems = useWatch({ control, name: 'items' });

  //--- 드래그 되었을 때 실행되는 이벤트
  const handleOnDragEnd = ({ source, destination }: DropResult) => {
    if (destination && source.index !== destination.index) {
      const currentArray = [...getValues().items];
      const sourceItem = currentArray[source.index];
      currentArray.splice(source.index, 1);
      currentArray.splice(destination.index, 0, sourceItem);
      setValue('items', currentArray);
    }
  };

  //-- 이미지 미리보기
  const MAX_IMAGE_INPUT_SIZE_MB = 50 * 1024 * 1024; //50MB

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>, register: UseFormRegisterReturn) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage[language].imageSizeError });
      } else {
        register.onChange(e);
      }
    }
  };

  const handleDeleteItem = (itemId: number) => {
    remove(itemId);
  };

  const param = useParams<{ listId: string }>();
  const listId = param?.listId;

  const { data: listDetailData } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail, listId],
    queryFn: () => getListDetail(listId),
    enabled: type === 'edit',
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <StrictModeDroppable droppableId="items">
        {(provided) => (
          <div className={styles.itemsContainer} ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => {
              const error = (field: 'title' | 'comment' | 'link' | 'imageUrl') =>
                (errors as FormErrors)?.items?.[index]?.[field];
              const titleError = error('title');
              const commentError = error('comment');
              const imageRegister = register(`items.${index}.imageUrl`);
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={snapshot.isDragging ? styles.draggingItem : styles.item}
                      key={item.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ItemLayout
                        index={index}
                        handleDeleteItem={() => {
                          handleDeleteItem(index);
                        }}
                        itemLength={watchItems.length}
                        titleErrorMessage={
                          titleError && titleError?.type !== 'required' ? titleError?.message : undefined
                        }
                        titleInput={
                          <input
                            className={titleError ? styles.errorTitle : styles.title}
                            placeholder={itemPlaceholder[language].title}
                            autoComplete="off"
                            maxLength={101}
                            {...register(`items.${index}.title`, itemTitleRules)}
                            readOnly={
                              type === 'edit' &&
                              listDetailData?.items.some((item) => item.id === getValues(`items.${index}.id`))
                            }
                          />
                        }
                        commentTextArea={
                          <textarea
                            className={styles.comment}
                            placeholder={itemPlaceholder[language].comment}
                            rows={3}
                            maxLength={101}
                            {...register(`items.${index}.comment`, itemCommentRules)}
                          />
                        }
                        commentLength={
                          <p className={commentError ? styles.errorCountLength : styles.countLength}>
                            {watchItems[index]?.comment?.length ?? 0}/100
                          </p>
                        }
                        linkModal={<LinkModal index={index} />}
                        imageInput={
                          <input
                            className={styles.imageInput}
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            id={`${index}-image`}
                            {...imageRegister}
                            onChange={(e) => {
                              handleImageChange(e, imageRegister);
                            }}
                          />
                        }
                        linkPreview={
                          watchItems[index]?.link && (
                            <LinkPreview
                              url={watchItems[index].link}
                              handleClearButtonClick={() => {
                                setValue(`items.${index}.link`, '');
                              }}
                            />
                          )
                        }
                        imagePreview={
                          watchItems[index]?.imageUrl !== '' && (
                            <ImagePreview
                              image={watchItems[index]?.imageUrl}
                              handleClearButtonClick={() => {
                                setValue(`items.${index}.imageUrl`, '');
                              }}
                            />
                          )
                        }
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            {watchItems.length < 10 && (
              <AddItemButton
                handleAddButtonClick={() =>
                  append({
                    id: 0,
                    rank: 0,
                    title: '',
                    comment: '',
                    link: '',
                    imageUrl: '',
                  })
                }
              />
            )}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
}
