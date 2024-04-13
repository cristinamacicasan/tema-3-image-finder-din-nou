import React, { useEffect } from 'react';
import styles from './Loader.module.css'; 

const Loader = () => {
   useEffect(() => {
    const hideLoader = () => {
      const loader = document.querySelector(`.${styles.loader}`);
      if (loader) {
        loader.style.display = "none";
        // Opriți spinnerul
        const spinner = document.querySelector(`.${styles.spinner}`);
        if (spinner) {
          spinner.style.animation = "none";
        }
      }
    };

    document.addEventListener('readystatechange', () => {
      if (document.readyState === 'complete') {
        hideLoader();
      }
    });

    return () => {
      document.removeEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
          hideLoader();
        }
      });
    };
   }, []);
    return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
