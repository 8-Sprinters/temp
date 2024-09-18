import { useEffect, useState } from 'react';
import * as styles from './ButtonSelector.css';
import { CategoryType } from '@/lib/types/categoriesType';

interface ButtonSelectorProps {
  list: CategoryType[];
  onClick: (item: CategoryType) => void;
  defaultValue: string;
}

/**
 * ButtonSelector 컴포넌트:
 * 사용자가 좌우스크롤로 이동하며 클릭을 통해
 * 카테고리를 선택할 수 있는 컴포넌트
 *
 * @param list - 버튼으로 보여줄 목록
 * @param onClick - 버튼을 클릭했을때 동작시킬 함수
 * @param defaultValue - 기본으로 선택되어있는 요소
 */
function ButtonSelector({ list, onClick, defaultValue }: ButtonSelectorProps) {
  const [selectedButton, setSelectedButton] = useState<string>(defaultValue);

  useEffect(() => {
    setSelectedButton(defaultValue);
  }, [defaultValue]);

  return (
    <div className={styles.container}>
      {list.map((item) => (
        <button
          key={item.code}
          className={`${styles.button} ${item.engName.toLocaleLowerCase() === selectedButton?.toLocaleLowerCase() ? styles.buttonActive : ''}`}
          onClick={() => {
            onClick(item);
            setSelectedButton(item.engName);
          }}
        >
          {item.korName}
        </button>
      ))}
    </div>
  );
}
export default ButtonSelector;
