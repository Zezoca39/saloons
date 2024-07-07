import React from 'react';
import './equipa.css';

const teamMembers = [
  { name: "João Silva", specialty: "Cabeleireiro", photo: "../corteFeminino.jpg" },
  { name: "Ana Costa", specialty: "Manicure", photo: "../corteFeminino.jpg" },
  { name: "Carlos Pereira", specialty: "Barbeiro", photo: "../corteFeminino.jpg" },
  { name: "Maria Oliveira", specialty: "Esteticista", photo: "../corteFeminino.jpg" },
  { name: "Carlos Pereira", specialty: "Barbeiro", photo: "../corteFeminino.jpg" },
  { name: "Maria Oliveira", specialty: "Esteticista", photo: "../corteFeminino.jpg" },
];

const Team = () => {
  return (
    <div style={{marginBottom:'50px' }}>
      <div className="titulo-equipa">Equipa</div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="photo-container">
              <img src={member.photo} alt={member.name} className="team-photo" />
            </div>
            <div className="team-name">{member.name}</div>
            <div className="team-specialty">{member.specialty}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
