import React from 'react';
import './horario.css'; // Arquivo de estilos específicos para este componente

const CalendarioComponent = () => {
  const getProximos7Dias = () => {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const hoje = new Date();
    const dias = [];

    for (let i = 0; i < 7; i++) {
      const data = new Date(hoje);
      data.setDate(hoje.getDate() + i);
      const diaSemana = diasSemana[data.getDay()];
      dias.push({ data: data.toDateString(), diaSemana });
    }

    return dias;
  };

  const getIntervalosHorarios = () => {
    const intervalos = [];
    const horaInicial = 8; // Horário inicial
    const horaFinal = 20; // Horário final

    for (let hora = horaInicial; hora <= horaFinal; hora++) {
      for (let minuto = 0; minuto < 60; minuto += 30) {
        const horaFormatada = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
        intervalos.push({ horaFormatada });
      }
    }

    return intervalos;
  };

  const dias = getProximos7Dias();
  const intervalos = getIntervalosHorarios();

  return (
    <div className="calendario-container">
      <div className="calendario-table-wrapper">
        <table className="calendario-table">
          <thead>
            <tr>
              <th></th>
              {dias.map((dia, index) => (
                <th key={index}>
                  <div className="dia-semana123">{dia.diaSemana}</div>
                  <div className="data123">{dia.data}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {intervalos.map((intervalo, idx) => (
              <tr key={idx}>
                <td className="horario123">{intervalo.horaFormatada}</td>
                {dias.map((dia, index) => (
                  <td key={index} className="intervalo-horario"></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalendarioComponent;
