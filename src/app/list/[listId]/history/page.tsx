'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import Header from '@/components/Header/Header';
import { Graph } from './_component/HistoryGraph';
import { Version } from './_component/HistoryVersions';

import getListDetail from '@/app/_api/list/getListDetail';
import getHistories from '@/app/_api/history/getHistories';
import { ListDetailType } from '@/lib/types/listType';
import { HistoryType } from '@/lib/types/historyType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from './page.css';
import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/[listId]/locale';

function HistoryPage() {
  const { language } = useLanguage();
  const [type, setType] = useState<'graph' | 'version'>('graph');

  const router = useRouter();
  const param = useParams<{ listId: string }>();
  const listId = param?.listId;

  const { data: listData } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail, listId],
    queryFn: () => getListDetail(Number(listId)),
  });

  const { data: historyData } = useQuery<HistoryType[]>({
    queryKey: [QUERY_KEYS.getHistories, listId],
    queryFn: () => getHistories(listId),
  });

  return (
    <div className={styles.page}>
      <Header
        title={listLocale[language].history}
        left="back"
        leftClick={() => {
          router.push(`/list/${listId}`);
        }}
      />
      <div className={styles.navContainer}>
        <button
          className={`${styles.navButton} ${type === 'graph' ? styles.activeButton : ''}`}
          onClick={() => setType('graph')}
        >
          {listLocale[language].graph}
        </button>
        <button
          className={`${styles.navButton} ${type === 'version' ? styles.activeButton : ''}`}
          onClick={() => setType('version')}
        >
          {listLocale[language].version}
        </button>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.listTitle}>{listData?.title}</div>
        {type === 'graph' ? (
          <Graph histories={historyData ? historyData : []} />
        ) : (
          <Version histories={historyData ? historyData : []} listId={listId} listOwnerId={listData?.ownerId} />
        )}
      </div>
    </div>
  );
}
export default HistoryPage;
