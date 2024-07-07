import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import './redesSociais.css';

const RedesSociais = ({ onBack, onNext }) => {
    const [links, setLinks] = useState({
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: '',
        tiktok: '',
    });

    const [checked, setChecked] = useState({
        facebook: false,
        instagram: false,
        twitter: false,
        youtube: false,
        tiktok: false,
    });

    const handleInputChange = (platform, value) => {
        setLinks(prev => ({
            ...prev,
            [platform]: value,
        }));
    };

    const handleCheckboxChange = (platform) => {
        setChecked(prev => ({
            ...prev,
            [platform]: !prev[platform],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Salvar no localStorage
        localStorage.setItem('redesSociais', JSON.stringify(links));
        onNext();
    };

    const socialPlatforms = [
        { platform: 'facebook', label: 'Link Facebook', icon: <FaFacebook /> },
        { platform: 'instagram', label: 'Link Instagram', icon: <FaInstagram /> },
        { platform: 'twitter', label: 'Link Twitter', icon: <FaTwitter /> },
        { platform: 'youtube', label: 'Link YouTube', icon: <FaYoutube /> },
        { platform: 'tiktok', label: 'Link TikTok', icon: <FaTiktok /> },
    ];

    return (
        <div className="container-redes-sociais">
            <h1>Estabelecimento</h1>
            <nav className="nav-redes-sociais">
                Responsável &gt; Informações Gerais &gt; Equipa &gt; Preços &gt; Horário &gt; Métodos de Pagamento &gt; <span>Redes Sociais</span> &gt; Confirmação
            </nav>
            <form onSubmit={handleSubmit} className="form-redes-sociais">
                {socialPlatforms.map(({ platform, label, icon }) => (
                    <div key={platform} className="linha-rede-social">
                        <input
                            type="checkbox"
                            checked={checked[platform]}
                            onChange={() => handleCheckboxChange(platform)}
                        />
                        <span className="icone-rede-social">{icon}</span>
                        <input
                            type="text"
                            placeholder={label}
                            value={links[platform]}
                            onChange={(e) => handleInputChange(platform, e.target.value)}
                            disabled={!checked[platform]}
                        />
                    </div>
                ))}
                <div className="button-redes-sociais-container">
                    <button type="button" className="button-redes-sociais" onClick={onBack}>
                        Voltar
                    </button>
                    <button type="submit" className="button-redes-sociais">Seguinte</button>
                </div>
            </form>
        </div>
    );
};

export default RedesSociais;
