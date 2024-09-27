import { useEffect, useRef } from 'react';

/**
 * Observer API를 사용하여 요소를 감지하는 커스텀 hook 입니다.
 * 무한스크롤에서 사용할 수 있습니다.
 *
 * @param {function} callback intersection이 발생했을 때 호툴되는 콜백함수
 * @returns target 요소에 전달할 ref 값
 */

const useIntersectionObserver = (callback: (entry: IntersectionObserverEntry) => void, threshold = [1]) => {
  const options = {
    root: null,
    rootMain: '0px',
    threshold: threshold, // 단계별 콜백함수 호출
  };

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback(entries[0]);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // clean up
    return () => {
      observer.disconnect();
    };
  }, [ref, callback]);

  return ref;
};

export default useIntersectionObserver;
