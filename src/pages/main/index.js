import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChText from '../../components/chText';
import { setTitle } from '../../domain/ui';
import './styles.css';

const Main = ({ setTitle }) => {
  useEffect(() => {
    setTitle('');
  });

  return (
    <div className="ch-main-wrapper">
      <ChText size={64}>你好</ChText>
    </div>
  );
};

Main.propTypes = {
  setTitle: PropTypes.func.isRequired
};

export default connect(null, { setTitle })(Main);
