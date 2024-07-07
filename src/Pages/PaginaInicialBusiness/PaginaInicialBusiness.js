// PaginaInicial.js
import '../../styles.css';
import NavbarComponent from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import BusinessBanner from './Components/Banner/Banner';

const PaginaInicial = () => {
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <NavbarComponent />
            </div>
            <BusinessBanner />
            <Footer />
        </div>
    );
};

export default PaginaInicial;
