import { Link } from "react-router-dom";
import React from 'react';


class MenuLog extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand">
                                <img src="/logo.png" className="jk" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/HomeLog" className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/logueado/cursolog" className="nav-link active">Cursos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/logueado/alumnlog" className="nav-link active">Alumnos</Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav d-flex">
                                    <div className="col-2">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item dropdown">
                                                <Link to="/user" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                    aria-expanded="false">User</Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="//" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                        aria-expanded="false">Cerrar Sesión</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

export default MenuLog;
