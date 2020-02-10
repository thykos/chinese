import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles.css';

const ChText = ({ children, size, className, animate }) => (
  <span
    className={
      cx('ch-chinese-text', className, {'ch-chinese-text-animate': animate})
    }
    style={{ fontSize: size }}
  >
    {children}
  </span>
);

ChText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  size: PropTypes.number,
  animate: PropTypes.bool,
  className: PropTypes.string
};

export default ChText;
