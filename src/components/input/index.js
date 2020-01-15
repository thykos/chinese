import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles.css';

const Input = (props) => {
  const { className, type, value, onChange, placeholder } = props;
  return (
    <input
      className={cx('ch-input', className)}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  )
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
