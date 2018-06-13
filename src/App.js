import React, { Component } from 'react';
/*import Rank from './components/Rank/Rank';*/
import Title from './components/Title/Title';
import Particles from 'react-particles-js';
import axios from 'axios';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
        }
      },
    interactivity: {
      onhover: {
        modes: {
          repulse:
          {
            line_linked: {
              opacity: .6
            }
          }
        },
      onclick: {
        enable: true,
        modes: {
          push: {
            line_linked: {
              opacity: 1
            }
          }
        }
       }
      } 
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      selectedFile: null
    }
  }

fileSelectedHandler = event => {
  this.setState({
    selectedFile: event.target.files[0]
  })
}

fileUploadHandler = () => {
  axios.post('');
}

  render() {
    return (
      <div className='tc'>
        <Particles className='particles'
          params={particlesOptions}
        />
        <Title />
{/*        <Rank /> /*}
{/*        <ImageForm onInputChange={this.onInputChange} />*/}
        <input className='pt6 pb5 center f4' type="file" onChange={this.fileSelectedHandler}/>
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-red center' onClick={this.fileUploadHandler}>Upload</button>
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
