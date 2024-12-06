import { useFieldArray, useFormContext } from 'react-hook-form';
import { DragDropContext, Draggable, DropResult } from '@hello-pangea/dnd';

import * as styles from './ContentsBody.css';

import { NOTICE_CONTENT } from '@/lib/constants/notice';
import { ItemsType, NoticeContentsType } from '@/lib/types/noticeType';

import ContentsContainer from './BlockContainer';
import { StrictModeDroppable } from '@/components/StrictModeDroppable';

/** 타입에 따른 Contents 블럭 포멧 지정 유틸 함수 */
const itemDataFormatByType = (type: NoticeContentsType) => {
  const data: ItemsType = {
    order: 0,
    type,
  };

  switch (type) {
    case 'body':
    case 'subtitle':
    case 'note':
      data.description = '';
      break;
    case 'button':
      data.buttonName = '';
      data.buttonLink = '';
      break;
    case 'image':
      data.imageUrl = '';
    default:
      data;
  }
  return data;
};

export default function ContentsBody() {
  const { setValue, getValues, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: 'contents',
    control,
  });

  const handleAddBlock = (type: NoticeContentsType) => () => {
    append(itemDataFormatByType(type));
  };

  const handleDeleteBlock = (order: number) => {
    remove(order);
  };

  // 드래그앤드롭 시 실행될 함수
  const handleOnDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    const currentFields = getValues('contents');
    const draggingFieldIndex = source.index;
    const dropFieldIndex = destination.index;

    // 드래그한 필드를 기존 배열에서 삭제
    const removeField = currentFields.splice(draggingFieldIndex, 1);
    // 드롭한 위치에 드래그한 필드를 추가
    currentFields.splice(dropFieldIndex, 0, removeField[0]);
    // 전체 필드 업데이트
    setValue('contents', currentFields);
  };

  return (
    <>
      <section>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <StrictModeDroppable droppableId="fields">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {fields.map((field, index) => (
                  <Draggable key={field.id} draggableId={field.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <ContentsContainer
                          key={field.id}
                          content={field as ItemsType & { id: string }}
                          order={index}
                          handleDeleteBlock={handleDeleteBlock}
                          provided={provided}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </section>

      <section className={styles.contents}>
        {Object.entries(NOTICE_CONTENT).map(([key, value], index) => (
          <button
            key={index}
            className={styles.block}
            onClick={handleAddBlock(key as NoticeContentsType)}
            type="button"
          >{`+ ${value} 추가`}</button>
        ))}
      </section>
    </>
  );
}
