
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://res.cloudinary.com/dkqtquwsj/image/upload/v1686251999/Bootcamp/petLogo_k8l2ju.png" width="250" height="150" alt="Logo Busca Mascota" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active fs-4">
                            <a className="nav-link py-3 ox-0 px-lg-3 nav-icon" aria-current="page" href="#"><i className="fas fa-home"></i> Home</a>
                        </li>
                        <li className="nav-item active fs-4">
                            <a className="nav-link py-3 ox-0 px-lg-3 nav-icon" href="#"><i className="fas fa-paw"></i> Publicar Mascota</a>
                        </li>
                        <li className="nav-item active fs-4">
                            <a className="nav-link py-3 ox-0 px-lg-3 nav-icon" href="#"><i className="fas fa-search"></i> Buscar Mascota</a>
                        </li>
                        <li className="nav-item active fs-4">
                            <a className="nav-link py-3 ox-0 px-lg-3 nav-icon" href="#"><i className="fas fa-hands-holding"></i> Colaborar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar