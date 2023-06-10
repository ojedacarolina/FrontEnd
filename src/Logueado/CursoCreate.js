
import React from "react";
import MenuLog from "./MenuLog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";

class InternalCursoCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
            imagen: '',
            año: '',
            activo: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.params.cursoID) {
            let requestCurso = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": 'application/json'
                }
            };
            fetch(`http://localhost:8080/apis/curso/${this.props.params.cursoID}`, requestCurso)
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
                        this.setState({
                            nombre: result.body.nombre,
                            descripcion: result.body.descripcion,
                            imagen: result.body.imagen,
                            año: result.body.año,
                            activo: result.body.activo
                        })
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
        } else {
            this.setState({
                nombre: '',
                descripcion: '',
                imagen: '',
                año: '',
                activo: ''
            });
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let dataCurso = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            imagen: this.state.imagen,
            año: this.state.año,
            activo: this.state.activo
        };
        let requestCurso = {
            method: this.props.params.cursoID?'PUT':'POST',
            body: JSON.stringify(dataCurso),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        fetch(`http://localhost:8080/apis/curso/${this.props.params.cursoID}`, requestCurso)
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
                    this.props.navigate("/logueado/cursolog")
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
            },
                (error) => {
                    console.log(error);
                }
            )
    }
    render() {
        return (
            <>
                <MenuLog></MenuLog>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <h1>{this.props.params.cursoID?"Modificar Curso "+this.state.nombre : "Crear un Nuevo Curso " }</h1>
                            <form onSubmit={this.handleSubmit} className="row g-3">
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="nombre" name="nombre" value={this.state.nombre} onChange={this.handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="año" className="form-label">Fecha de Inicio:</label>
                                    <input type="date" className="form-control" id="año" name="año" value={this.state.año} onChange={this.handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descricion" className="form-label">Descripción:
                                        <textarea className="form-control" id="descricion" name="descricion" value={this.state.descricion} onChange={this.handleChange} ></textarea>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imagen" className="form-label">Imagen:
                                        <input type="text" className="form-control" id="imagen" name="imagen" value={this.state.imagen} onChange={this.handleChange} />
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="activo" className="form-label">Activo:
                                        <input type="text" className="form-control" id="activo" name="activo" value={this.state.activo} onChange={this.handleChange} />
                                    </label>
                                </div>
                                <div className="col-12">
                                    <input type="submit" value="Guardar Cambios" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export function CursoCreate(props) {
    const navigate = useNavigate();
    const params = useParams();

    return <InternalCursoCreate navigate={navigate} params={params} />
}

export default CursoCreate;