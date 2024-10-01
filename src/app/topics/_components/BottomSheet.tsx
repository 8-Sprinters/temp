'use client';

import * as styles from './BottomSheet.css';
import { MouseEventHandler, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useUser } from '@/store/useUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import getCategories from '@/app/_api/category/getCategories';
import createTopic from '@/app/_api/topics/createTopic';
import { CategoryType } from '@/lib/types/categoriesType';
import ArrowDown from '/public/icons/down_chevron.svg';

interface BottomSheetProps {
  onClose: MouseEventHandler<HTMLDivElement>;
}

// TODO : 하단 그라데이션 넣기
function BottomSheet({ onClose }: BottomSheetProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();

  //카테고리 불러오기
  const { data: categories } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  //생성요청 API 호출
  const createTopicMutation = useMutation({
    mutationFn: () =>
      createTopic({
        categoryKorName: selectedCategory,
        title,
        description,
        ownerId: user.id,
        isAnonymous,
      }),
    onSuccess: () => {
      setIsDropdownOpen(false);
      setSelectedCategory('전체');
      setTitle('');
      setDescription('');
      setIsAnonymous(false);
    },
  });

  //드롭다운 바깥쪽 클릭하면 닫히게
  const { ref } = useOnClickOutside(() => {
    setIsDropdownOpen(false);
  });
  const stopPropagation: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO 에러났을때랑, 제대로 생성됐을때, 토스트메시지 띄우기
    if (!title) {
      setError('제목을 입력해 주세요');
      return;
    }
    setError(null);

    createTopicMutation.mutate();
  };

  return (
    <div className={styles.backGround} onClick={onClose} ref={ref}>
      <div className={styles.bottomsheet} onClick={stopPropagation}>
        <div className={styles.header}>신청하기</div>
        <div className={styles.subText}>관리자 검토 후 노출되며, 정책에 위반될 경우 수정 또는 삭제될 수 있어요.</div>

        <form onSubmit={handleSubmit}>
          <div className={styles.upperWrapper}>
            <div className={styles.selectWrapper}>
              <button type="button" onClick={toggleDropdown} className={styles.categoryButton}>
                <span className={styles.categoryText}>{selectedCategory}</span>
                <ArrowDown alt="카테고리 선택" />
              </button>
              {isDropdownOpen && (
                <ul className={styles.dropdown}>
                  {categories?.map((category) => (
                    <li
                      key={category.code}
                      className={styles.dropdownItem}
                      onClick={() => selectCategory(category.korName)}
                    >
                      {category.korName}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={styles.anonymousWrapper}>
              <input
                type="checkbox"
                id="anonymous"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className={styles.checkbox}
              />
              <label htmlFor="anonymous" className={styles.checkboxLabel}>
                익명으로 요청하기
              </label>
            </div>
          </div>

          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="주제*"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              required
            />
            {error && <div className={styles.errorMessage}>{error}</div>}
            <input
              type="text"
              placeholder="소개"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            요청 보내기
          </button>
        </form>
      </div>
    </div>
  );
}

export default BottomSheet;
