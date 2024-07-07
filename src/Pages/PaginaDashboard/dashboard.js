import '../../styles.css';
import NavbarComponent from './Components/Navbar/navbar';
import Sidebar from './Components/Sidebar/sidebar.js';
import Charts from './Components/Graficos/graficos';


const dashboard = () => {
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <NavbarComponent />
            </div>
            <div style={{ display:'flex',marginTop: '90px' }}>
                <Sidebar />
                <Charts />
            </div>
        </div>
    );
};

export default dashboard;
