import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTitle } from '../../domain/ui';
import library from '../../static/library';
import { Link } from 'react-router-dom';
import ChText from '../../components/chText';
import './styles.css';

const LearnList = ({ setTitle }) => {
  useEffect(() => {
    setTitle('学习');
  });

  return (
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
};

LearnList.propTypes = {
  setTitle: PropTypes.func.isRequired
}

export default connect(null, { setTitle })(LearnList);
