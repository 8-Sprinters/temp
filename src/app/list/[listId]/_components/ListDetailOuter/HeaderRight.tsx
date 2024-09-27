'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import { useUser } from '@/store/useUser';
import OpenBottomSheetButton from './OpenBottomSheetButton';
import * as styles from './HeaderRight.css';
import HistoryButton from '/public/icons/history.svg';
import PencilButton from '/public/icons/edit_pen.svg';
import { listLocale } from '@/app/list/[listId]/locale';

import { vars } from '@/styles/__theme.css';
import { useLanguage } from '@/store/useLanguage';

interface HeaderRightProps {
  isCollaborator?: boolean;
  isOwner?: boolean;
  isPublic?: boolean;
  ownerId: number;
}

/** @todo 히스토리 이동 로직 list/listId/history로 수정 필요 */

function HeaderRight({ isCollaborator, isOwner, isPublic, ownerId }: HeaderRightProps) {
  const { language } = useLanguage();
  const params = useParams<{ listId: string }>();

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user?.id;

  return (
    <>
      {isPublic === false && !isOwner && !isCollaborator ? (
        <div></div>
      ) : (
        <div className={styles.headerRightWrapper}>
          <Link href={`/list/${params?.listId}/history`}>
            <button className={styles.buttonResetStyle}>
              <HistoryButton alt={listLocale[language].historyButtonAlt} width={24} height={24} />
            </button>
          </Link>
          {/* {리스트 관리 버튼은 리스트 오너, 콜라보레이터일 때만 보이게 하기} */}
          {ownerId === userId && (
            <div className={styles.buttonResetStyle}>
              <OpenBottomSheetButton listId={params?.listId} isCollaborator={isCollaborator} />
            </div>
          )}
          {isCollaborator && (
            <Link href={`/list/${params?.listId}/edit`}>
              <PencilButton width={24} height={24} fill={vars.color.black} />
            </Link>
          )}
        </div>
      )}
    </>
  );
}

export default HeaderRight;
