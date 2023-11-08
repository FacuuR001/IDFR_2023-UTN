const About = () => {

    const aboutData = {
        nombre: 'Facundo Rullo',
        profesion: 'Desarrollador Web',
        descripcion: 'Soy un apasionado desarrollador web con experiencia en tecnologías como React, Node.js y Bootstrap. Me encanta crear aplicaciones web creativas y funcionales para mis clientes. Fuera del trabajo, disfruto de la música, la lectura y el senderismo en la naturaleza.',
    };


    return(
        <div className="
                container 
                text-center 
                d-flex 
                justify-content-center 
                align-items-center 
                flex-column" 
            style={{ 
                height: 'calc(100vh - 128px)' 
            }}>
            <h2 className="mb-3">Acerca de Mi!!</h2>
            <div className="card " style={{ width: '18rem' }} >
                <div className="card-body">
                  <h5 className="card-title">{aboutData.nombre}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{aboutData.profesion}</h6>
                  <p className="card-text">{aboutData.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default About;