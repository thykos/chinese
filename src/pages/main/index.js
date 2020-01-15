import React, { useState, Fragment } from 'react';
import ChText from '../../components/chText';
import { Link } from 'react-router-dom';
import './styles.css';

const Main = () => {
  const [touched, onChange] = useState(false);
  return (
    <div className="ch-main-wrapper" onClick={() => onChange(true)} role="button" >
      {touched
        ? <Fragment>
            <div className="ch-link ch-main-link-wrapper">
              <Link to="/learn"><ChText size={36}>学习</ChText></Link>
            </div>
            <div className="ch-link ch-main-link-wrapper">
              <Link to="/test"><ChText size={36}>通过测试</ChText></Link>
            </div>
          </Fragment>
        : <ChText size={64}>你好</ChText>
      }
    </div>
  );
};

export default Main;
