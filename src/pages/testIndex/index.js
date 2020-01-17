import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTitle, setTestQuestions } from '../../domain/ui';
import { Redirect } from 'react-router-dom';
import library from '../../static/library';
import { randomQuestionsList } from '../../helpers/random';

const TestIndex = ({ setTitle, setTestQuestions, pinyin }) => {
  const questionIds = randomQuestionsList(library.length, 10);
  const questions = questionIds.map(idx => library[idx]);
  useEffect(() => {
    setTitle(pinyin ? '通过测试(pinyin)' : '通过测试');
    setTestQuestions(questions)
  });

  const word = questions[0];
  const link = pinyin ? '/test-pinyin' : '/test';
  return (<Redirect to={{pathname: `${link}/${word.pinyin}` }} />);
};

TestIndex.propTypes = {
  setTitle: PropTypes.func.isRequired,
  setTestQuestions: PropTypes.func.isRequired,
  pinyin: PropTypes.bool
};

export default connect(null, { setTitle, setTestQuestions })(TestIndex);
