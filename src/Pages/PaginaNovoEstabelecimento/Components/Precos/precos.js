import React, { useState } from 'react';
import './precos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const Precos = ({ onBack, onNext }) => {
    const [precos, setPrecos] = useState([
        { id: 1, nome: '', descricao: '', preco: '' }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newPrecos = [...precos];
        newPrecos[index][name] = value;
        setPrecos(newPrecos);
    };

    const handleAddPreco = () => {
        const newPreco = { id: precos.length + 1, nome: '', descricao: '', preco: '' };
        setPrecos([...precos, newPreco]);
    };

    const handleRemovePreco = (id) => {
        const updatedPrecos = precos.filter(preco => preco.id !== id);
        setPrecos(updatedPrecos);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(precos);
        onNext();
    };

    return (
        <div className="container-precos">
            <h1>Estabelecimento</h1>
            <nav className="nav-precos">
                Responsável &gt; Informações Gerais &gt; Equipa &gt; <span>Preços</span> &gt; Horário &gt; Métodos de Pagamento &gt; Redes Sociais &gt; Confirmação
            </nav>
            <form onSubmit={handleSubmit} className="form-precos">
                <div className="label-precos">N°</div>
                <div className="label-precos">Nome</div>
                <div className="label-precos">Descrição</div>
                <div className="label-precos">Preço</div>
                <div></div>
                {precos.map((preco, index) => (
                    <React.Fragment key={preco.id}>
                        <div>{index + 1} -</div>
                        <input
                            type="text"
                            name="nome"
                            value={preco.nome}
                            onChange={(e) => handleChange(e, index)}
                            placeholder="Nome"
                            className="input-precos"
                        />
                        <input
                            type="text"
                            name="descricao"
                            value={preco.descricao}
                            onChange={(e) => handleChange(e, index)}
                            placeholder="Descrição"
                            className="input-precos"
                        />
                        <input
                            type="text"
                            name="preco"
                            value={preco.preco}
                            onChange={(e) => handleChange(e, index)}
                            placeholder="Preço"
                            className="input-precos"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemovePreco(preco.id)}
                            className="remove-button-precos"
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="trash-icon-equipa" />
                        </button>
                    </React.Fragment>
                ))}
                <div className="button-precos-container">
                    <button type="button" className="button-precos" onClick={onBack}>
                        Voltar
                    </button>
                    <button type="button" className="button-precos add-button-precos" onClick={handleAddPreco}>
                        <FontAwesomeIcon icon={faPlus} /> Adicionar
                    </button>
                    <button type="submit" className="button-precos">Seguinte</button>
                </div>
            </form>
        </div>
    );
};

export default Precos;
