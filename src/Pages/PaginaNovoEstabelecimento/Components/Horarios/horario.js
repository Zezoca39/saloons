import React, { useState } from 'react';
import './horario.css';

const Horario = ({ onBack, onNext }) => {
    const [horarios, setHorarios] = useState({
        segunda: { ativo: false, das: '', ate: '', das2: '', ate2: '' },
        terca: { ativo: false, das: '', ate: '', das2: '', ate2: '' },
        quarta: { ativo: false, das: '', ate: '', das2: '', ate2: '' },
        quinta: { ativo: false, das: '', ate: '', das2: '', ate2: '' },
        sexta: { ativo: false, das: '', ate: '', das2: '', ate2: '' },
        sábado: { ativo: false, das: '', ate: '', das2: '', ate2: '' },
        domingo: { ativo: false, das: '', ate: '', das2: '', ate2: '' },
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setHorarios({ ...horarios, [name]: { ...horarios[name], ativo: checked } });
    };

    const handleInputChange = (e, dia, campo) => {
        const { value } = e.target;
        setHorarios({ ...horarios, [dia]: { ...horarios[dia], [campo]: value } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(horarios);
        onNext();
    };

    return (
        <div className="container-horario">
            <h1>Estabelecimento</h1>
            <nav className="nav-horario">
                Responsável &gt; Informações Gerais &gt; Equipa &gt; Preços &gt; <span>Horário</span> &gt; Métodos de Pagamento &gt; Redes Sociais &gt; Confirmação
            </nav>
            <form onSubmit={handleSubmit} className="form-horario">
                {Object.keys(horarios).map((dia, index) => (
                    <div key={index} className="linha-horario">
                        <div className="label-container">
                            <input
                                type="checkbox"
                                name={dia}
                                checked={horarios[dia].ativo}
                                onChange={handleCheckboxChange}
                            />
                            <label className="label-horario">{dia.charAt(0).toUpperCase() + dia.slice(1)}:</label>
                        </div>
                        <div className="inputs-container">
                            <span>Das:</span>
                            <input
                                type="time"
                                value={horarios[dia].das}
                                onChange={(e) => handleInputChange(e, dia, 'das')}
                                disabled={!horarios[dia].ativo}
                            />
                            <span>Até:</span>
                            <input
                                type="time"
                                value={horarios[dia].ate}
                                onChange={(e) => handleInputChange(e, dia, 'ate')}
                                disabled={!horarios[dia].ativo}
                            />
                            <span style={{ marginLeft: '30px' }}>|</span>
                            <span style={{ marginLeft: '35px' }}>Das:</span>
                            <input
                                type="time"
                                value={horarios[dia].das2}
                                onChange={(e) => handleInputChange(e, dia, 'das2')}
                                disabled={!horarios[dia].ativo}
                            />
                            <span>Até:</span>
                            <input
                                type="time"
                                value={horarios[dia].ate2}
                                onChange={(e) => handleInputChange(e, dia, 'ate2')}
                                disabled={!horarios[dia].ativo}
                            />
                        </div>
                    </div>
                ))}
                <div className="button-horario-container">
                    <button type="button" className="button-horario" onClick={onBack}>
                        Voltar
                    </button>
                    <button type="submit" className="button-horario">Seguinte</button>
                </div>
            </form>
        </div>
    );
};

export default Horario;
