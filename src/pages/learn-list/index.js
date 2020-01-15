import React from 'react';
import library from '../../static/library';
import { Link } from 'react-router-dom';
import ChText from '../../components/chText';
import './styles.css';

const LearnList = () => (
  <div className="ch-learn-list-wrapper">
    <ul className="ch-learn-list">
      {library.map((item, idx) => (
        <li key={idx}>
          <div className="ch-link">
            <Link to={`/learn/${item.pinyin}`} className>
              <div>
                <ChText size={24}>{item.ch}</ChText>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default LearnList;
