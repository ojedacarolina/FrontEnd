import React from 'react';

const rutaCarrusel1 = "/Carrusel1.jpg";
const rutaCarrusel2 = "https://www.fceqyn.unam.edu.ar/wp-content/uploads/2023/02/ingreso-2023-campus-3.webp"

function Carrusel() {
    return (
        <div className='container'>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={rutaCarrusel1}
                            className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Bienvenido a la plataforma de gestión de cursos de Silicon_</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={rutaCarrusel2}
                            className="rounded mx-auto d-block" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Creando talento IT en el nordeste Argentino.</h4>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carrusel;