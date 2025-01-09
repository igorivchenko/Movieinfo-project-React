import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import s from './LottieAnimationHome.module.css';

const LottieAnimationHome = () => {
  return <DotLottieReact className={s['home-image']} src="/home-image.json" autoplay />;
};
export default LottieAnimationHome;
