import styles from './NavBar.module.css';
import {Link} from 'react-router-dom';
function navBar(){
    return(
        <nav className={styles.nav}>
            <h1>São Paulo Guide</h1>
            <Link to="/">Home</Link> | {" "}
            <Link to="/exploracao">Ver Mapa</Link> | {" "}
            <Link to="/roteiro">Meu Roteiro</Link>
            <div id="container">
                <input type="text" name="" id="searchBar"/>
                <label htmlFor="searchBar">Pesquisa</label>
            </div>
        </nav>
    );
}

export default navBar;