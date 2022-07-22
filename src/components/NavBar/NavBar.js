// UpperCamelCase
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        // Fragment
        <nav class="navbar navbar-expand-lg navbar-light p-3" id="menu">
            <div class="container">
                <a class="navbar-brand" href="../index.html">
                    <span class="tituloNavbar">Academia Rambam</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="../pages/cursos.html">Cursos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/extension.html">Extensiones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/noticias.html">Noticias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/contacto.html">Contacto</a>
                        </li>
                    </ul>
                    <div class="conteiner">
                        <p id="temp" class="m-3"></p>
                    </div>
                    <div id="userButton">
                        <a class="btn btn-outline" href="./login.html">Iniciar Sesión</a>
                    </div>
                    <a href="../index.html" id="userLogout" class="d-none btn-logout ms-3"></a>
                    <CartWidget />
                </div>
            </div>
    </nav>
    )
}

export default NavBar