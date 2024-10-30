import copy from 'copy-to-clipboard';
import toasting from '@/lib/utils/toasting';
import toastMessage from '../constants/toastMessage';

function copyUrl(listUrl: string, language: string) {
  try {
    copy(listUrl);
    toasting({ type: 'success', txt: toastMessage[language].copyLink });
  } catch (error) {
    toasting({ type: 'error', txt: toastMessage[language].failedCopyLink });
  }
}

export default copyUrl;
