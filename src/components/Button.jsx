import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick, show }) => {
  return (
    <button onClick={onClick} className={show ? styles.button : styles.hidden}>
      Load more
    </button>
  );
};

export default Button;
