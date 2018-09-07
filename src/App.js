import React, { Component } from 'react';
import Title from './components/Title/Title';
import SearchBar from './components/SearchBar/SearchBar';
import Particles from 'react-particles-js';
import Age from './components/Age/Age';
import axios from 'axios';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 15,
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
      imgUrl: '',
      age: ''
    }
  }

onInputChange = (event) => {
    this.setState({input: event.target.value});
}

onButtonSubmit = (e) => {
  this.setState({imgUrl: this.state.input});
  axios.post('https://api.kairos.com/enroll', {
      image: this.state.input,
      subject_id: 'Raman',
      gallery_name: 'MyGallery'
  }, {
    headers: { app_id: APP_ID, app_key: APP_KEY}
}
).then((response) => {
 /* console.log('response', response);
  console.log('body', response.data);
  this.setState({input: ''});
  console.log(this.state.input); */
  let personAge = response.data.images[0].attributes.age;
  this.setState({
    age: personAge,
    });
  }
).catch((error) => {
  console.log(e);
  });
}

  render() {
    return (
      <div className='tc'>
        <Particles className='particles'
          params={particlesOptions}
        />
        <Title />
        <SearchBar 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <Age
            onButtonSubmit={this.onButtonSubmit}
            age={this.state.age} 
        />
        </div>
    );
  } 
}

export default App;
