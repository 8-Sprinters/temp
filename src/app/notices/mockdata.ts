import { NoticeListItemType, NoticeDetailType } from '@/lib/types/noticeType';

export const NOTICE_LIST_MOCKDATA: NoticeListItemType[] = [
  {
    id: 1,
    createdDate: '2024-10-01',
    title: 'New Feature Release',
    itemImageUrl: null,
    category: '소식',
    description: 'We have released a new feature that will enhance your experience.',
  },
  {
    id: 2,
    createdDate: '2024-09-28',
    title: 'Scheduled Maintenance',
    itemImageUrl: 'https://singlesumer.com/files/attach/images/138/863/046/f787f76706d1b00f77ea67d4d2b833f4.jpg',
    category: '이벤트',
    description: 'The system will undergo maintenance on October 5th. Please be aware of potential downtime.',
  },
  {
    id: 3,
    createdDate: '2024-09-25',
    title: 'Holiday Event',
    itemImageUrl: 'https://singlesumer.com/files/attach/images/138/863/046/f787f76706d1b00f77ea67d4d2b833f4.jpg',
    category: '팁',
    description: 'Join our special holiday event starting October 10th with exciting offers!',
  },
  {
    id: 4,
    createdDate: '2024-09-22',
    title: 'Security Update',
    itemImageUrl: 'https://singlesumer.com/files/attach/images/138/863/046/f787f76706d1b00f77ea67d4d2b833f4.jpg',
    category: '소식',
    description: 'We have implemented new security protocols to better protect user data.',
  },
  {
    id: 5,
    createdDate: '2024-09-18',
    title: '5 Tips to Maximize Productivity',
    itemImageUrl: 'https://singlesumer.com/files/attach/images/138/863/046/f787f76706d1b00f77ea67d4d2b833f4.jpg',
    category: '팁',
    description: 'Learn how to improve your productivity with these simple tips.',
  },
  {
    id: 6,
    createdDate: '2024-09-15',
    title: 'Server Downtime Resolved',
    itemImageUrl: null,
    category: '이벤트',
    description: 'The recent server issue has been resolved. All systems are back online.',
  },
  {
    id: 7,
    createdDate: '2024-09-10',
    title: 'New Blog Post Available',
    itemImageUrl: 'https://singlesumer.com/files/attach/images/138/863/046/f787f76706d1b00f77ea67d4d2b833f4.jpg',
    category: '소식',
    description: 'Check out our latest blog post on the importance of cybersecurity.',
  },
];

export const NOTICE_DETAIL_MOCKDATA: NoticeDetailType = {
  id: 1,
  category: '소식',
  title: '서비스 점검 안내',
  description: '서비스 점검이 10월 20일에 진행될 예정입니다.',
  content: [
    {
      type: 'subtitle',
      description: '점검 일정',
      imageUrl: 'https://example.com/notice-image1.jpg',
      buttonName: '자세히 보기',
      buttonLink: 'https://example.com/detail1',
    },
    {
      type: 'body',
      description: '10월 20일 오전 2시부터 5시까지 서비스가 일시적으로 중단됩니다.',
      imageUrl: 'https://example.com/notice-image2.jpg',
      buttonName: '점검 내용 확인',
      buttonLink: 'https://example.com/detail2',
    },
    {
      type: 'image',
      description: '',
      imageUrl: 'https://i.pinimg.com/236x/6d/01/c6/6d01c6944a011e871bf23333bfb01562.jpg',
      buttonName: '',
      buttonLink: '',
    },
    {
      type: 'line',
      description: '',
      imageUrl: '',
      buttonName: '',
      buttonLink: '',
    },
    {
      type: 'button',
      description: '',
      imageUrl: '',
      buttonName: '리스티웨이브 바로가기',
      buttonLink: 'www.listywave.com',
    },
    {
      type: 'note',
      description: '유의사항\ntextarea로\n작성\n...\n...\n...',
      imageUrl: '',
      buttonName: '',
      buttonLink: '',
    },
  ],
  createdDate: '2024-10-10',
  prevNotice: {
    id: 0,
    title: '이전 공지가 없습니다.',
    description: '',
  },
  nextNotice: {
    id: 2,
    title: '새로운 기능 출시 안내',
    description: '곧 출시될 새로운 기능에 대해 안내드립니다.',
  },
};
