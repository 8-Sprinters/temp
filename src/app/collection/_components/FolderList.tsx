import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import * as styles from './FolderList.css';

import FolderIcon from '@/components/icons/FolderIcon';

import getFolders, { FoldersResponseType } from '@/app/_api/folder/getFolders';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { FoldersType } from '@/lib/types/folderType';

interface FolderType {
  folder: FoldersType;
}

function Folder({ folder }: FolderType) {
  return (
    <Link href={`/collection/${folder.folderId}`} key={folder.folderId} className={styles.folder}>
      <FolderIcon />
      <p className={styles.title}>
        <span className={styles.folderName}>{folder.folderName}</span>
        {folder.listCount > 0 && <span>{`(${folder.listCount})`}</span>}
      </p>
    </Link>
  );
}

export default function FolderList() {
  const { data } = useQuery<FoldersResponseType>({
    queryKey: [QUERY_KEYS.getFolders],
    queryFn: getFolders,
    staleTime: 1000 * 60 * 5, // 5분 설정
  });

  const defaultFolder: FoldersType = {
    folderId: 0,
    folderName: '전체',
    listCount: 0,
  };

  return (
    <div className={styles.folders}>
      {data?.folders &&
        [defaultFolder, ...data.folders].map((folder) => <Folder key={folder.folderId} folder={folder} />)}
    </div>
  );
}
