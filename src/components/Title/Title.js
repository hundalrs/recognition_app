import React from 'react';
import {Animated} from "react-animated-css";

const Title = () => {
  return (
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <div className='pa3 pa5-ns'>
          <h1>Guess My Age</h1>
      </div>
    </Animated>
  );
}

export default Title;
