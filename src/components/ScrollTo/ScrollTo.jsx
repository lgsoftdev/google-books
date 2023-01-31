import styles from './ScrollTo.module.scss';
import { useRef, useEffect } from 'react';

const ScrollTo = ({ goToTop, containerElement }) => {
  const goToElement = useRef(undefined);

  const goToPosition = () => {
    window.scrollTo({
      top: goToTop ? 0 : containerElement.current.offsetHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (goToElement.current) {
      if (containerElement.current.offsetHeight > window.outerHeight)
        //Show go to link
        goToElement.current.className = '';
      else goToElement.current.className = styles.element_hide;
    }
  });

  return (
    <section className={styles.ScrollTo}>
      <a
        onClick={goToPosition}
        className={styles.element_hide}
        ref={goToElement}
      >
        go to {goToTop ? 'Top' : 'Bottom'}
      </a>
    </section>
  );
};

export default ScrollTo;
