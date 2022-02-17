import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
    const [videoSearch, setVideoSearch] = useState('');

    const handleFormSubmit = e => {
        e.preventDefault();
        onSearchSubmit(videoSearch);
    };

    return (
        <div className='search-bar ui segment' style={{ marginTop: '2rem' }}>
            <form onSubmit={handleFormSubmit} className='ui form'>
                <div className='field'>
                    <label htmlFor='search'>Video Search</label>
                    <input
                        id='search'
                        type='text'
                        value={videoSearch}
                        onChange={e => setVideoSearch(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
