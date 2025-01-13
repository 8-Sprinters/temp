import NoticeDetailComponent from './NoticeDetail';

interface NoticeDetailPageProps {
  params: {
    noticeId: string; // Next.js에서 params는 기본적으로 string 타입으로 전달됩니다.
  };
}

function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  return (
    <section>
      <NoticeDetailComponent params={params} />
    </section>
  );
}

export default NoticeDetailPage;
