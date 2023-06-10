import React from 'react';


function Footer() {
    return (
      <>

            <br/>
                <div className="RedesSociales">Redes Sociales</div>
                <div className="containerRedes">
                    <div className="icon">
                        <svg heigth="80" width="80">
                            <circle cx="40" cy="40" r="35" stroke="white"  width="4" fill="none"></circle>
                        </svg>
                        <i className='bx bxl-facebook-circle'></i>
                    </div>
                    <div className="icon">
                        <svg heigth="80" width="80">
                            <circle cx="40" cy="40" r="35" stroke="white"  width="4" fill="none"></circle>
                        </svg>
                        <i className='bx bxl-whatsapp'></i>
                    </div>
                    <div className="icon">
                        <svg heigth="80" width="80">
                            <circle cx="40" cy="40" r="35" stroke="white"  width="4" fill="none"></circle>
                        </svg>
                        <i className='bx bxl-instagram'></i>
                    </div>
                </div>
                <div>
                    <link rel="stylesheet" href="App.css"/>
                        <footer className="footer">
                            <p>© Todos los derechos reservados. Desarollado por Ojeda Carolina como Proyecto Final para el curso
                                impartido
                                por Silicon Misiones.</p>
                        </footer>
                </div>

            </>
            )      
}

export default Footer;