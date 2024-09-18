import * as styles from './Section.css';

interface SectionProps {
  children: React.ReactNode;
  title: string;
  isRequired?: boolean;
}

/**
 * Section 컴포넌트:
 * 리액트 생성 페이지의 영역을 나누는 레이아웃용 컴포넌트
 *
 * @param props.title - 영역의 이름
 * @param props.isRequired - 필수 입력 영역, 빨간 *가 표시된다.
 * @param props.children - 영역 안에 포함될 tsx 내용
 */
function Section({ title, isRequired, children }: SectionProps) {
  return (
    <div>
      <div className={styles.title}>
        {title} {isRequired && <span className={styles.required}>*</span>}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Section;
