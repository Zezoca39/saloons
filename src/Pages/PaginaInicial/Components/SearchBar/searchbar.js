// Search.js
import React, { useState } from 'react';
import OverlaySearchBar from './overlaysearch';
import { useNavigate } from 'react-router-dom';
import './searchbar.css';

const Search = ({ onSearch }) => {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [query, setQuery] = useState('');
    const [focused, setFocused] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {

        navigate('/search');

    };

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const handleOverlayClick = () => {
        setOverlayVisible(true);
    };

    const handleOverlayClose = () => {
        setOverlayVisible(false);
    };

    return (
        <div>
            <div className={`search-bar ${focused ? 'focused' : ''}`} onClick={handleOverlayClick}>
                <form onSubmit={handleSubmit}>
                    <div className="search-input-container">
                        <input
                            id="searchInput"
                            type="text"
                            placeholder="Pesquisar..."
                            value={query}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            {overlayVisible && (
                <div className="overlay" onClick={handleOverlayClose}>
                    <OverlaySearchBar />
                </div>
            )}
        </div>
    );
};

export default Search;
