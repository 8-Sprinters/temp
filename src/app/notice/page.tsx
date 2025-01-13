import NoticeList from './NoticeList';
import Header from '@/components/Header/Header';

function NoticePage() {
  return (
    <section>
      <Header title={'게시판'} left={'back'} />
      <NoticeList />
    </section>
  );
}

export default NoticePage;
