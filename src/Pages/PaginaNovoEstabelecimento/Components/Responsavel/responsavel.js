import React, { useState } from 'react';
import './responsavel.css';

const IntroducaoEstabelecimentoResp = ({ onNext }) => {
  const [pessoal, setPessoal] = useState({
    primeiroNome: '',
    ultimoNome: '',
    email: '',
    telefone: '',
    palavraPasse: '',
    confirmarPalavraPasse: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPessoal({ ...pessoal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('pessoal', JSON.stringify(pessoal));
    onNext(pessoal);
  };

  return (
    <div className="container-resp">
      <h1>Estabelecimento</h1>
      <nav className="nav-resp">
        <span>Responsável</span> &gt; Informações Gerais &gt; Equipa &gt; Preços &gt; Horário &gt; Métodos de Pagamento &gt; Redes Sociais &gt; Confirmação
      </nav>
      <form onSubmit={handleSubmit} className="form-resp">
        <div className="form-group-resp">
          <label className="label-resp">Primeiro Nome</label>
          <input
            type="text"
            name="primeiroNome"
            value={pessoal.primeiroNome}
            onChange={handleChange}
            placeholder="Introduza o seu primeiro nome"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Último Nome</label>
          <input
            type="text"
            name="ultimoNome"
            value={pessoal.ultimoNome}
            onChange={handleChange}
            placeholder="Introduza o seu último nome"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Email</label>
          <input
            type="email"
            name="email"
            value={pessoal.email}
            onChange={handleChange}
            placeholder="Introduza o email"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Número de Telefone</label>
          <input
            type="text"
            name="telefone"
            value={pessoal.telefone}
            onChange={handleChange}
            placeholder="Introduza o número de telefone"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Palavra-Passe</label>
          <input
            type="password"
            name="palavraPasse"
            value={pessoal.palavraPasse}
            onChange={handleChange}
            placeholder="Introduza a palavra-passe"
            className="input-resp"
          />
        </div>
        <div className="form-group-resp">
          <label className="label-resp">Confirme a Palavra-Passe</label>
          <input
            type="password"
            name="confirmarPalavraPasse"
            value={pessoal.confirmarPalavraPasse}
            onChange={handleChange}
            placeholder="Introduza a palavra-passe novamente"
            className="input-resp"
          />
        </div>
        <div className="button-resp-container">
          <button type="submit" className="button-resp">Seguinte</button>
        </div>
      </form>
    </div>
  );
};

export default IntroducaoEstabelecimentoResp;
