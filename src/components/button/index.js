import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles.css';

const Button = ({ onClick, disabled, children, className }) => (
  <button
    disabled={disabled}
    onClick={onClick ? onClick : () => {}}
    className={cx('ch-button', className)}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  className: PropTypes.string
};

export default Button;
