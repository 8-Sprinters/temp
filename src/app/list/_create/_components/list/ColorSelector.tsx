import { useEffect, useState } from 'react';
import { BACKGROUND_COLOR_CREATE, BACKGROUND_COLOR_PALETTE_TYPE } from '@/styles/Color';
import * as styles from './ColorSelector.css';

interface ColorSelectorProps {
  palette: BACKGROUND_COLOR_PALETTE_TYPE;
  defaultColor: string;
  onClick: (color: string) => void;
}

/**
 * ColorSelector 컴포넌트:
 * 동그란 모양의 컬러팔레트로 구성된
 * 사용자의 클릭으로 색상을 선택할 수 있는 컴포넌트
 *
 * @param palette - 선택된 팔레트
 * @param defaultColor - 기본 선택되어있는 색상코드
 * @param onClick - 색상 원을 클릭했을때 동작시킬 함수
 */
function ColorSelector({ palette, defaultColor, onClick }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  useEffect(() => {
    setSelectedColor(defaultColor);
  }, [defaultColor]);

  return (
    <div className={styles.backgroundContainer}>
      {Object.values(BACKGROUND_COLOR_CREATE[palette].colors).map(({ colorID, hex }) => (
        <button
          key={colorID}
          className={`${styles.colorCircle} ${selectedColor.toLocaleUpperCase() === colorID.toLocaleUpperCase() && styles.selectedColor}`}
          style={{ backgroundColor: hex }}
          onClick={() => {
            onClick(colorID);
            setSelectedColor(colorID);
          }}
        />
      ))}
    </div>
  );
}

export default ColorSelector;
