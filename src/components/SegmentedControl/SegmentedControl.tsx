import * as styles from './SegmentedCotrol.css';

interface SegmentedControlProps {
  options: string[];
  selected: string;
  handleSelect: (option: any) => void;
}

export default function SegmentedControl({ options, selected, handleSelect }: SegmentedControlProps) {
  return (
    <div className={styles.track}>
      {options.map((option) => (
        <div
          key={option}
          className={`${styles.segment} ${option === selected && styles.selectedSegment}`}
          onClick={() => handleSelect(option)}
          role="button"
        >
          {option}
        </div>
      ))}
    </div>
  );
}
