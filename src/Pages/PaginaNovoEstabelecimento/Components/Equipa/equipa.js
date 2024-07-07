import React, { useState, useEffect } from 'react';
import './equipa.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import defaultProfilePicture from '../../../../Imagens/defaultpfp.jpg';

const Equipe = ({ onBack, onNext }) => {
    const initialEquipe = [
        { id: 1, nome: '', cargo: '', foto: defaultProfilePicture }
    ];
    const [equipe, setEquipe] = useState(initialEquipe);

    useEffect(() => {
        const storedEquipe = JSON.parse(localStorage.getItem('equipe'));
        if (storedEquipe) {
            setEquipe(storedEquipe);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('equipe', JSON.stringify(equipe));
    }, [equipe]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newEquipe = [...equipe];
        newEquipe[index][name] = value;
        setEquipe(newEquipe);
    };

    const handleFileChange = (e, index) => {
        const file = e.target.files[0];
        if (!file) return;
        const newEquipe = [...equipe];
        newEquipe[index].foto = URL.createObjectURL(file);
        setEquipe(newEquipe);
    };

    const handleImageClick = (index) => {
        document.getElementById(`file-input-${index}`).click();
    };

    const handleAddMember = () => {
        const newMember = { id: equipe.length + 1, nome: '', cargo: '', foto: defaultProfilePicture };
        setEquipe([...equipe, newMember]);
    };

    const handleRemoveMember = (id) => {
        const updatedEquipe = equipe.filter(member => member.id !== id);
        setEquipe(updatedEquipe);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div className="container-equipa">
            <h1>Estabelecimento</h1>
            <nav className="nav-equipa">
                Responsável &gt; Informações Gerais &gt; <span>Equipa</span> &gt; Preços &gt; Horário &gt; Métodos de Pagamento &gt; Redes Sociais &gt; Confirmação
            </nav>
            <form onSubmit={handleSubmit} className="form-equipa">
                {equipe.map((member, index) => (
                    <div key={member.id} className="card-membro-equipa">
                        <div className="image-preview-equipa" onClick={() => handleImageClick(index)}>
                            <img src={member.foto} alt={`preview ${index}`} />
                            <input
                                type="file"
                                accept="image/*"
                                id={`file-input-${index}`}
                                onChange={(e) => handleFileChange(e, index)}
                                className="input-equipa"
                            />
                        </div>
                        <div className="form-group-equipa">
                            <label className="label-equipa">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                value={member.nome}
                                onChange={(e) => handleChange(e, index)}
                                placeholder="Nome do membro"
                                className="input-equipa"
                            />
                        </div>
                        <div className="form-group-equipa">
                            <label className="label-equipa">Cargo</label>
                            <input
                                type="text"
                                name="cargo"
                                value={member.cargo}
                                onChange={(e) => handleChange(e, index)}
                                placeholder="Cargo do membro"
                                className="input-equipa"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => handleRemoveMember(member.id)}
                            className="remove-button-equipa"
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="trash-icon-equipa" />
                        </button>
                    </div>
                ))}
                <div className="button-equipa-container">
                    <button type="button" className="button-equipa" onClick={onBack}>
                        Voltar
                    </button>
                    <button type="button" className="button-equipa add-button-equipa" onClick={handleAddMember}>
                        <FontAwesomeIcon icon={faPlus} /> Adicionar
                    </button>
                    <button type="submit" className="button-equipa">Seguinte</button>
                </div>
            </form>
        </div>
    );
};

export default Equipe;
