import { toPng } from 'html-to-image';
import toasting from '@/lib/utils/toasting';

interface SaveImageFromHtmlProps {
  filename: string;
  element: HTMLElement;
}

async function saveImageFromHtml({ filename }: SaveImageFromHtmlProps) {
  const saveElement: HTMLElement | null = document.querySelector('#rankList');
  if (!saveElement) {
    console.error('리스트를 찾을 수 없습니다.');
    return;
  }

  try {
    toPng(saveElement)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = filename + '.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log('error', err);
      });
    toasting({ type: 'default', txt: '이미지를 저장했습니다.' });
  } catch (error) {
    toasting({ type: 'default', txt: '이미지 저장을 실패했습니다.' });
  }
}

export default saveImageFromHtml;
