import { ChangeEvent } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useFormContext, useWatch } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import CollapseIcon from '/public/icons/collapse.svg';
import ExpandIcon from '/public/icons/expand.svg';

import { useLanguage } from '@/store/useLanguage';
import useResizeTextarea from '@/hooks/useResizeTextarea';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { itemCommentRules, itemTitleRules } from '@/lib/constants/formInputValidationRules';
import { ListDetailType } from '@/lib/types/listType';

import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';

import getListDetail from '@/app/_api/list/getListDetail';

import ItemImagePreview from './ItemImagePreview';
import ItemLinkUploader from './ItemLinkUploader';
import ItemLinkPreview from './ItemLinkPreview';
import ItemImageUploader from './ItemImageUploader';

import * as styles from './ItemAccordion.css';

interface ItemAccordionProps {
  type: 'create' | 'edit';
  index: number;
  handleToggleItem: (index: any) => void;
  isExpand: boolean;
  handleDeleteItem: (id: any) => void;
}

export default function ItemAccordion({
  type,
  index,
  handleToggleItem,
  isExpand,
  handleDeleteItem,
}: ItemAccordionProps) {
  const { language } = useLanguage();
  //props로 받아야하는 항목 mock data
  const rank = index + 1;

  //--- (수정)기존 데이터 가져오기
  const param = useParams<{ listId: string }>();
  const listId = param?.listId;

  const { data: listDetailData } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail, listId],
    queryFn: () => getListDetail(Number(listId)),
    enabled: type === 'edit',
  });

  /** react-hook-form */
  const { register, setValue, getValues, control } = useFormContext();
  const titleRegister = register(`items.${index}.title`, itemTitleRules);
  const commentRegister = register(`items.${index}.comment`, itemCommentRules);
  const imageRegister = register(`items.${index}.imageUrl`);

  const watchComment = useWatch({ control, name: `items.${index}.comment` });
  const watchImage = useWatch({ control, name: `items.${index}.imageUrl` });
  const watchLink = useWatch({ control, name: `items.${index}.link` });

  //--- 글자 길이에 맞춘 높이 조절
  const { textareaRef, handleResizeHeight } = useResizeTextarea();

  /** Tool */
  //--- 이미지 업로드 & 미리보기
  const MAX_IMAGE_INPUT_SIZE_MB = 50 * 1024 * 1024; //50MB

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage[language].imageSizeError });
      } else {
        imageRegister.onChange(e);
      }
    }
  };

  const handleImageClear = () => {
    setValue(`items.${index}.imageUrl`, '');
  };

  const handleLinkClear = () => {
    setValue(`items.${index}.link`, '');
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header}>
        <Image src={'/icons/dnd.svg'} width={16} height={13} alt="drag and drop" />
        <div className={rank === 1 ? styles.variantRank.first : styles.variantRank.default}>{rank}위</div>
        <input
          {...titleRegister}
          className={styles.titleInput}
          placeholder="아이템명을 작성해 주세요."
          readOnly={type === 'edit' && listDetailData?.items.some((item) => item.id === getValues(`items.${index}.id`))}
          onClick={() => {
            if (type === 'edit' && listDetailData?.items.some((item) => item.id === getValues(`items.${index}.id`))) {
              toasting({ type: 'default', txt: '이미 등록한 아이템명은 수정이 불가능해요' });
            }
          }}
        />
        {isExpand ? (
          <CollapseIcon
            width="14"
            height="9"
            onClick={() => {
              handleToggleItem(index);
            }}
          />
        ) : (
          <ExpandIcon
            width="14"
            height="9"
            onClick={() => {
              handleToggleItem(index);
            }}
          />
        )}
      </div>
      {/** end-header */}
      {isExpand ? (
        <>
          <hr className={styles.hr} />
          <div className={styles.content}>
            <textarea
              {...commentRegister}
              ref={(e) => {
                commentRegister.ref(e);
                textareaRef.current = e;
              }}
              onChange={(e) => {
                commentRegister.onChange(e);
                handleResizeHeight();
              }}
              className={styles.commentTextarea}
              placeholder="아이템에 대해 설명해주세요."
              maxLength={201}
              rows={1}
            />
            <div className={styles.length}>
              <p>{watchComment.length}/200</p>
            </div>
            {/** end-글자수세기 */}
            <div className={styles.toolsContainer}>
              <div className={styles.toolsWrapper}>
                <ItemImageUploader index={index}>
                  <input
                    className={styles.imageInput}
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    id={`${index}-image`}
                    {...imageRegister}
                    onChange={(e) => {
                      handleImageChange(e);
                    }}
                  />
                </ItemImageUploader>
                <ItemLinkUploader index={index} />
              </div>
              {/** end-toolsWrapper*/}
              <button
                className={styles.deleteButton}
                onClick={() => {
                  handleDeleteItem(index);
                }}
              >
                삭제
              </button>
            </div>
            {/** end-toolsContainer */}
            <div className={styles.previewContainer}>
              {watchImage !== '' && <ItemImagePreview image={watchImage} handleClearButtonClick={handleImageClear} />}
              {watchLink !== '' && <ItemLinkPreview url={watchLink} handleClearButtonClick={handleLinkClear} />}
            </div>
            {/** end-previewContainer */}
          </div>
          {/** end-content */}
        </>
      ) : null}
    </div>
  );
}
