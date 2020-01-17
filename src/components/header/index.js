import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTitle, titleSelector } from '../../domain/ui';
import menu from './menu.svg';
import './styles.css';
import ChText from "../chText";

const Header = ({ title, setTitle }) => {
  const [show, onChange] = useState(false);

  const onHide = () => onChange(false);

  return (
    <Fragment>
      <header className="ch-header">
        <div className="ch-header-title">
          <ChText>{title}</ChText>
        </div>
        <button className="ch-menu-btn" onClick={() => onChange(true)}>
          <img src={menu} alt="ch-burger"/>
        </button>
      </header>
      {show ?
        <div className="ch-menu-wrapper">
          <div className="ch-link ch-menu-link-wrapper">
            <Link to="/learn" onClick={onHide}><ChText size={36}>学习</ChText></Link>
          </div>
          <div className="ch-link ch-menu-link-wrapper">
            <Link to="/test" onClick={onHide}><ChText size={36}>通过测试</ChText></Link>
          </div>
          <div className="ch-link ch-menu-link-wrapper">
            <Link to="/test-pinyin" onClick={onHide}><ChText size={36}>通过测试(pinyin)</ChText></Link>
          </div>
        </div>
        : null
      }
    </Fragment>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

const mapStateToProps = (state) => ({
  title: titleSelector(state)
});

export default connect(mapStateToProps, { setTitle })(Header);
