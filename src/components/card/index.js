import React from 'react';
import PropTypes from 'prop-types';
import ChText from '../chText';
import './styles.css';

const Card = (props) => {
  const { ru, pinyin, ch } = props;
  return (
    <div className="ch-card-wrapper">
      <div className="ch-card-ch-wrapper">
        <ChText size={96}>{ch}</ChText>
      </div>
      <div className="ch-card-details">
        <div className="ch-card-detail">
          {pinyin}
        </div>
        <div className="ch-card-detail">
          {ru}
        </div>
      </div>
    </div>
  )
};

Card.propTypes = {
  ru: PropTypes.string.isRequired,
  pinyin: PropTypes.string.isRequired,
  ch: PropTypes.string.isRequired
};

export default Card;
