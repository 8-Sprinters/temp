import SelectComponent from '@/components/SelectComponent/SelectComponent';
import { useLanguage } from '@/store/useLanguage';
import { BACKGROUND_COLOR_CREATE, BACKGROUND_COLOR_PALETTE_TYPE } from '@/styles/Color';
import { paletteLocale } from '../../locale';
import * as styles from './PaletteSelector.css';

interface OptionsProps {
  value: string;
  label: string;
}

interface HeaderProps {
  palette: BACKGROUND_COLOR_PALETTE_TYPE;
  handleChangePalette: (target: OptionsProps) => void | undefined;
}

//TODO : 팔레트 드롭다운 locale 적용 안되는 이슈 해결
function PaletteSelector({ palette, handleChangePalette }: HeaderProps) {
  const { language } = useLanguage();

  const dropdownOptions = Object.keys(BACKGROUND_COLOR_CREATE).map((key) => ({
    value: key,
    label: paletteLocale[language][key],
  }));

  return (
    <div className={styles.container}>
      <SelectComponent
        defaultValue={{ value: palette, label: paletteLocale[language][palette] }}
        name="palette"
        options={dropdownOptions}
        isSearchable={false}
        onChange={handleChangePalette}
      />
    </div>
  );
}

export default PaletteSelector;
