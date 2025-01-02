import Lottie from 'lottie-react';
import animation from './Animation - 1708700954738.json';

function Loading() {
  return (
    <Lottie
      animationData={animation}
      loop
      autoPlay
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      style={{ height: '100px', width: '100px' }}
    />
  );
}

export default Loading;
