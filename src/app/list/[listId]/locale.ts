export const commentLocale = {
  ko: {
    replyNickname: '님에게 남긴 답글',
    editing: '댓글/답글 수정 중',
    cancelButtonAlt: '지우기 버튼',
    commentCount: '개의 댓글',
    deletedMessage: '작성자의 요청으로 삭제된 댓글이에요.',
    reply: '답글 달기',
    unknown: '알 수 없음',
    profileImageAlt: '프로필 이미지',
  },
  en: {
    replyNickname: 'A reply to',
    editing: 'Modifying comments/response',
    cancelButtonAlt: 'Clear button',
    commentCount: 'comments',
    deletedMessage: 'This comment was deleted at the request of the author.',
    reply: 'Post a reply',
    unknown: 'unknown',
    profileImageAlt: 'profile image',
  },
};

export const replyLocale = {
  ko: {
    replyCount: '개의 답글',
    lineAlt: '답글 구분선',
    moreReply: '개의 답글 더보기',
    profileImageAlt: '사용자 프로필 이미지',
  },
  en: {
    replyCount: 'replies',
    lineAlt: 'Reply separation line',
    moreReply: 'more replies',
    profileImageAlt: 'User profile image',
  },
};

export const listLocale: Record<string, { [key: string]: string }> = {
  ko: {
    privateMessage: '비공개 처리된 게시물이에요.',
    loginRequired: '로그인이 필요합니다.',
    list: '리스트',
    public: '공개',
    private: '비공개',
    collaborator: '콜라보레이터',
    profileImageAlt: '사용자 프로필 이미지',
    plusButtonAlt: '더하기 모양 아이콘',
    historyButtonAlt: '히스토리 버튼',
    editList: '리스트 수정하기',
    deleteList: '리스트 삭제하기',
    kebabButtonAlt: '케밥 버튼',
    detail: '자세히',
    simple: '간단히',
    noData: '데이터가 없습니다.',
    history: '히스토리',
    graph: '그래프',
    version: '버전',
    noHistory: '히스토리가 없어요.',
    hideHistory: '히스토리 비공개하기',
    deleteHistory: '히스토리 삭제하기',
    arrowDownAlt: '날짜 드롭다운',
    moreButtonAlt: '더보기 버튼',
    privateHistory: '비공개 히스토리에요.',
    crown: '1위 아이템',
    copyListLink: '리스트 링크 복사하기',
    shareListToKakaotalk: '리스트 카카오톡으로 공유하기',
    saveListToImage: '리스트 이미지로 저장하기',
    createListToThisTitle: '이 타이틀로 리스트 생성하기',
    moveToCreateListPageMessage: '리스트 작성 페이지로 이동합니다.',
  },
  en: {
    privateMessage: "It's a closed post.",
    loginRequired: 'Login is required.',
    list: 'List',
    public: 'Public',
    private: 'Private',
    collaborator: 'Collaborator',
    profileImageAlt: 'User profile image',
    plusButtonAlt: 'Plus shape icon',
    historyButtonAlt: 'History Button',
    editList: 'Modifying the list',
    deleteList: 'Delete List',
    kebabButtonAlt: 'Kebab button',
    detail: 'Detail',
    simple: 'Simple',
    noData: 'The data is not available.',
    history: 'History',
    graph: 'Graph',
    version: 'Version',
    noHistory: "There's no history.",
    hideHistory: 'To keep the history private',
    deleteHistory: 'Delete History',
    arrowDownAlt: 'Date drop-down',
    moreButtonAlt: 'More button',
    privateHistory: "It's a private history.",
    crown: '1st place item',
    copyListLink: 'Copy link from list',
    shareListToKakaotalk: 'Share the list with KakaoTalk',
    saveListToImage: 'Saving the list as an image',
    createListToThisTitle: 'Create a list with this title',
    moveToCreateListPageMessage: 'Go to the list creation page.',
  },
};

export const modalLocale = {
  ko: {
    deleteListMessage: '정말 리스트를 삭제하시나요?',
    deleteMessage: '정말로 삭제하시겠습니까?',
    confirm: '확인',
    deleteButtonAlt: '삭제 버튼',
    privateMessage: '이 리스트는 삭제 또는 비공개 처리 되었어요.',
    deleteHistory: '정말 이 히스토리를 삭제하시나요?',
  },
  en: {
    deleteListMessage: 'Do you really delete the list?',
    deleteMessage: 'Are you sure you want to delete it?',
    confirm: 'Check',
    deleteButtonAlt: 'Delete button',
    privateMessage: 'This list has been deleted or closed.',
    deleteHistory: 'Are you sure you want to delete this history?',
  },
};
