import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchbar.css'; // Importe o arquivo CSS corretamente

const SearchBarListagem = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/search");

    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <div className="search-input-container">
                <input
                    id="searchInput"
                    type="text"
                    placeholder="Pesquisar..."
                    value={query}
                    onChange={handleChange}
                />
                <button type="submit"><i className="fas fa-search"></i></button>
            </div>
        </form>
    );
};

export default SearchBarListagem;
