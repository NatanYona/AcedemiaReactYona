// UpperCamelCase
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light p-3" id="menu">
            <div class="container">
                <Link to="/">
                    <a class="navbar-brand">
                        <span class="tituloNavbar">Academia Rambam</span>
                    </a>
                </Link>
                <a class="navbar-toggler" type="a" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/category/Curso">
                                <a class="nav-Link" aria-current="page" >Cursos</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/category/Comida">
                                <a class="nav-Link">Bananas</a>
                            </Link>
                        </li>
                    </ul>
                    <div class="conteiner">
                        <p id="temp" class="m-3"></p>
                    </div>
                    <div id="usera">
                        <Link to="/login">
                            <a class="btn btn-outline" href="./login.html">Iniciar Sesión</a>
                        </Link>
                    </div>
                    <a id="userLogout" class="d-none btn-logout ms-3"></a>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar