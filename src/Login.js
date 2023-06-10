import MenuLog from "./Logueado/MenuLog";


function Login() {
    return (
        <>
        <MenuLog></MenuLog>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="mb-3">
                                <label for="nickname" className="form-label label-red">Nombre de Usuario</label>
                                <input type="text" className="form-control" id="nickname" aria-describedby="nombre"/>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                                    <label for="email">Correo con el cual se registro</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Contraseña</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
