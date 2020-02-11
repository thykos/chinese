import React from 'react';
import PropTypes from 'prop-types';
import Siriwave from './siriwave';
import './styles.css';

const Visualizer = ({ play, className }) => {
  return(
    <span className={className}>
      <Siriwave
        type="ios"
        width={window.innerWidth}
        play={play}
        amplitude={play ? 1 : 0}
        lerpSpeed={0.03}
        color="#000"
      />
    </span>
  )
};

Visualizer.propTypes = {
  play: PropTypes.bool.isRequired,
  className: PropTypes.string
};

export default Visualizer;
