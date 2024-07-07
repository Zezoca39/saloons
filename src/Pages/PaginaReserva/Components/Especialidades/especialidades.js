// Servico.js
import React, { useState } from 'react';
import './especialidades.css';

const servicos = [
    { id: 1, nome: 'Aparar a Barba', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', precoOriginal: 5, precoDesconto: 2 },
    { id: 2, nome: 'Corte de Cabelo', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', precoOriginal: 10, precoDesconto: 8 },
    { id: 3, nome: 'Lavagem de Cabelo', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', precoOriginal: 3, precoDesconto: 2 },
    { id: 4, nome: 'Tintura', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', precoOriginal: 15, precoDesconto: 12 },
    { id: 5, nome: 'Tratamento Capilar', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', precoOriginal: 20, precoDesconto: 18 },
    { id: 6, nome: 'Hidratação', descricao: 'Tratamento para hidratar profundamente os fios.', precoOriginal: 25, precoDesconto: 22 },
    { id: 7, nome: 'Escova Progressiva', descricao: 'Alisamento dos fios com duração de até 3 meses.', precoOriginal: 30, precoDesconto: 28 },
    { id: 8, nome: 'Pintura', descricao: 'Mudança de cor dos cabelos, com tintura de alta qualidade.', precoOriginal: 50, precoDesconto: 45 },
    { id: 9, nome: 'Penteado', descricao: 'Penteados especiais para ocasiões especiais.', precoOriginal: 40, precoDesconto: 35 },
    { id: 10, nome: 'Barba e Cabelo', descricao: 'Pacote completo de corte de cabelo e barba.', precoOriginal: 20, precoDesconto: 18 }
];

const Servico = ({ onSeguinteClick }) => {
    const [selectedServicos, setSelectedServicos] = useState([]);

    const handleCardClick = (servico) => {
        if (selectedServicos.includes(servico)) {
            setSelectedServicos(selectedServicos.filter(item => item !== servico));
        } else {
            setSelectedServicos([...selectedServicos, servico]);
        }
    };

    const calcularTotal = () => {
        return selectedServicos.reduce((total, servico) => {
            return total + (servico.precoDesconto || servico.precoOriginal);
        }, 0);
    };

    return (
        <div className="container-servico">
            <div className='titulo-servicos'>Marcar - Serviço</div>
            <div className="servico-content">
                <div className="servicos-lista">
                    {servicos.map(servico => (
                        <div key={servico.id} className="card-servico" onClick={() => handleCardClick(servico)}>
                            <div className="card-header">
                                <h4>{servico.nome}</h4>
                                <div className="preco">
                                    <p>{servico.descricao}</p>
                                    <span>
                                        <span className="preco-original">{`Desde ${servico.precoOriginal}€`}</span>
                                        {servico.precoDesconto && <span className="preco-desconto">{`${servico.precoDesconto}€`}</span>}
                                        <input type="checkbox" style={{ marginLeft: '10px' }} checked={selectedServicos.includes(servico)} readOnly />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card-detalhes3">
                    <div className="card-detalhes">
                        <div className="imagem-barbearia">
                            <img src="https://i.pinimg.com/564x/91/d6/03/91d6037c183ccc9644cdd59a70857524.jpg" alt="Barber Shop" />
                        </div>
                        <div className="detalhes-barbearia">
                            <h2>Barber Shop</h2>
                            <p>Viseu, Viseu | ★★★★★</p>
                            <div className="servicos-selecionados">
                                {selectedServicos.map(servico => (
                                    <p key={servico.id}>{servico.nome}: {servico.precoDesconto || servico.precoOriginal}€</p>
                                ))}
                            </div>
                            <div className="total">
                                <p>Total</p>
                                <p>{calcularTotal()}€</p>
                            </div>
                        </div>
                    </div>
                    <button className="button-seguinte" onClick={onSeguinteClick}>Seguinte</button>
                </div>
            </div>
        </div>
    );
};

export default Servico;
