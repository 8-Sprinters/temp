'use client';

import * as styles from './Collections.css';

import HeaderContainer from './CollectionsHeader';
import NoData from './NoData';
import ShapeSimpleList from '@/components/ShapeSimpleList/ShapeSimpleList';

import { CollectionType } from '@/lib/types/listType';

interface CollectionsProps {
  collectionList: CollectionType[];
  folderName: string;
  isHideOption: boolean;
  handleSetOn: () => void;
  handleSetOnDeleteOption: () => void;
}

export default function Collections({
  collectionList,
  folderName,
  isHideOption,
  handleSetOn,
  handleSetOnDeleteOption,
}: CollectionsProps) {
  return (
    <>
      <HeaderContainer
        handleSetOnBottomSheet={handleSetOn}
        handleSetOnDeleteOption={handleSetOnDeleteOption}
        isHideOption={isHideOption}
        headerTitle={folderName}
      />

      {collectionList && collectionList.length > 0 ? (
        <ul className={styles.container}>
          {collectionList.map(({ list, id }) => {
            const hasImage = !!list.representativeImageUrl;
            return <ShapeSimpleList list={list} hasImage={hasImage} key={id} />;
          })}
        </ul>
      ) : (
        <NoData />
      )}
    </>
  );
}
