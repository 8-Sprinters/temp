const NOTICE_CATEGORY_NAME = {
  news: '소식',
  event: '이벤트',
  tip: '팁',
} as const;

const NOTICE_CONTENT = {
  subtitle: '소제목',
  body: '본문',
  image: '이미지',
  button: '버튼',
  line: '구분선',
  note: '유의',
} as const;

export { NOTICE_CATEGORY_NAME, NOTICE_CONTENT };
