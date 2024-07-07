import React, { useState } from 'react';
import './informacoesGerais.css';

const InformacoesGerais = ({ onBack, onNext }) => {
  const [infoGerais, setInfoGerais] = useState({
    nome: '',
    distrito: '',
    cidade: '',
    codigoPostal: '',
    morada: '',
    descricao: '',
    fotografias: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoGerais({ ...infoGerais, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedFotografias = [
      ...infoGerais.fotografias,
      ...files.map((file) => URL.createObjectURL(file))
    ];
    setInfoGerais({ ...infoGerais, fotografias: updatedFotografias });
  };

  const handleRemoveImage = (url) => {
    const updatedFotografias = infoGerais.fotografias.filter(
      (image) => image !== url
    );
    setInfoGerais({ ...infoGerais, fotografias: updatedFotografias });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('infoGerais', JSON.stringify(infoGerais));
    onNext();
  };

  return (
    <div className="container-resp">
      <h1>Estabelecimento</h1>
      <nav className="nav-resp">
        Responsável &gt; <span>Informações Gerais</span> &gt; Equipa &gt; Preços &gt; Horário &gt; Métodos de Pagamento &gt; Redes Sociais &gt; Confirmação
      </nav>
      <form onSubmit={handleSubmit} className="form-resp">
        <div className="form-group-resp">
          <label className="label-resp">Nome</label>
          <input
            type="text"
            name="nome"
            value={infoGerais.nome}
            onChange={handleChange}
            placeholder="Introduza o nome"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Distrito</label>
          <input
            type="text"
            name="distrito"
            value={infoGerais.distrito}
            onChange={handleChange}
            placeholder="Introduza o distrito"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Cidade</label>
          <input
            type="text"
            name="cidade"
            value={infoGerais.cidade}
            onChange={handleChange}
            placeholder="Introduza a cidade"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Código Postal</label>
          <input
            type="text"
            name="codigoPostal"
            value={infoGerais.codigoPostal}
            onChange={handleChange}
            placeholder="Introduza o código postal"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Morada</label>
          <input
            type="text"
            name="morada"
            value={infoGerais.morada}
            onChange={handleChange}
            placeholder="Introduza a morada"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Descrição</label>
          <input
            type="text"
            name="descricao"
            value={infoGerais.descricao}
            onChange={handleChange}
            placeholder="Introduza a descrição"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Fotografias</label>
          <input
            type="file"
            multiple
            name="fotografias"
            onChange={handleFileChange}
            className="input-resp"
          />
          <div className="image-preview-container">
            {infoGerais.fotografias.map((image, index) => (
              <div key={index} className="image-preview">
                <img src={image} alt={`preview ${index}`} />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(image)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="button-resp-container">
          <button type="button" className="button-resp" onClick={onBack}>Voltar</button>
          <button type="submit" className="button-resp">Seguinte</button>
        </div>
      </form>
    </div>
  );
};

export default InformacoesGerais;
