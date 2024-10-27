'use client';

import * as styles from './BottomSheet.css';
import { MouseEventHandler, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useUser } from '@/store/useUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import getCategories from '@/app/_api/category/getCategories';
import editAdminTopic from '@/app/_api/adminTopics/editAdminTopic';

import { CategoryType } from '@/lib/types/categoriesType';
import ArrowDown from '/public/icons/down_chevron.svg';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import Modal from '@/components/Modal/Modal';

interface BottomSheetProps {
  onClose: MouseEventHandler<HTMLDivElement>;
  topicTitle: string;
  category: string;
  isExposed: boolean;
}
// TODO: 컴포넌트 공통화 작업
function BottomSheet({ onClose, topicTitle, category, isExposed }: BottomSheetProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isOn: isModalOn, handleSetOn: openModal, handleSetOff: closeModal } = useBooleanOutput(false);

  const [title, setTitle] = useState(topicTitle);
  const [selectedCategory, setSelectedCategory] = useState<string>(category);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  //카테고리 불러오기
  const { data: categories } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  const editTopicMutation = useMutation({
    // mutationFn: () =>
    //   editAdminTopic({
    //     isExposed,
    //     title,
    //     categoryCode,
    //   }),
    onSuccess: () => {
      setTitle('');
      setSelectedCategory(selectedCategory);
      openModal();
    },
    onError: (error) => {
      setErrorMessage('요청 중 오류가 발생했습니다. 다시 시도해 주세요. :(');
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

  // 리스트 주제(제목) 글자 수 제한 정책
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > 30) {
      setErrorMessage('리스트 주제를 30자 이내로 작성해주세요.');
    } else {
      setErrorMessage(null);
    }
    setTitle(inputValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.length > 30) {
      return;
    }

    setIsDropdownOpen(false);
    editTopicMutation.mutate();
  };

  return (
    <div className={styles.backGround} onClick={onClose} ref={ref}>
      <div className={styles.bottomsheet} onClick={stopPropagation}>
        <div className={styles.header}>수정하기</div>
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
          </div>

          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="수정하고 싶은 제목으로 입력해 주세요.*"
              value={title}
              onChange={handleTitleChange}
              className={styles.input}
              required
            />
            {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          </div>

          <button type="submit" className={styles.submitButton} disabled={!title || title.length > 30}>
            요청 보내기
          </button>
        </form>
      </div>
      {isModalOn && (
        <Modal handleModalClose={closeModal} size="large">
          <div className={styles.modalText}>{`요청 주제 수정이 완료되었어요.`} </div>
          <button
            className={styles.modalButton}
            onClick={() => {
              closeModal();
              setIsDropdownOpen(false); //실행안됨
            }}
          >
            닫기
          </button>
        </Modal>
      )}
    </div>
  );
}

export default BottomSheet;
