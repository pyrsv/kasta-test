import React, {useEffect, useState} from 'react';
import './Countdown.scss'

const Countdown = props => {


  const calculateTimeLeft = () => {
    const difference = props.final - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [{hours, minutes, seconds}, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className={'CountdownTimer'}>
      <span>{props.text} </span>
      <span>
        0{hours}:{minutes}:{seconds}
      </span>
    </div>
  );
};

export default Countdown