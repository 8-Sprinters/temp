'use client';
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

import BottomSheet from './BottomSheet';

import { RequestedTopicType } from '@/lib/types/requestedTopicType';
import editAdminTopic from '@/app/_api/adminTopics/editAdminTopic';
import * as styles from './AdminTopicBox.css';

interface TopicBoxProps {
  topic: RequestedTopicType;
}

function TopicBox({ topic }: TopicBoxProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const editTopicMutation = useMutation({
    // mutationFn: () =>
    //   editAdminTopic({
    //     isExposed: !topic.isExposed,
    //     title,
    //     categoryCode,
    //     topicId,
    //   }),
  });

  const clickToggleExposeButton = () => {
    setIsBottomSheetOpen(true);
    editTopicMutation.mutate();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.topicWrapper}>
          <div className={styles.category}>{topic?.categoryKorName}</div>
          <div className={styles.topic}>{topic?.title}</div>
        </div>
        <div className={styles.contentWrapper}>
          <div>{topic?.description}</div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.author}>{topic?.ownerNickname}</div>
          <div className={styles.author}>{topic?.createdDate}</div>
          <div className={styles.anonymous}>{topic?.isAnonymous && '익명'}</div>
        </div>
        {/* <button className={styles.addBtn}>
        <PlusIcon />
        </button> */}
      </div>
      <div className={styles.buttonWrapper}>
        <button className={topic?.isExposed ? styles.exposedButton : styles.notExposedButton}>
          {topic?.isExposed ? '노출' : '미노출'}
        </button>
        <button className={styles.editButton} onClick={clickToggleExposeButton}>
          수정하기
        </button>
      </div>
      {isBottomSheetOpen && (
        <BottomSheet
          onClose={() => {
            setIsBottomSheetOpen(false);
          }}
          topicTitle={topic.title}
          category={topic.categoryKorName}
          isExposed={topic.isExposed}
        />
      )}
    </div>
  );
}

export default TopicBox;
