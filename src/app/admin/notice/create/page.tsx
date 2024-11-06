'use client';

import { useQuery } from '@tanstack/react-query';

import getNoticeCategories from '@/app/_api/notice/getNoticeCategories';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

export default function CreateNotice() {
  const { data: categories } = useQuery({
    queryKey: [QUERY_KEYS.getNoticeCategories],
    queryFn: getNoticeCategories,
    staleTime: Infinity,
  });

  return (
    <div>
      <h1>게시물 생성</h1>
      <select>{categories?.map((category) => <option key={category.code}>{category.viewName}</option>)}</select>
      <div>
        <label>제목</label>
        <input />
      </div>
      <div>
        <label>소개</label>
        <input />
      </div>
      <section>게시물 블록</section>
    </div>
  );
}
