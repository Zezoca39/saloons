import React from 'react';
import './confirmacao.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import MultibancoImg from '../../../../Imagens/Icons/multibanco.png';
import MBWayImg from '../../../../Imagens/Icons/mbway.png';
import TransferenciaBancariaImg from '../../../../Imagens/Icons/transbanc.png';
import PayPalImg from '../../../../Imagens/Icons/paypal.png';
import MaestroImg from '../../../../Imagens/Icons/maestro.png';
import MastercardImg from '../../../../Imagens/Icons/mastercard.png';
import VisaImg from '../../../../Imagens/Icons/visa.png';

const Confirmacao = ({ onBack }) => {
    const dados = {
        pessoal: {
            nome: 'Maria Silva',
            email: 'maria.silva@example.com',
            telefone: '+351 912 345 678'
        },
        informacoesGerais: {
            nome: 'Salão de Beleza Glamour',
            cidade: 'Lisboa',
            morada: 'Av. das Estrelas, 45',
            codigoPostal: '1000-002',
            descricao: 'Salão de beleza premium com serviços de alta qualidade.',
            fotografias: ['https://i.pinimg.com/564x/3c/2f/a9/3c2fa995ffc2144eb30acc3a81c4c2a2.jpg', 'https://i.pinimg.com/564x/44/3d/27/443d27e82ca7c0989fbdb96314936ad5.jpg']
        },
        equipe: [
            { nome: 'Ana Sousa', cargo: 'Cabeleireira', foto: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg' },
            { nome: 'Carlos Fernandes', cargo: 'Esteticista', foto: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg' },
            { nome: 'Marta Costa', cargo: 'Manicure', foto: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg' }
        ],
        precos: [
            { descricao: 'Corte de Cabelo', valor: '20.00€' },
            { descricao: 'Coloração', valor: '40.00€' },
            { descricao: 'Manicure Simples', valor: '15.00€' }
        ],
        horario: [
            { dia: 'Segunda-feira', horario: '09:00 - 18:00' },
            { dia: 'Terça-feira', horario: '09:00 - 18:00' },
            { dia: 'Quarta-feira', horario: '09:00 - 18:00' },
            { dia: 'Quinta-feira', horario: '09:00 - 18:00' },
            { dia: 'Sexta-feira', horario: '09:00 - 20:00' },
            { dia: 'Sábado', horario: '09:00 - 20:00' },
            { dia: 'Domingo', horario: 'Fechado' }
        ],
        metodosPagamento: ['multibanco', 'mbway', 'transbanc', 'paypal', 'maestro', 'mastercard', 'visa'],
        redesSociais: {
            facebook: 'https://facebook.com/salaoglamour',
            instagram: 'https://instagram.com/salaoglamour',
            twitter: 'https://twitter.com/salaoglamour'
        }
    };

    const getIcon = (metodo) => {
        switch (metodo) {
            case 'multibanco':
                return MultibancoImg;
            case 'mbway':
                return MBWayImg;
            case 'transbanc':
                return TransferenciaBancariaImg;
            case 'paypal':
                return PayPalImg;
            case 'maestro':
                return MaestroImg;
            case 'mastercard':
                return MastercardImg;
            case 'visa':
                return VisaImg;
            default:
                return null;
        }
    };

    return (
        <div className="container-confirmacao2">
            <div className="secao-confirmacao2">
                <h4>1 - Informações Pessoais</h4>
                <p>{dados.pessoal.nome} ( {dados.pessoal.email} | {dados.pessoal.telefone} )</p>
            </div>
            <div className="secao-confirmacao2">
                <h4>2 - Informações Gerais</h4>
                <p>{dados.informacoesGerais.nome} ({dados.informacoesGerais.cidade} | {dados.informacoesGerais.morada} {dados.informacoesGerais.codigoPostal})</p>
                <p>{dados.informacoesGerais.descricao}</p>
                <div className="imagens-gerais2">
                    {dados.informacoesGerais.fotografias && dados.informacoesGerais.fotografias.map((src, index) => (
                        <img key={index} src={src} alt={`Imagem ${index + 1}`} />
                    ))}
                </div>
            </div>
            <div className="secao-confirmacao2">
                <h4>3 - Equipe</h4>
                <ul>
                    {dados.equipe.map((membro, index) => (
                        <div key={index} className="secao-equipa2">
                            <img src={membro.foto} alt={`Foto ${index}`} className="foto-membro-conf" />
                            <p>{membro.nome} - {membro.cargo}</p>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="secao-confirmacao2">
                <h4>4 - Preços</h4>
                <ul>
                    {dados.precos.map((preco, index) => (
                        <li key={index}>{preco.descricao} - {preco.valor}</li>
                    ))}
                </ul>
            </div>
            <div className="secao-confirmacao2">
                <h4>5 - Horário</h4>
                <ul>
                    {dados.horario.map((dia, index) => (
                        <li key={index}>{dia.dia} - {dia.horario}</li>
                    ))}
                </ul>
            </div>
            <div className="secao-confirmacao2">
                <h4>6 - Métodos de Pagamento</h4>
                <div className="metodos-pagamento2">
                    {dados.metodosPagamento.map((metodo, index) => (
                        <img key={index} src={getIcon(metodo)} alt={metodo} />
                    ))}
                </div>
            </div>
            <div className="secao-confirmacao2">
                <h4>8 - Redes Sociais</h4>
                <div className="redes-sociais-confirmacao2">
                    {dados.redesSociais.facebook && <p><FaFacebook /> - {dados.redesSociais.facebook}</p>}
                    {dados.redesSociais.instagram && <p><FaInstagram /> - {dados.redesSociais.instagram}</p>}
                    {dados.redesSociais.twitter && <p><FaTwitter /> - {dados.redesSociais.twitter}</p>}
                </div>
            </div>
        </div>
    );
};

export default Confirmacao;
