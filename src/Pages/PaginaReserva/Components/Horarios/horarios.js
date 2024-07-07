// MarcarData.js
import React, { useState } from 'react';
import './horarios.css';

const dias = [
    { dia: 29, mes: 'fev', disponivel: true },
    { dia: 1, mes: 'mar', disponivel: true },
    { dia: 2, mes: 'mar', disponivel: false },
    { dia: 3, mes: 'mar', disponivel: false },
    { dia: 4, mes: 'mar', disponivel: false },
    { dia: 5, mes: 'mar', disponivel: false },
    { dia: 6, mes: 'mar', disponivel: false },
    { dia: 7, mes: 'mar', disponivel: false },
    { dia: 8, mes: 'mar', disponivel: true },
    { dia: 9, mes: 'mar', disponivel: false },
    { dia: 10, mes: 'mar', disponivel: false },
    { dia: 11, mes: 'mar', disponivel: false },
    { dia: 12, mes: 'mar', disponivel: false },
];

const horarios = {
    '29-fev': [
        { hora: "08:00", disponivel: true },
        { hora: "08:30", disponivel: true },
        { hora: "09:00", disponivel: false },
        { hora: "09:30", disponivel: true },
        { hora: "10:00", disponivel: true },
        { hora: "10:30", disponivel: true },
        { hora: "11:00", disponivel: true },
        { hora: "11:30", disponivel: true },
        { hora: "12:00", disponivel: true },
        { hora: "12:30", disponivel: true },
        { hora: "14:00", disponivel: false },
        { hora: "14:30", disponivel: true },
        { hora: "15:00", disponivel: true },
        { hora: "15:30", disponivel: true },
        { hora: "16:00", disponivel: true },
        { hora: "16:30", disponivel: true },
        { hora: "17:00", disponivel: true },
        { hora: "17:30", disponivel: true }
    ],
    '1-mar': [
        { hora: "08:00", disponivel: true },
        { hora: "08:30", disponivel: true },
        { hora: "09:00", disponivel: false },
        { hora: "09:30", disponivel: false },
        { hora: "10:00", disponivel: false },
        { hora: "10:30", disponivel: false },
        { hora: "11:00", disponivel: true },
        { hora: "11:30", disponivel: true },
        { hora: "12:00", disponivel: true },
        { hora: "12:30", disponivel: true },
        { hora: "14:00", disponivel: false },
        { hora: "14:30", disponivel: true },
        { hora: "15:00", disponivel: true },
        { hora: "15:30", disponivel: true },
        { hora: "16:00", disponivel: true },
        { hora: "16:30", disponivel: false },
        { hora: "17:00", disponivel: true },
        { hora: "17:30", disponivel: true }
    ],
    '8-mar': [
        { hora: "08:00", disponivel: true },
        { hora: "08:30", disponivel: true },
        { hora: "09:00", disponivel: false },
        { hora: "09:30", disponivel: true },
        { hora: "10:00", disponivel: true },
        { hora: "10:30", disponivel: true },
        { hora: "11:00", disponivel: false },
        { hora: "11:30", disponivel: true },
        { hora: "12:00", disponivel: true },
        { hora: "12:30", disponivel: true },
        { hora: "14:00", disponivel: false },
        { hora: "14:30", disponivel: true },
        { hora: "15:00", disponivel: true },
        { hora: "15:30", disponivel: false },
        { hora: "16:00", disponivel: true },
        { hora: "16:30", disponivel: true },
        { hora: "17:00", disponivel: true },
        { hora: "17:30", disponivel: true }
    ],
};

const MarcarData = ({ onSeguinteClick }) => {
    const [selectedDia, setSelectedDia] = useState('29-fev');
    const [selectedHora, setSelectedHora] = useState(null);

    const handleDiaClick = (dia, mes, disponivel) => {
        if (disponivel) {
            setSelectedDia(`${dia}-${mes}`);
            setSelectedHora(null);
        }
    };

    const handleHoraClick = (horario) => {
        if (horario.disponivel) {
            setSelectedHora(horario.hora);
        }
    };

    return (
        <div className="container-data">
            <div className="titulo-data">Marcar - Data</div>
            <div className="data-content">
                <div className="dias-semana">
                    {dias.map((dia, index) => (
                        <div
                            key={index}
                            className={`dia ${selectedDia === `${dia.dia}-${dia.mes}` ? 'dia-selecionado' : ''} ${!dia.disponivel ? 'dia-indisponivel' : ''}`}
                            onClick={() => handleDiaClick(dia.dia, dia.mes, dia.disponivel)}
                        >
                            <div className="dia-numero">{dia.dia}</div>
                            <div className="dia-mes">{dia.mes}</div>
                        </div>
                    ))}
                </div>
                <div className="horarios-lista">
                    {(horarios[selectedDia] || []).map((horario, index) => (
                        <div
                            key={index}
                            className={`horario ${!horario.disponivel ? 'horario-indisponivel' : ''} ${selectedHora === horario.hora ? 'horario-selecionado' : ''}`}
                            onClick={() => handleHoraClick(horario)}
                        >
                            <span>{horario.hora}</span>
                            <input type="checkbox" checked={selectedHora === horario.hora} readOnly />
                        </div>
                    ))}
                </div>
            </div>
            <div className="card-detalhes2">
                <div className="card-detalhes">
                    <div className="imagem-barbearia">
                        <img src="https://i.pinimg.com/564x/91/d6/03/91d6037c183ccc9644cdd59a70857524.jpg" alt="Barber Shop" />
                    </div>
                    <div className="detalhes-barbearia">
                        <h2>Barber Shop</h2>
                        <p>Viseu, Viseu | ★★★★★</p>
                        <p style={{ fontWeight:'Bold' }}>{`${selectedDia.replace('-', ' de ')} - ${selectedHora || 'Selecione um horário'}`}</p>
                        <p>Corte de Adulto: 12€</p>
                        <p>Barba: 5€</p>
                        <p>Corte de Criança: 8€</p>
                        <div className="total">
                            <p>Total</p>
                            <p>25€</p>
                        </div>
                    </div>
                </div>
                <button className="button-seguinte" onClick={onSeguinteClick}>Seguinte</button>
            </div>
        </div>
    );
};

export default MarcarData;
