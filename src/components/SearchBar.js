import React, { useState } from 'react';
import './componentSstyles.scss';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className='search-bar ui  container'>
      <form className='ui form' onSubmit={onSubmit}>
        <a href='#'>
          <img src='/youtube.svg' alt='' />
        </a>
        <div className='search-part'>
          <input
            onChange={onInputChange}
            value={term}
            type='text'
            placeholder='搜尋'
          />
          <button title='搜尋'>
            <i className='fas fa-search'></i>
          </button>
        </div>
        <button onSubmit={onSubmit} className='microphone' title='使用語音搜尋'>
          <i className='fas fa-microphone'></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
