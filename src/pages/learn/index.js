import React from 'react';
import { useParams } from 'react-router-dom';
import library from '../../static/library';
import Card from '../../components/card';
import './styles.css';

const Learn = () => {
  const { wordId } = useParams();
  const word = library.find(item => item.pinyin === wordId);
  return (
    <div className="ch-learn-wrapper">
      <Card {...word}/>
    </div>
  )
};

export default Learn;
