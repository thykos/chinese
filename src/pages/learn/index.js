import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import library from '../../static/library';
import Card from '../../components/card';
import Button from '../../components/button';
import './styles.css';

const Learn = () => {
  const { wordId } = useParams();
  const word = library.find(item => item.pinyin === wordId);
  const wordIndex = library.findIndex(item => item.pinyin === wordId);
  const next = wordIndex + 1 > library.length ? null : library[wordIndex + 1];
  const previous = wordIndex - 1 < 0 ? null : library[wordIndex - 1];

  const link = (item, text) => (
    item
    ? <Link to={`/learn/${item.pinyin}`} className="ch-link ch-learn-link">
        <Button className="ch-learn-btn">{text}</Button>
      </Link>
      : <Button className="ch-learn-btn" disabled={!item}>{text}</Button>
  );
  return (
    <div className="ch-learn-wrapper">
      <div className="ch-learn-card-wrapper">
        <Card {...word}/>
      </div>
      <div className="ch-learn-btns-wrapper">
        {link(previous, 'Previous')}
        {link(next, 'Next')}
      </div>
    </div>
  )
};

export default Learn;
