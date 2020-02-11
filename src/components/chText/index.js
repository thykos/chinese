import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles.css';

const ChText = ({ children, size }) => (
  <span
    className="ch-chinese-text"
    style={{ fontSize: size }}
  >
    {children}
  </span>
);

ChText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  size: PropTypes.number
};

export default ChText;
