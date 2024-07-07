import React from 'react';
import './filtrosLocal.css';
import { useNavigate } from 'react-router-dom';

function FiltrosLocais() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/search");
    };
    const locais = [
        {
            cidade: 'Lisboa',
            servicos: ['Corte Masculino', 'Corte Feminino', 'Massagem', 'Depilação', 'Manicure']
        },
        {
            cidade: 'Porto',
            servicos: ['Corte Masculino', 'Corte Feminino', 'Massagem', 'Depilação', 'Manicure']
        },
        {
            cidade: 'Coimbra',
            servicos: ['Corte Masculino', 'Corte Feminino', 'Massagem', 'Depilação', 'Manicure']
        },
        {
            cidade: 'Viseu',
            servicos: ['Corte Masculino', 'Corte Feminino', 'Massagem', 'Depilação', 'Manicure']
        },
        {
            cidade: 'Santarém',
            servicos: ['Corte Masculino', 'Corte Feminino', 'Massagem', 'Depilação', 'Manicure']
        }
    ];

    return (
        <div className="card-list-horizontal d-flex justify-content-center">
            {locais.map((local, index) => (
                <React.Fragment key={index}>
                    <div className='cardLocal'>
                        <h2 style={{ fontWeight: 'bold' }} onClick={handleClick}>{local.cidade}</h2>
                        <ul>
                            {local.servicos.map((servico, idx) => (
                                <li key={idx} onClick={handleClick}>{servico}</li>
                            ))}
                        </ul>
                    </div>
                    {index !== locais.length - 1 && <div className="barra-vertical"></div>}
                </React.Fragment>
            ))}
        </div>
    );
}

export default FiltrosLocais;
