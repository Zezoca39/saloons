import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <nav className="footer-menu">
                <a href="/">Página Inicial</a>
                <span className="vertical-bar">|</span>
                <a href="/search">Pesquisar</a>
                <span className="vertical-bar">|</span>
                <a href="/business">Listar Empresa</a>
            </nav>
            <hr className="footer-divider" />
            <p className="footer-text">
                <span className="highlight">Saloons</span> Copyright © 2024 Enovo All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
