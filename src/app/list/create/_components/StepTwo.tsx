'use client';

import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';

import { useLanguage } from '@/store/useLanguage';

import { listError, listLocale } from '@/app/list/create/locale';
import { FormErrors } from '@/app/list/create/page';

import Header from '@/components/Header/Header';
import { StrictModeDroppable } from '@/components/StrictModeDroppable';

import * as styles from './Step.css';
import ItemAccordion from './ItemAccordion';
import { useState } from 'react';

//TODO: 브라우저 뒤로가기 눌렀을 경우 내용 사라짐 경고

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
    register,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  //--- item 여러 입력값 배열 설정
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

  //--- item 제거
  const handleDeleteItem = (itemId: number) => {
    remove(itemId);
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

  return (
    <>
      <Header
        title={'리스트 만들기'}
        left="back"
        leftClick={onBeforeClick}
        right={
          <button className={styles.nextButton} onClick={onNextClick} disabled={false}>
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
              ・ 이미 등록한 아이템명은 수정이 불가능해요. <br />
              ・ 최소 3개, 최대 10개까지 추가할 수 있어요. <br />
              ・ 삭제와 추가는 언제든 가능해요. <br />・ 순서대로 순위가 정해져요. 순서는 언제든 바꿀 수 있어요.
            </p>
          </div>
          {/** end-아이템 필드 설명 */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {/** 드래그 범위 설정 */}
            <StrictModeDroppable droppableId="items">
              {(provided) => (
                <div className={styles.itemList} ref={provided.innerRef} {...provided.droppableProps}>
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
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ItemAccordion
                              index={index}
                              handleToggleItem={handleToggleItem}
                              isExpand={expandItem === index}
                              handleDeleteItem={handleDeleteItem}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                </div>
              )}
            </StrictModeDroppable>
          </DragDropContext>
        </div>
        {/** end-아이템field */}
        <button>아이템 추가하기</button>
      </div>
      {/** end-section */}
    </>
  );
}
