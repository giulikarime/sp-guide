import styles from './NavBar.module.css';
import {Link} from 'react-router-dom';
function NavBar(){

    return(
        <nav className={styles.nav}>
            <h1>São Paulo Guide</h1>
            <Link to="/">Home</Link> | {" "}
            <Link to="/exploracao">Ver Mapa</Link> | {" "}
            <Link to="/roteiro">Meu Roteiro</Link>
        </nav>
    );
}

export default NavBar;