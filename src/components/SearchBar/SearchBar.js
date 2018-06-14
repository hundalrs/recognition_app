import React from 'react';

const SearchBar = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div className='pt4'>
        <h4>Please submit a public url that is a jpg or png</h4>
      </div>
    <div>
        <div className='form pa4'>
          <div className='pb5 pt3'>
            <input className='f4 pa2 center' type='text' onChange={onInputChange}/>
          </div>
          <button 
            className='wc-90 grow f4 link ph6 pv2 dib white bg-red'
            onClick={onButtonSubmit} 
            >Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
