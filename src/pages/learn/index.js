import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setTitle } from '../../domain/ui';
import library from '../../static/library';
import Card from '../../components/card';
import Button from '../../components/button';
import ChText from '../../components/chText';
import './styles.css';

const Learn = ({ setTitle }) => {
  useEffect(() => {
    setTitle('学习');
  });

  const { wordId } = useParams();
  const word = library.find(item => item.pinyin === wordId);
  const wordIndex = library.findIndex(item => item.pinyin === wordId);
  const next = wordIndex + 1 > library.length ? null : library[wordIndex + 1];
  const previous = wordIndex - 1 < 0 ? null : library[wordIndex - 1];

  const link = (item, text) => (
    item
      ? <Link to={`/learn/${item.pinyin}`} className="ch-link ch-learn-link">
          <Button className="ch-learn-btn"><ChText>{text}</ChText></Button>
        </Link>
      : <Link to={`/learn`} className="ch-link ch-learn-link">
          <Button className="ch-learn-btn"><ChText>{text}</ChText></Button>
        </Link>
  );
  return (
    <div className="ch-learn-wrapper">
      <div className="ch-learn-card-wrapper">
        <Card {...word}/>
      </div>
      <div className="ch-learn-btns-wrapper">
        {link(previous, '以前')}
        {link(next, '下一个')}
      </div>
    </div>
  )
};

Learn.propTypes = {
  setTitle: PropTypes.func.isRequired
};

export default connect(null, { setTitle })(Learn);
