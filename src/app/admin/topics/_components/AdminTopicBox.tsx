'use client';
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

import BottomSheet from './BottomSheet';

import { RequestedTopicType } from '@/lib/types/requestedTopicType';
import editAdminTopic from '@/app/_api/adminTopics/editAdminTopic';
import formatDate from '@/lib/utils/dateFormat';
import getCategories from '@/app/_api/category/getCategories';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { CategoryType } from '@/lib/types/categoriesType';

import * as styles from './AdminTopicBox.css';

interface TopicBoxProps {
  topic: RequestedTopicType;
}

function TopicBox({ topic }: TopicBoxProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const editTopicMutation = useMutation({
    // mutationFn: () =>
    //   editAdminTopic({
    //     // topicId: topic?.id,
    //     isExposed: !topic.isExposed,
    //     title: topic?.title,
    //     categoryCode: topic?.categoryKorName,
    //   }),
  });

  const handleClickEditButton = () => {
    setIsBottomSheetOpen(true);
  };

  const handleToggleExposeButton = () => {
    editTopicMutation.mutate();
  };

  return (
    <>
      <tr className={styles.bodyRow}>
        <td>{formatDate(topic?.createdDate)}</td>
        <td>{topic?.categoryKorName}</td>
        <td className={styles.rowItem}>
          <span className={styles.rowText}>{topic?.title}</span>
          <span className={styles.rowText}>{topic?.description}</span>
        </td>
        <td className={styles.buttons}>
          <span className={styles.rowText}>{topic?.isAnonymous ? 'O' : 'X'}</span>
        </td>
        <td className={styles.buttons}>
          <button className={styles.editButton} onClick={handleClickEditButton}>
            수정하기
          </button>
        </td>
        <td>
          <select onChange={handleToggleExposeButton} value={topic?.isExposed ? '공개' : '비공개'}>
            <option>공개</option>
            <option>비공개</option>
          </select>
        </td>
      </tr>

      {isBottomSheetOpen && (
        <BottomSheet
          onClose={() => {
            setIsBottomSheetOpen(false);
          }}
          topicTitle={topic?.title}
          category={topic?.categoryKorName}
          isExposed={topic?.isExposed}
          // {topicI수정필요}
          topicId={0}
        />
      )}
    </>
  );
}

export default TopicBox;
