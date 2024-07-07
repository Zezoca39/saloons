import React, { useState } from 'react';
import './filtrosbar.css';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function TextoCard({ texto, onClick, isSelected }) {
    return (
        <div
            className={`card1 ${isSelected ? 'selected' : ''}`}
            onClick={() => onClick(texto)}
        >
            <div className="texto">{texto} {isSelected ? 'x' : '+'}</div>
        </div>
    );
}

function App() {
    const arrayDeTextos = [
        'Corte Masculino', 'Barba Completa', 'Coloração de Cabelo', 'Tratamento Capilar', 'Coloração de Cabelo',
        'Lavagem', 'Estilo', 'Hidratação', 'Penteado', 'Luzes',
        'Descoloração', 'Relaxamento', 'Permanente', 'Tranças', 'Alisamento'
    ];
    const textoAntes = 'Filtros:';

    const [searchValue, setSearchValue] = useState('');
    const [filteredArray, setFilteredArray] = useState(arrayDeTextos);
    const [expanded, setExpanded] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchValue(value);
        const filtered = arrayDeTextos.filter(item => item.toLowerCase().includes(value.toLowerCase()));
        setFilteredArray(filtered);
    };

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const handleFilterClick = (filter) => {
        setSelectedFilters((prevSelectedFilters) => {
            if (prevSelectedFilters.includes(filter)) {
                return prevSelectedFilters.filter(item => item !== filter);
            } else {
                return [filter, ...prevSelectedFilters];
            }
        });
    };

    const combinedArray = [...selectedFilters, ...filteredArray.filter(item => !selectedFilters.includes(item))];

    return (
        <div className="container1">
            <div className="texto" style={{ width: '75px', fontSize: '18px', display: 'flex', fontWeight: 'bold', marginRight: '10px', marginTop: '5px' }}>{textoAntes}</div>
            <div className={expanded ? 'container-scroll1 expanded' : 'container-scroll1'}>
                <div className='container-scroll2'>
                    {combinedArray.map((texto, index) => (
                        <TextoCard
                            key={index}
                            texto={texto}
                            onClick={handleFilterClick}
                            isSelected={selectedFilters.includes(texto)}
                        />
                    ))}
                </div>
                <MdKeyboardDoubleArrowDown
                    className="arrow-down"
                    onClick={handleExpand}
                    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }} // Inverte o ícone quando expandido
                />
            </div>
            <form className="search-bar3" onSubmit={(e) => e.preventDefault()}>
                <div className="search-input-container3">
                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleSearch}
                    />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </div>
            </form>
        </div>
    );
}

export default App;
