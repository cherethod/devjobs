const Header = () => {
    return (
        <header className="header-container">
            <h2><a href="./index.html">DevJobs</a></h2>
            <nav>
                <a href="search.html">Empleos</a>
                <a href="#">Empresas</a>
                <a href="#">Salarios</a>
            </nav>
            <div>
                <a href="#">Publicar un empleo</a>
                <a href="#">Iniciar Sesión</a>
            </div>
        </header>
    )
}

export default Header