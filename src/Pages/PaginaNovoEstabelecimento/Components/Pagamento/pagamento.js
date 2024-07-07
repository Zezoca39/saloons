import React, { useState } from 'react';
import './pagamento.css';
import PagamentoPresencialImg from '../../../../Imagens/Icons/money.png';
import MultibancoImg from '../../../../Imagens/Icons/multibanco.png';
import MBWayImg from '../../../../Imagens/Icons/mbway.png';
import TransferenciaBancariaImg from '../../../../Imagens/Icons/transbanc.png';
import PayPalImg from '../../../../Imagens/Icons/paypal.png';
import MaestroImg from '../../../../Imagens/Icons/maestro.png';
import MastercardImg from '../../../../Imagens/Icons/mastercard.png';
import VisaImg from '../../../../Imagens/Icons/visa.png';

const MetodosPagamento = ({ onBack, onNext }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [modalData, setModalData] = useState({
        pagamentoPresencial: false,
        multibanco: {},
        mbway: {},
        transferenciaBancaria: {},
        paypal: {},
        maestro: {},
        mastercard: {},
        visa: {},
    });

    const handleCheckboxChange = (method) => {
        const isComplete = checkMethodCompletion(method);
        if (isComplete) {
            setModalData(prev => ({ ...prev, [method]: !prev[method] }));
        }
    };

    const checkMethodCompletion = (method) => {
        switch (method) {
            case 'multibanco':
                return modalData[method]?.entidade && modalData[method]?.referencia;
            case 'mbway':
                return modalData[method]?.telemovel;
            case 'transferenciaBancaria':
                return modalData[method]?.iban;
            case 'paypal':
                return modalData[method]?.email;
            case 'maestro':
            case 'mastercard':
            case 'visa':
                return modalData[method]?.cartao && modalData[method]?.validade && modalData[method]?.cvc;
            default:
                return false;
        }
    };

    const handleInputChange = (method, field, value) => {
        setModalData(prev => ({
            ...prev,
            [method]: {
                ...prev[method],
                [field]: value,
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(modalData);
        onNext();
    };

    const renderAccordionContent = (method) => {
        switch (method) {
            case 'multibanco':
                return (
                    <>
                        <label>Entidade:</label>
                        <input
                            type="text"
                            value={modalData[method]?.entidade || ''}
                            onChange={(e) => handleInputChange(method, 'entidade', e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <label>Referência:</label>
                        <input
                            type="text"
                            value={modalData[method]?.referencia || ''}
                            onChange={(e) => handleInputChange(method, 'referencia', e.target.value)}
                            onClick={(e) => e.stopPropagation()}
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
                            onClick={(e) => e.stopPropagation()}
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
                            onClick={(e) => e.stopPropagation()}
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
                            onClick={(e) => e.stopPropagation()}
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
                            onClick={(e) => e.stopPropagation()}
                        />
                        <label>Data de validade:</label>
                        <input
                            type="text"
                            value={modalData[method]?.validade || ''}
                            onChange={(e) => handleInputChange(method, 'validade', e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <label>CVC:</label>
                        <input
                            type="text"
                            value={modalData[method]?.cvc || ''}
                            onChange={(e) => handleInputChange(method, 'cvc', e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </>
                );
            default:
                return null;
        }
    };

    const paymentMethods = [
        { method: 'multibanco', label: 'Multibanco', imgSrc: MultibancoImg },
        { method: 'mbway', label: 'MBWay', imgSrc: MBWayImg },
        { method: 'transferenciaBancaria', label: 'Transferência Bancária', imgSrc: TransferenciaBancariaImg },
        { method: 'paypal', label: 'PayPal', imgSrc: PayPalImg },
        { method: 'maestro', label: 'Maestro', imgSrc: MaestroImg },
        { method: 'mastercard', label: 'Mastercard', imgSrc: MastercardImg },
        { method: 'visa', label: 'Visa', imgSrc: VisaImg },
    ];

    return (
        <div className="container-pagamento">
            <h1>Estabelecimento</h1>
            <nav className="nav-pagamento">
                Responsável &gt; Informações Gerais &gt; Equipa &gt; Preços &gt; Horário &gt; <span>Métodos de Pagamento</span> &gt; Redes Sociais &gt; Confirmação
            </nav>
            <div className="pagamento-presencial" onClick={() => setModalData(prev => ({ ...prev, pagamentoPresencial: !prev.pagamentoPresencial }))}>
                <div className="linha-pagamento-header">
                    <img src={PagamentoPresencialImg} alt="Pagamento Presencial" className="imagem-pagamento" />
                    <label className="label-pagamento">Pagamento Presencial</label>
                    <input
                        type="checkbox"
                        checked={modalData.pagamentoPresencial}
                        onChange={() => setModalData(prev => ({ ...prev, pagamentoPresencial: !prev.pagamentoPresencial }))}
                    />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="form-pagamento">
                {paymentMethods.map(({ method, label, imgSrc }) => (
                    <div
                        key={method}
                        className={`linha-pagamento ${selectedMethod === method ? 'expanded' : ''}`}
                        onClick={() => setSelectedMethod(selectedMethod === method ? null : method)}
                    >
                        <div className="linha-pagamento-header">
                            <img src={imgSrc} alt={label} className="imagem-pagamento" />
                            <label className="label-pagamento">{label}</label>
                            <input
                                type="checkbox"
                                checked={modalData[method] && checkMethodCompletion(method)}
                                onChange={(e) => {
                                    e.stopPropagation();
                                    handleCheckboxChange(method);
                                }}
                            />
                        </div>
                        {selectedMethod === method && (
                            <div className="accordion-content">
                                {renderAccordionContent(method)}
                            </div>
                        )}
                    </div>
                ))}
                <div className="button-pagamento-container">
                    <button type="button" className="button-pagamento" onClick={onBack}>
                        Voltar
                    </button>
                    <button type="submit" className="button-pagamento">Seguinte</button>
                </div>
            </form>
        </div>
    );
};

export default MetodosPagamento;
