//list-step1
export const listTitleRules = {
  required: '타이틀을 입력해주세요',
  maxLength: {
    value: 30,
    message: '리스트 타이틀은 최대 30자까지 입력할 수 있어요.',
  },
};

export const listDescriptionRules = {
  maxLength: { value: 200, message: '리스트 소개는 최대 200자까지 입력할 수 있어요.' },
};

export const listCategoryRules = {
  required: '카테고리를 선택해주세요',
};

//list-step2
export const itemTitleRules = {
  required: '아이템을 입력해주세요.',
  maxLength: {
    value: 100,
    message: '아이템 타이틀은 최대 100자까지 입력할 수 있어요.',
  },
};

export const itemCommentRules = {
  maxLength: { value: 200, message: '코멘트는 최대 200자까지 입력할 수 있어요.' },
};

export const itemLinkRules = {
  pattern: {
    value: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=가-힣]*)$/,
    message: '올바른 URL 형식이 아니에요.',
  },
};

//profile
export const nicknameRules = {
  required: '닉네임을 입력해주세요.',
  maxLength: { value: 10, message: '닉네임은 최대 10자까지 입력할 수 있어요.' },
  pattern: {
    value: /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    message: '한글과 영어만 입력할 수 있어요.',
  },
};

export const profileDescriptionRules = {
  maxLength: { value: 160, message: '소개는 최대 160자까지 입력할 수 있어요.' },
};

export const nicknameDuplicateRules = {
  type: 'duplicated',
  message: '이미 사용중인 닉네임이에요.',
};
