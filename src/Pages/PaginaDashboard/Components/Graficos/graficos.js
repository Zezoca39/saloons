// Charts.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './graficos.css';

const Charts = () => {
  const dataClientes = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Clientes (2024)',
        data: [200, 150, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: 'brown',
      },
    ],
  };

  const dataEspecialidades = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Corte de Homem',
        data: [200, 180, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#453096',
      },
      {
        label: 'Barba',
        data: [150, 100, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#BB0404',
      },
      {
        label: 'Corte de Criança',
        data: [100, 80, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#3BC873',
      },
      {
        label: 'Descoloração',
        data: [50, 40, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#FFCB45',
      },
      {
        label: 'Alteração de Cor',
        data: [30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#92FF3D',
      },
    ],
  };

  return (
    <div className="charts">
      <div className="chart-container">
        <h3>Estatísticas | Clientes (2024)</h3>
        <Bar data={dataClientes} />
      </div>
      <div className="chart-container">
        <h3>Estatísticas | Especialidades (2024)</h3>
        <Bar data={dataEspecialidades} />
      </div>
    </div>
  );
};

export default Charts;
