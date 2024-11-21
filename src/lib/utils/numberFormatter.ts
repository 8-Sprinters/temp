/**
 * 숫자 형태를 단위에 맞게 변환해주는 포매팅 함수입니다.
 - 만 미만: 축약 없이 컴마(,) 처리 ex. 1~9,999 (ko, en)
 - 만 이상: 만 단위 ex. 1만, 35.5만, 510만... (ko)
 - 만 이상: K 단위(소숫점 1자리) ex. 10K, 355.3K (en)
 - 백만 이상: M 단위(소숫점 1자리) ex. 5.1M (en)

 * @param {number} num 축약할 숫자입니다.
 * @param {'ko' | 'en'} lang 적용할 숫자 국가 단위입니다.
 * @returns {number} 단위에 맞게 변환된 숫자입니다.
 */

const numberFormatter = (num: number, lang: 'ko' | 'en') => {
  const unit = 10000;

  if (num / unit < 1) {
    return num?.toLocaleString('ko-KR');
  }

  if (lang === 'ko') {
    const formattedNumKo = Math.trunc((num / unit) * 10) / 10;
    return formattedNumKo + '만';
  } else {
    const formattedNumEn = Math.trunc((num / unit) * 10);
    if (formattedNumEn < 1000) {
      return formattedNumEn + 'K';
    } else {
      const formattedMillion = Math.trunc((formattedNumEn / 1000) * 10) / 10;
      return formattedMillion + 'M';
    }
  }
};

export default numberFormatter;
