import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" >
                                    {/* login de usuario */}
                                    Login
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        {/* <a className="dropdown-item" href="#">Action</a> */}
                                        <Link className="dropdown-item" to="/contact">Informacion</Link>
                                    </li>
                                    {/* <li> */}
                                    {/* <a className="dropdown-item" href="#">Action</a> */}
                                    {/* <Link className="dropdown-item" to="/contact">Salir</Link>
                                     </li> */}
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        {/* <a className="dropdown-item" href="#">Action</a> */}
                                        <Link className="dropdown-item" to="/contact">Salir</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;