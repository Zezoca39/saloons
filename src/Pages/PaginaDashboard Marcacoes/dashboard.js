import '../../styles.css';
import NavbarComponent from './Components/Navbar/navbar.js';
import Sidebar from './Components/Sidebar/sidebar.js';
import CalendarioComponent from './Components/Horario/horario.js';


const dashboard = () => {
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <NavbarComponent />
            </div>
            <div style={{ display:'flex',marginTop: '90px' }}>
                <Sidebar />
                <CalendarioComponent />
            </div>
        </div>
    );
};

export default dashboard;
