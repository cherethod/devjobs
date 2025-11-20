import { Link } from "./Link";

const Header = () => {
  return (
    <header className="header-container">
      <h2>
        <Link href="/">DevJobs</Link>
      </h2>
      <nav>
        <Link href="/search">Empleos</Link>
        <Link href="#">Empresas</Link>
        <Link href="#">Salarios</Link>
      </nav>
      <div>
        <Link href="#">Publicar un empleo</Link>
        <Link href="#">Iniciar Sesión</Link>
      </div>
    </header>
  );
};

export default Header;
