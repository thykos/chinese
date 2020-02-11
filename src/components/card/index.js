import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChText from '../chText';
import { Howl } from 'howler';
import audio from '../../static/audio';
import Visualizer from '../visualizer';
import './styles.css';

const Card = (props) => {
  const { ru, pinyin, ch } = props;
  const [ canPlay, changeCanPlay ] = useState(true);

  useEffect(() => {
    changeCanPlay(true);
  }, [ch]);

  const audioFile = audio[ch];

  const sound = new Howl({
    src: [`/audio/${audioFile}`],
    volume: 0.5,
    onplay: function() {
      changeCanPlay(false);
    },
    onend: function() {
      changeCanPlay(true);
    }
  });

  const play = () => {
    if (audioFile && canPlay) sound.play();
  };
  return (
    <div className="ch-card-wrapper">
      <div className="ch-card-ch-wrapper" onClick={play}>
        {Boolean(audioFile) ? <Visualizer play={!canPlay} className="ch-card-ch-visualizer"/> : null}
        <ChText size={ch.length > 3 ? 64 : 80}>{ch}</ChText>
      </div>
      <div className="ch-card-details">
        <div className="ch-card-detail">
          {pinyin}
        </div>
        <div className="ch-card-detail">
          {ru}
        </div>
      </div>
    </div>
  )
};

Card.propTypes = {
  ru: PropTypes.string.isRequired,
  pinyin: PropTypes.string.isRequired,
  ch: PropTypes.string.isRequired
};

export default Card;
