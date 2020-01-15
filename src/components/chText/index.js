import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles.css';

const ChText = ({ children, size, className }) => (
  <span className={cx('ch-chinese-text', className)} style={{ fontSize: size }}>{children}</span>
);

ChText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  size: PropTypes.number,
  className: PropTypes.string
};

export default ChText;
