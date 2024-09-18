'use client';

import Header from '@/components/Header/Header';

export default function CreatePage() {
  return (
    <>
      <p>리스트 생성 페이지</p>
      <Header
        title={'리스트 만들기'}
        left="cancel"
        leftClick={() => {
          console.log('뒤로가기');
        }}
        right={'다음'}
      />
    </>
  );
}
