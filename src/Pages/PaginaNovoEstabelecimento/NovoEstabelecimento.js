import React, { useState } from 'react';
import NavbarComponent from './Components/Navbar/navbar';
import Responsavel from './Components/Responsavel/responsavel'
import InformacoesGerais from './Components/InformacoesGerais/informacoesGerais'
import Equipa from './Components/Equipa/equipa'
import Precos from './Components/Precos/precos';
import Horario from './Components/Horarios/horario';
import Pagamento from './Components/Pagamento/pagamento'
import RedesSociais from './Components/RedesSociais/redesSociais'
import Confirmacao from './Components/Confirmacao/confirmacao';

const PaginaNovoEstabelecimento = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <NavbarComponent />
      </div>
      <div>
        {step === 1 && <Responsavel onNext={handleNext} />}
        {step === 2 && <InformacoesGerais onBack={handleBack} onNext={handleNext} />}
        {step === 3 && <Equipa onBack={handleBack} onNext={handleNext} />}
        {step === 4 && <Precos onBack={handleBack} onNext={handleNext} />}
        {step === 5 && <Horario onBack={handleBack} onNext={handleNext} />}
        {step === 6 && <Pagamento onBack={handleBack} onNext={handleNext} />}
        {step === 7 && <RedesSociais onBack={handleBack} onNext={handleNext} />}
        {step === 8 && <Confirmacao onBack={handleBack} onNext={handleNext} />}
      </div>
    </div>
  );
};

export default PaginaNovoEstabelecimento;
