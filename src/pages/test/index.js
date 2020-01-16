import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTitle } from '../../domain/ui';
import ChText from "../../components/chText";

const Test = ({ setTitle }) => {
  useEffect(() => {
    setTitle('通过测试');
  });

  return (
    <div className="ch-main-wrapper">
      <ChText size={64}>通过测试</ChText>
    </div>
  );
};

Test.propTypes = {
  setTitle: PropTypes.func.isRequired
};

export default connect(null, { setTitle })(Test);
