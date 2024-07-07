import React from 'react';
import './horarios.css';

const Horarios = () => {
  const horarios = [
    { dia: 'Segunda-Feira', hora: '08:00 às 18:00' },
    { dia: 'Terça-Feira', hora: '08:00 às 18:00' },
    { dia: 'Quarta-Feira', hora: '08:00 às 18:00' },
    { dia: 'Quinta-Feira', hora: '08:00 às 18:00' },
    { dia: 'Sexta-Feira', hora: '08:00 às 18:00' },
    { dia: 'Sábado', hora: 'Fechado' },
    { dia: 'Domingo', hora: 'Fechado' },
  ];

  return (
    <div className="horarios">
      <h2>Horário</h2>
      <ul>
        {horarios.map((item, index) => (
          <li key={index} className={item.hora === 'Fechado' ? 'fechado' : ''}>
            <span className="dia2">{item.dia}</span>
            <span className="hora">{item.hora}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Horarios;