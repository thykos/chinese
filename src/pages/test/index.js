import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { testQuestionsSelector, setQuestionAnswer } from '../../domain/ui';
import { useParams, Link } from 'react-router-dom';
import ChText from '../../components/chText';
import Button from '../../components/button';
import Card from '../../components/card';
import library from '../../static/library';
import { randomQuestionsList, random } from '../../helpers/random';
import './styles.css';

const Test = (props) => {
  const { questions, pinyin, setQuestionAnswer } = props;
  const [ answer, onChange ] = useState(null);
  const { wordId } = useParams();
  useEffect(() => {
    onChange(null);
  }, [wordId]);

  const word = questions.find(item => item.pinyin === wordId);
  const wordIndex = questions.findIndex(item => item.pinyin === wordId);
  const next = wordIndex + 1 > questions.length ? null : questions[wordIndex + 1];

  const answers = randomQuestionsList(library.length, 3, wordIndex).map(idx => library[idx]);
  const answerIndex = random(0, 3);
  answers.splice(answerIndex, 0, word);

  const onAnswer = (item) => {
    onChange(item);
    setQuestionAnswer({
      pinyin: item.pinyin,
      correct: item.pinyin === word.pinyin
    });
  };

  const key = pinyin ? 'pinyin' : 'ru';
  const linkKey = pinyin ? 'test-pinyin' : 'test';
  const link = next ? `/${linkKey}/${next.pinyin}` : '/results';

  return (
    <div className="ch-test-wrapper">
      {
        answer
        ?
          <div className="ch-test-answer-wrapper">
            <div className="ch-test-answer-card-wrapper">
              <Card {...answer}  />
            </div>
            <div className={cx('ch-test-answer-placeholder', answer.pinyin === word.pinyin ? 'valid' : 'invalid')}>
              {answer.ch === word.ch ? 'Верно' : 'Неверно'}
            </div>
            <div className="ch-link ch-test-answer-link-wrapper">
              <Link to={link}>下一个</Link>
            </div>
          </div>
        :
          <Fragment>
            <div className="ch-test-word">
              <ChText size={96}>{word.ch}</ChText>
            </div>
            <div className="ch-test-answers">
              {answers.map((item, idx) => (
                <Button key={idx} onClick={() => onAnswer(item)} className="ch-test-answer">{item[key]}</Button>
              ))}
            </div>
          </Fragment>
      }
    </div>
  );
};

Test.propTypes = {
  questions: PropTypes.array.isRequired,
  pinyin: PropTypes.bool,
  setQuestionAnswer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  questions: testQuestionsSelector(state)
});

export default connect(mapStateToProps, { setQuestionAnswer })(Test);
