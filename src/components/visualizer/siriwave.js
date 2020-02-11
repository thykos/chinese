import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiriWave from 'siriwave/dist/siriwave';

class Siriwave extends Component {
  constructor(props) {
    super(props);
    this.siriRef = React.createRef();
  }

  componentDidUpdate() {
    this.siriWave.setAmplitude(this.props.amplitude);
  }

  componentDidMount() {
    this.siriWave = new SiriWave({
      ...this.props,
      style: this.props.type,
      container: this.siriRef.current,
    });
    this.siriWave.start();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.play) {
      this.siriWave.setAmplitude(0.5)
    }
    else {
      this.siriWave.setAmplitude(0);
    }
  }

  componentWillUnmount() {
    this.siriWave.stop()
  }

  render() {
    return (
      <div ref={this.siriRef} className={this.props.className}/>
    );
  }
}

Siriwave.defaultProps = {
  width: 640,
  height: 200,
  type: 'ios',
  // ratio: calculated,
  speed: 0.2,
  amplitude: 1,
  frequency: 3,
  color: '#fff',
  cover: false,
  autostart: false,
  pixelDepth: 0.02,
  lerpSpeed: 0.01,
};

Siriwave.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.oneOf(['ios', 'ios9']),
  ratio: PropTypes.number,
  speed: PropTypes.number,
  amplitude: PropTypes.number,
  frequency: PropTypes.number,
  color: PropTypes.string,
  cover: PropTypes.bool,
  autostart: PropTypes.bool,
  pixelDepth: PropTypes.number,
  lerpSpeed: PropTypes.number,
};

export default Siriwave;
