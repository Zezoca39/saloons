import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './overlaysearch.css';
import imagem1 from '../../../../Imagens/corteMasculino.jpg';
import imagem2 from '../../../../Imagens/manicure.jpg'; // Exemplo de outra imagem
import '@fortawesome/fontawesome-free/css/all.css';

const OverlaySearchBarComponent = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        navigate('/search');
    };

    const handleClick = () => {
        navigate("/estabelecimento");
    };
    const handleClick2 = () => {
        navigate("/search");
    };

    const estabelecimentos = [
        { id: 1, nome: 'Salão de Beleza Bella Vista', descricao: 'Salão de beleza premium com serviços completos.', imagem: 'https://i.pinimg.com/564x/25/5c/00/255c00b996b05b323f53ce00beb9923c.jpg' },
        { id: 2, nome: 'Barbearia Cortes Finos', descricao: 'Ambiente masculino com corte de cabelo e barba.', imagem: imagem2 },
        { id: 3, nome: 'Spa Relaxante Serenidade', descricao: 'Massagens terapêuticas e relaxantes.', imagem: 'https://i.pinimg.com/564x/25/5c/00/255c00b996b05b323f53ce00beb9923c.jpg' },
        { id: 4, nome: 'Nail Studio Charme', descricao: 'Manicure e pedicure de alta qualidade.', imagem: imagem2 },
    ];

    const servicos = [
        { id: 1, nome: 'Corte Masculino', imagem: imagem1 },
        { id: 2, nome: 'Manicure e Pedicure', imagem: imagem2 },
        { id: 3, nome: 'Massagem Relaxante', imagem: imagem1 },
        { id: 4, nome: 'Depilação', imagem: imagem2 },
    ];

    return (
        <div className="overlay-pisb">
            <div className="overlay-search-bar-pisb">
                <form className='formoverlay-pisb' onSubmit={handleSearch}>
                    <input
                        className='inputsearch-pisb'
                        id="searchInput2"
                        type="text"
                        placeholder="Pesquisar..."
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
            <div className="previous-container-pisb">
                <div className="column1-pisb">
                    <h6>Estabelecimentos</h6>
                    {estabelecimentos.map(estabelecimento => (
                        <div key={estabelecimento.id} className="cardsearch-pisb" onClick={handleClick}>
                            <div className='divout-pisb'>
                                <img className='imagemcardsearch-pisb' src={estabelecimento.imagem} alt={estabelecimento.nome} />
                                <div className='divin-pisb'>
                                    <h4>{estabelecimento.nome}</h4>
                                    <p>{estabelecimento.descricao}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="column2-pisb">
                    <h6>Serviços</h6>
                    {servicos.map(servico => (
                        <div key={servico.id} className="cardsearch-pisb" onClick={handleClick2}>
                            <div className='divout-pisb'>
                                <img className='imagemcardsearch-pisb' src={servico.imagem} alt={servico.nome} />
                                <div className='divin-pisb'>
                                    <h4>{servico.nome}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OverlaySearchBarComponent;
