import { useFieldArray, useFormContext } from 'react-hook-form';

import * as styles from './ContentsBody.css';

import { NOTICE_CONTENT } from '@/lib/constants/notice';
import { ItemsType, NoticeContentsType } from '@/lib/types/noticeType';

import ContentsContainer from './BlockContainer';

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

  return (
    <>
      <section>
        {fields.map((field, index) => (
          <ContentsContainer
            key={field.id}
            content={field as ItemsType & { id: string }}
            order={index}
            handleDeleteBlock={handleDeleteBlock}
          />
        ))}
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
