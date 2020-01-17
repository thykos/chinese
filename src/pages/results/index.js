import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import ChText from '../../components/chText';
import { testQuestionsSelector } from '../../domain/ui';
import './styles.css';

const Results = ({ questions }) => (
  <div className="ch-results-wrapper">
    <ul>
      {questions.map((item, idx) => (
        <li key={idx}>
          <Link to={`/learn/${item.pinyin}`}>
            <div className="ch-result-line">
              <ChText>{item.ch}</ChText>
              <div className={cx('ch-result', item.correct ? 'valid' : 'invalid')}>
                {item.correct ? 'Верно' : 'Неверно'}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Results.propTypes = {
  questions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  questions: testQuestionsSelector(state)
});

export default connect(mapStateToProps)(Results);
