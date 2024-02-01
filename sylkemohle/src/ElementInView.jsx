// useElementInView.js
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const useElementInView = (querySelector) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const elements = document.querySelectorAll(querySelector);
      elements.forEach((element) => {
        element.style.opacity = 1;
        element.style.filter = 'blur(0px)';
        element.style.animationPlayState = 'running';
      });
    }
  }, [inView, querySelector]);

  return ref;
};

export default useElementInView;
