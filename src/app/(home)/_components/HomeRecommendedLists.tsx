'use client';
import Link from 'next/link';
import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import getHomeRecommendedLists from '@/app/_api/home/getHomeRecommendedLists';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { HomeRecommendedListType } from '@/lib/types/homeType';

import * as styles from './HomeRecommendedLists.css';
import { vars } from '@/styles/theme.css';

function HomeRecommendedLists() {
  const { data: recommendedLists, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.getHomeRecommendedLists],
    queryFn: () => getHomeRecommendedLists(),
  });

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

  return (
    <section className={styles.wrapper}>
      <div className={styles.listWrapper}>
        <div className={styles.slide}>
          {recommendedLists && recommendedLists.length > 0 && (
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
              {recommendedLists.map((item, index) => (
                <SwiperSlide key={index} className={styles.sliderItem} style={SWIPER_SLIDER_STYLE}>
                  <RecommendedListsItem item={item} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeRecommendedLists;

interface TrendingListItemProps {
  item: HomeRecommendedListType;
  index: number;
}

function RecommendedListsItem({ item }: TrendingListItemProps) {
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
            <RecommendedListsInfo item={item} />
          </div>
        ) : (
          <div
            className={styles.itemWrapper}
            style={assignInlineVars({
              [styles.customBorderRadius]: '38px',
              [styles.customBackgroundColor]: '#ffffff',
            })}
          >
            <RecommendedListsInfo item={item} />
          </div>
        )}
      </div>
    </Link>
  );
}

interface RecommendedListsInfoType {
  item?: HomeRecommendedListType;
}

function RecommendedListsInfo({ item }: RecommendedListsInfoType) {
  if (!item) return null;

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
        {item &&
          item?.items?.map((el, idx) => (
            <li key={idx} className={item.itemImageUrl ? styles.top3ItemWithImage : styles.top3ItemNoImage}>
              {`${idx + 1}. ${el.title}`}
            </li>
          ))}
      </ul>
    </div>
  );
}
