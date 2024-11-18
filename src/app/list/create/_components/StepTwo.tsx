'use client';

import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';

import { useLanguage } from '@/store/useLanguage';
import { vars } from '@/styles/theme.css';

import { listLocale } from '@/app/list/create/locale';

import Header from '@/components/Header/Header';
import { StrictModeDroppable } from '@/components/StrictModeDroppable';
import ItemAccordion from './ItemAccordion';

import AddIcon from '/public/icons/add.svg';

import * as styles from './Step.css';
import { ItemType, ListCreateType } from '@/lib/types/listType';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import NoDataComponent from '@/components/NoData/NoDataComponent';
/**
 * TODO:
 * 1. 브라우저 뒤로가기 눌렀을 경우 내용 사라짐 경고
 * 2. 링크 추가하기에 임베딩 미리보기 기능 추가
 * 3. (사용자테스트) 아이템 최소 기준 인지 잘 되는지.
 * 4. 아이템 모두 빈값일 경우 '다음' 클릭 시 자동 삭제 되도록.
 */

interface StepTwoProps {
  onBeforeClick: () => void;
  onNextClick: () => void;
  type: 'create' | 'edit';
}

/**
 * StepTwo 컴포넌트:
 * 리스트 생성/수정 과정 2단계
 *
 * @param props.onNextClick - 헤더의 '다음'버튼을 클릭했을때 동작시킬 함수
 * @param props.type - 생성과 수정 중 택1
 */
export default function StepOne({ onBeforeClick, onNextClick, type }: StepTwoProps) {
  const { language } = useLanguage();

  /** react-hook-form */
  const {
    control,
    getValues,
    setValue,
    formState: { isValid },
  } = useFormContext();

  //--- item 갯수 기준
  const MIN_ITEM_COUNT = 3;
  const MAX_ITEM_COUNT = 10;

  //--- item 여러 입력값 배열 설정
  const {
    fields: items,
    append,
    remove,
  } = useFieldArray({
    name: 'items',
    control,
    rules: { minLength: MIN_ITEM_COUNT, maxLength: MAX_ITEM_COUNT },
  });

  const watchItems = useWatch({ control, name: 'items' });

  //--- item 제거
  const handleDeleteItem = (itemId: number) => {
    remove(itemId);
  };

  //--- item 추가
  const handleClickAddItem = () => {
    append({
      id: 0,
      rank: 0,
      title: '',
      comment: '',
      link: '',
      imageUrl: '',
    });
  };

  /** 아이템 dnd, accordion */
  //---single accordion 펼침 아이템 선택 //
  const [expandItem, setExpandItem] = useState<null | number>(null);

  const handleToggleItem = (index: number) => {
    setExpandItem((prev) => (prev === index ? null : index));
  };

  //--- 드래그 끝났을 때 실행되는 이벤트
  const handleOnDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return; // 드랍 위치가 없으면 종료
    if (source.index !== destination.index) {
      const currentArray = getValues('items'); // 기존 아이템 배열을 복사
      const [movedItem] = currentArray.splice(source.index, 1); // 소스 아이템 제거
      currentArray.splice(destination.index, 0, movedItem); // 타겟 위치에 아이템 추가
      setValue('items', currentArray); // 상태 업데이트
      if (source.index === expandItem) handleToggleItem(destination.index); //아코디언 열림닫힘 상태 유지
    }
  };

  //--- 아이템 중복 확인
  const getIsAllUnique = () => {
    //타입명시
    const allItems = getValues().items;

    const allTitles = allItems.map((item: ItemType, itemIndex: number) => {
      return item.title === '' ? itemIndex.toString() : item.title;
    });

    // 중복 여부 확인
    const isAllUnique = new Set(allTitles).size === allTitles.length;
    return isAllUnique;
  };

  //--- Step2 -> Step3 다음 버튼 클릭
  const handleNextClick = () => {
    if (getIsAllUnique()) {
      onNextClick();
    } else {
      toasting({ type: 'error', txt: toastMessage[language].duplicatedItemError });
    }
  };

  return (
    <>
      <Header
        title={type === 'create' ? listLocale[language].createList : listLocale[language].editList}
        left="back"
        leftClick={onBeforeClick}
        right={
          <button
            className={styles.nextButton}
            onClick={handleNextClick}
            disabled={!isValid || watchItems.length < MIN_ITEM_COUNT}
          >
            {listLocale[language].next}
          </button>
        }
      />
      {/** end-Header */}
      <div className={styles.section}>
        <div className={styles.field}>
          <label className={styles.label}>
            {listLocale[language].item} <span className={styles.requiredIcon}>*</span>
          </label>
          <div>
            {/**TODO:Locale 적용 */}
            <p className={styles.subLabel}>리스트에 무엇을 담고 싶나요?</p>
            <p className={styles.description}>
              ・ 최소 3개, 최대 10개까지 추가할 수 있어요. <br />
              ・ 이미 등록한 아이템명은 수정이 불가능해요. 삭제는 할 수 있어요. <br />・ 순서대로 순위가 정해져요.
              순서는 언제든 바꿀 수 있어요.
            </p>
          </div>
          {/** end-아이템 필드 설명 */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {/** 드래그 범위 설정 */}
            <StrictModeDroppable droppableId="items">
              {(provided) => (
                <div className={styles.itemList} ref={provided.innerRef} {...provided.droppableProps}>
                  {getValues('items').length ? (
                    items.map((item, index) => {
                      return (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              className={snapshot.isDragging ? styles.draggingItem : styles.item}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <ItemAccordion
                                index={index}
                                type={type}
                                handleToggleItem={handleToggleItem}
                                isExpand={expandItem === index}
                                handleDeleteItem={handleDeleteItem}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    })
                  ) : (
                    <NoDataComponent message="아이템을 추가해 주세요." />
                  )}
                </div>
              )}
            </StrictModeDroppable>
          </DragDropContext>
        </div>
        {/** end-아이템field */}

        {/* 아이템 추가 버튼 */}
        <div>
          {watchItems.length < MIN_ITEM_COUNT && (
            <div className={styles.minimumMessage}>⚠️ 아이템은 최소 3개가 필요해요.</div>
          )}

          {watchItems.length < MAX_ITEM_COUNT && (
            <button className={styles.addButton} onClick={handleClickAddItem}>
              <AddIcon width={16} height={16} fill={vars.color.blue} /> {listLocale[language].addItem}
            </button>
          )}
        </div>
      </div>
      {/** end-section */}
    </>
  );
}
