import { Link } from "react-router-dom";
import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <>
                <div classNameName="container">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link to="/" classNameName="navbar-brand">
                                <img src="/logo.png" classNameName="jk" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/cursos" className="nav-link active">Cursos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link active">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

export default Menu;
