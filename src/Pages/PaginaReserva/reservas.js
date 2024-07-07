import React, { useState } from 'react';
import '../../styles.css';
import NavbarComponent from './Components/Navbar/navbar';
import Servico from './Components/Especialidades/especialidades';
import MarcarData from './Components/Horarios/horarios';
import MetodosPagamento from './Components/Pagamento/pagamento';


const PaginaInicial = () => {
    const [currentComponent, setCurrentComponent] = useState('Servico');

    const handleSeguinteClick = () => {
        setCurrentComponent('MarcarData');
    };
    const handleSeguinteClick2 = () => {
        setCurrentComponent('Pagamento');
    };

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <NavbarComponent />
            </div>
            {currentComponent === 'Servico' && <Servico onSeguinteClick={handleSeguinteClick} />}
            {currentComponent === 'MarcarData' && <MarcarData onSeguinteClick={handleSeguinteClick2}/>}
            {currentComponent === 'Pagamento' && <MetodosPagamento />}
        </div>
    );
};

export default PaginaInicial;
