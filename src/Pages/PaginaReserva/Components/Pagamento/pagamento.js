import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Certifique-se de importar o navigate do pacote correto
import Swal from 'sweetalert2';
import './pagamento.css';
import Presencial from '../../../../Imagens/Icons/money.png'
import MultibancoImg from '../../../../Imagens/Icons/multibanco.png';
import MBWayImg from '../../../../Imagens/Icons/mbway.png';
import TransferenciaBancariaImg from '../../../../Imagens/Icons/transbanc.png';
import PayPalImg from '../../../../Imagens/Icons/paypal.png';
import MaestroImg from '../../../../Imagens/Icons/maestro.png';
import MastercardImg from '../../../../Imagens/Icons/mastercard.png';
import VisaImg from '../../../../Imagens/Icons/visa.png';

const MetodosPagamento = ({ onNext }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [modalData, setModalData] = useState({
    pagamento: { },
    multibanco: { entidade: '', referencia: '' },
    mbway: { telemovel: '' },
    transferenciaBancaria: { iban: '' },
    paypal: { email: '' },
    maestro: { cartao: '', validade: '', cvc: '' },
    mastercard: { cartao: '', validade: '', cvc: '' },
    visa: { cartao: '', validade: '', cvc: '' },
  });

  const handleInputChange = (method, field, value) => {
    setModalData(prev => ({
      ...prev,
      [method]: {
        ...prev[method],
        [field]: value,
      },
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Reserva feita com sucesso',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      // Additional actions (optional)
      // - Send payment data to backend (if applicable)
      // - Update reservation state (if applicable)
      // - ...

      navigate('/estabelecimento');
    });
  };

    const renderAccordionContent = (method) => {
        switch (method) {
            case 'pagamento':
                return (
                    <>
                    </>
                );
            case 'multibanco':
                return (
                    <>
                        <label>Entidade:</label>
                        <input
                            type="text"
                            value={modalData[method]?.entidade || ''}
                            onChange={(e) => handleInputChange(method, 'entidade', e.target.value)}
                        />
                        <label>Referência:</label>
                        <input
                            type="text"
                            value={modalData[method]?.referencia || ''}
                            onChange={(e) => handleInputChange(method, 'referencia', e.target.value)}
                        />
                    </>
                );
            case 'mbway':
                return (
                    <>
                        <label>Número de telemóvel:</label>
                        <input
                            type="text"
                            value={modalData[method]?.telemovel || ''}
                            onChange={(e) => handleInputChange(method, 'telemovel', e.target.value)}
                        />
                    </>
                );
            case 'transferenciaBancaria':
                return (
                    <>
                        <label>IBAN:</label>
                        <input
                            type="text"
                            value={modalData[method]?.iban || ''}
                            onChange={(e) => handleInputChange(method, 'iban', e.target.value)}
                        />
                    </>
                );
            case 'paypal':
                return (
                    <>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={modalData[method]?.email || ''}
                            onChange={(e) => handleInputChange(method, 'email', e.target.value)}
                        />
                    </>
                );
            case 'maestro':
            case 'mastercard':
            case 'visa':
                return (
                    <>
                        <label>Número do cartão:</label>
                        <input
                            type="text"
                            value={modalData[method]?.cartao || ''}
                            onChange={(e) => handleInputChange(method, 'cartao', e.target.value)}
                        />
                        <label>Data de validade:</label>
                        <input
                            type="text"
                            value={modalData[method]?.validade || ''}
                            onChange={(e) => handleInputChange(method, 'validade', e.target.value)}
                        />
                        <label>CVC:</label>
                        <input
                            type="text"
                            value={modalData[method]?.cvc || ''}
                            onChange={(e) => handleInputChange(method, 'cvc', e.target.value)}
                        />
                    </>
                );
            default:
                return null;
        }
    };

    const paymentMethods = [
        { method: 'pagamento', label: 'Pagamento Presencial', imgSrc: Presencial },
        { method: 'multibanco', label: 'Multibanco', imgSrc: MultibancoImg },
        { method: 'mbway', label: 'MBWay', imgSrc: MBWayImg },
        { method: 'transferenciaBancaria', label: 'Transferência Bancária', imgSrc: TransferenciaBancariaImg },
        { method: 'paypal', label: 'PayPal', imgSrc: PayPalImg },
        { method: 'maestro', label: 'Maestro', imgSrc: MaestroImg },
        { method: 'mastercard', label: 'Mastercard', imgSrc: MastercardImg },
        { method: 'visa', label: 'Visa', imgSrc: VisaImg },
    ];

    const handleAccordionClick = (method) => {
        if (!document.activeElement.tagName.toLowerCase().match(/^(input|textarea)$/)) {
            setSelectedMethod(selectedMethod === method ? null : method);
        }
    };

    return (
        <div className="container-data">
            <div className="titulo-data">Marcar - Método de Pagamento</div>
            <div className="container-pagamento-reserva">
                <div className="form-pagamento-reserva">
                    {paymentMethods.map(({ method, label, imgSrc }) => (
                        <div
                            key={method}
                            className={`linha-pagamento-reserva ${selectedMethod === method ? 'expanded' : ''}`}
                            onClick={() => handleAccordionClick(method)}
                        >
                            <div className="linha-pagamento-header">
                                <img src={imgSrc} alt={label} className="imagem-pagamento" />
                                <label className="label-pagamento">{label}</label>
                                <input
                                    type="checkbox"
                                    checked={selectedMethod === method}
                                    onChange={() => {}}
                                />
                            </div>
                            {selectedMethod === method && (
                                <div className="accordion-content">
                                    {renderAccordionContent(method)}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="card-detalhes2">
                <div className="card-detalhes">
                    <div className="imagem-barbearia">
                        <img src="https://i.pinimg.com/564x/91/d6/03/91d6037c183ccc9644cdd59a70857524.jpg" alt="Barber Shop" />
                    </div>
                    <div className="detalhes-barbearia">
                        <h2>Barber Shop</h2>
                        <p>Viseu, Viseu | ★★★★★</p>
                        <p></p>
                        <p>Corte de Adulto: 12€</p>
                        <p>Barba: 5€</p>
                        <p>Corte de Criança: 8€</p>
                        <div className="total">
                            <p>Total</p>
                            <p>25€</p>
                        </div>
                    </div>
                </div>
                <button className="button-seguinte" onClick={handleSubmit}>Seguinte</button>
            </div>
        </div>
    );
};

export default MetodosPagamento;
