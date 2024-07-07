import '../../styles.css';
import NavbarComponent from './Components/Navbar/navbar';
import PerfilComponent from './Components/Perfil/perfil';

const PaginaInicial = () => {
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <NavbarComponent />
            </div>
            <PerfilComponent />
        </div>
    );
};

export default PaginaInicial;
