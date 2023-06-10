
import React from "react";
import MenuLog from "./MenuLog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";

class InternalAlumnCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            dni: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

componentDidMount(){
    if(this.props.params.aluID) {
        let requestAlumn = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        };
        fetch(`http://localhost:8080/apis/alumno/${this.props.params.aluID}`, requestAlumn)
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
                        nombre:result.body.nombre,
                        apellido:result.body.apellido,
                        dni:result.body.dni
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
            dni: '',
            nombre: '',
            apellido: ''
          });
    }
}

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let dataAlumn = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            dni: this.state.dni,
        };
        let requestAlumn = {
            method: this.props.params.aluID?'PUT':'POST',
            body: JSON.stringify(dataAlumn),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        };
        fetch(`http://localhost:8080/apis/alumno/${this.props.params.aluID}`, requestAlumn)
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
                    this.props.navigate("/logueado/alumnlog")
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
            );
    }
    render() {
        return (
            <>
                <MenuLog></MenuLog>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{this.props.params.aluID?"Modificar Alumno " + this.state.apellido : "Crear un Nuevo Alumno " }</h1>
                            <form onSubmit={this.handleSubmit} className="row g-3" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre:
                                        <input type="text" className="form-control" id="nombre" name="nombre" value={this.state.nombre} onChange={this.handleChange} required/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="apellido" className="form-label">Apellido:
                                        <input type="text" className="form-control" id="apellido" name="apellido" value={this.state.apellido} onChange={this.handleChange} required/>
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dni" className="form-label">DNI:
                                        <input type="number" className="form-control" id="dni" name="dni" value={this.state.dni} onChange={this.handleChange} required/>
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

export function AlumnCreate(props) {
    const navigate = useNavigate();
    const params = useParams();
    
    return <InternalAlumnCreate navigate={navigate} params={params} />
}

export default AlumnCreate;