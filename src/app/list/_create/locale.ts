export const itemLocale = {
  ko: {
    addItem: '아이템 추가',
    backIconAlt: '뒤로가기 버튼',
    createList: '리스트 생성',
    editList: '리스트 수정',
    complete: '완료',
    imageAlt: '첨부 이미지',
    deleteLinkAlt: '링크 삭제 버튼',
    dragAndDrop: '드래그앤드롭',
    deleteItem: '아이템 삭제',
    rank: '위',
    addLink: '링크 추가',
    confirm: '확인',
    itemCreateMessage1: '최소 3개, 최대 10개까지 아이템을 추가할 수 있어요.',
    itemCreateMessage2: '아이템의 순서대로 순위가 정해져요.',
  },
  en: {
    addItem: 'Add Item',
    backIconAlt: 'Back button',
    createList: 'Create list',
    editList: 'Edit list',
    complete: 'Complete',
    imageAlt: 'Attached image',
    deleteLinkAlt: 'Delete link button',
    dragAndDrop: 'Drag and drop',
    deleteItem: 'Delete item',
    rank: 'No.',
    addLink: 'Add link',
    confirm: 'Confirm',
    itemCreateMessage1: 'You can add a minimum of 3 and a maximum of 10 items.',
    itemCreateMessage2: 'The ranking is determined in the order of the items.',
  },
};

export const listLocale = {
  ko: {
    closeButtonAlt: '닫기버튼',
    createList: '리스트 생성',
    editList: '리스트 수정',
    next: '다음',
    noData: '검색결과가 없어요.',
    public: '공개',
    private: '비공개',
    title: '타이틀',
    description: '소개',
    category: '카테고리',
    label: '라벨',
    addCollaborator: '콜라보레이터 추가',
    addCollaboratorError: '콜라보레이터는 최대 20명까지 지정할 수 있어요.',
    backgroundcolor: '배경 색상',
    publicSetting: '공개 설정',
    publicMessage: '모든 사람이 이 리스트를 볼 수 있어요.',
    privateMessage: '이 리스트는 나만 볼 수 있어요.',
  },
  en: {
    closeButtonAlt: 'Close button',
    createList: 'Create list',
    editList: 'Edit list',
    next: 'Next',
    noData: 'There are no search results.',
    public: 'Public',
    private: 'Private',
    title: 'Title',
    description: 'Introduction',
    category: 'Category',
    label: 'Label',
    addCollaborator: 'Add collaborator',
    addCollaboratorError: 'You can designate up to 20 collaborators.',
    backgroundcolor: 'Background color',
    publicSetting: 'Public Settings',
    publicMessage: 'Everyone can see this list.',
    privateMessage: 'Only I can see this list.',
  },
};

type PaletteLocale = {
  ko: {
    [key: string]: string;
  };
  en: {
    [key: string]: string;
  };
};

export const paletteLocale: PaletteLocale = {
  ko: {
    PASTEL: '파스텔',
    VIVID: '비비드',
    GRAY: '그레이',
    LISTY: '리스티',
  },
  en: {
    PASTEL: 'Pastel',
    VIVID: 'Vivid',
    GRAY: 'Gray',
    LISTY: 'Listy',
  },
};
