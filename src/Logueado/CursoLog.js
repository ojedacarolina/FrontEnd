import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MenuLog from './MenuLog';

class CursoLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursos: []
        };
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(cursoID) {
        let requestCurso = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        };
        fetch(`http://localhost:8080/apis/curso/${cursoID}`, requestCurso)
            .then(res => {
                return res.json().then(body => {
                    return {
                        status: res.status,
                        ok: res.ok,
                        headers: res.headers,
                        body: body
                    };
                });
            })
            .then(result => {
                if (result.ok) {
                    toast.success(result.body.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    this.componentDidMount()
                } else {
                    toast.error(result.body.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            });
    }

    componentDidMount() {
        fetch("http://localhost:8080/apis/curso")
            .then(res => res.json())
            .then(result => {
                console.log(result);
                this.setState({
                    cursos: result
                });
            },
                (error) => {
                    console.log(error);
                    this.setState({
                        error,
                        cursos: []
                    });
                }
            )
    }
    render() {
        return (
            <>
                <MenuLog></MenuLog>
                <div className="container">
                    <table className="table caption-top">
                        <caption>Lista de Cursos
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <li className="nav-item">
                                    <Link to="/logueado/cursocreate" className="nav-link active btn btn-primary me-md-2" aria-current="page" type="button">Crear Nuevo Curso</Link>
                                </li>
                            </div>
                        </caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cursos.map((curso, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{curso.cursoID}</th>
                                        <td>{curso.nombre}</td>
                                        <td>{curso.descripcion}</td>
                                        <td>{curso.imagen}</td>
                                        <td>{curso.año}</td>
                                        <td>{curso.activo}</td>
                                        <td><a className="btn btn-primary" href="editAlum.html" role="button" />Editar</td>
                                        <td><Link to={`/logueado/cursocreate/${curso.cursoID}`}>
                                            <button className="btn btn-primary">
                                            <span className="material-symbols-outlined">
                                                Editar
                                            </span>
                                            </button>
                                            </Link>
                                            <button type="submit" className="btn btn-danger" onClick = {() => this.onDelete(curso.cursoID)}>
                                            <span className="material-symbols-outlined center-align">
                                                Eliminar
                                            </span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </>
        );
    };
};

export default CursoLog;