interface UserProfileType {
  id: number;
  profileImageUrl: string;
  nickname: string;
}

const generateMockData = (count: number): UserProfileType[] => {
  const mockData: UserProfileType[] = [];

  mockData.push({
    id: 1,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '안유진',
  });

  mockData.push({
    id: 2,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '강나현',
  });

  mockData.push({
    id: 3,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '민서영',
  });

  mockData.push({
    id: 4,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '박소현',
  });

  mockData.push({
    id: 5,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '강현지',
  });

  mockData.push({
    id: 6,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '신은서',
  });

  mockData.push({
    id: 7,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '동호',
  });

  mockData.push({
    id: 8,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: 'JJUNGSU',
  });

  for (let i = 100; i <= count; i++) {
    const user: UserProfileType = {
      id: i,
      profileImageUrl: '',
      nickname: `User${i}`,
    };

    mockData.push(user);
  }

  return mockData;
};

export default generateMockData(20);
