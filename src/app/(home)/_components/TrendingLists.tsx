'use client';
import Link from 'next/link';
import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import getTrendingLists from '@/app/_api/home/getTrendingLists';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { TrendingListType } from '@/lib/types/exploreType';
import { TRENDINGLISTS_DATA } from '../mock/mockdata';

import * as styles from './TrendingLists.css';
import { vars } from '@/styles/theme.css';
import { TrendingListsSkeleton } from '../../../components/exploreComponents/Skeleton';

function TrendingList() {
  // 오류로인해 주석처리 해 둠
  // const { data: trendingLists, isFetching } = useQuery({
  //   queryKey: [QUERY_KEYS.getTrendingLists],
  //   queryFn: () => getTrendingLists(),
  // });

  const SWIPER_STYLE = useMemo(
    () => ({
      height: '280px',
      padding: '10px 0',
    }),
    []
  );

  const SWIPER_SLIDER_STYLE = useMemo(
    () => ({
      width: '260px',
      borderRadius: '260px',
    }),
    []
  );

  // if (isFetching) {
  //   return <TrendingListsSkeleton />;
  // }

  return (
    <section className={styles.wrapper}>
      <div className={styles.listWrapper}>
        <div className={styles.slide}>
          {TRENDINGLISTS_DATA && TRENDINGLISTS_DATA.length > 0 && (
            <Swiper
              slidesPerView={'auto'}
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={20}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, EffectCoverflow]}
              className="mySwiper"
              style={SWIPER_STYLE}
            >
              {TRENDINGLISTS_DATA.map((item, index) => (
                <SwiperSlide key={index} className={styles.sliderItem} style={SWIPER_SLIDER_STYLE}>
                  <TrendingListItem item={item} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}

interface TrendingListItemProps {
  item: any;
  index: number;
}

function TrendingListItem({ item }: TrendingListItemProps) {
  if (!item) return null;

  return (
    <Link href={`/list/${item.id}`}>
      <div className={styles.testItem} style={assignInlineVars({})}>
        {item.itemImageUrl ? (
          <div
            className={styles.itemWrapperWithImage}
            style={assignInlineVars({
              [styles.customBackgroundImage]: `url(${item.itemImageUrl})`,
              [styles.customBorderRadius]: '50%',
            })}
          >
            <TrendingListInformation item={item} />
          </div>
        ) : (
          <div
            className={styles.itemWrapper}
            style={assignInlineVars({
              [styles.customBorderRadius]: '38px',
              [styles.customBackgroundColor]: '#ffffff',
            })}
          >
            <TrendingListInformation item={item} />
          </div>
        )}
      </div>
    </Link>
  );
}

export default TrendingList;

interface TrendingListInformationType {
  item?: TrendingListType;
}

function TrendingListInformation({ item }: TrendingListInformationType) {
  if (!item) return null; // item이 없으면 null을 반환하여 렌더링을 중지합니다.

  return (
    <div className={styles.itemInformationWrapper}>
      <div className={styles.category}>{item.category}</div>
      <div
        className={styles.itemTitle}
        style={assignInlineVars({ [styles.customFontColor]: item.itemImageUrl ? vars.color.white : vars.color.black })}
      >
        <h5 className={styles.itemTitleContent}>{item.title}</h5>
        <p className={styles.listOwner}>{item.ownerNickname}</p>
      </div>
      <ul className={styles.top3Wrapper}>
        {item.top3.map((el, idx) => (
          <li key={idx} className={item.itemImageUrl ? styles.top3ItemWithImage : styles.top3ItemNoImage}>
            {`${idx + 1}. ${el.title}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
