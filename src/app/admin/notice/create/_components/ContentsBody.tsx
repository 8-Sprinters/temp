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
  const { control } = useFormContext();
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

  // TODO 드래그 종료시 실행될 함수
  const handleOnDragEnd = ({ draggableId, source, destination }: DropResult) => {
    console.log(draggableId, source, destination);
  };

  return (
    <>
      <section>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <StrictModeDroppable droppableId="items">
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
