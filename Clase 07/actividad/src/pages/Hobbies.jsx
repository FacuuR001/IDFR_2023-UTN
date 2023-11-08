const Hobbies = () => {

    const hobbies = [
        {
            id: 1,
            nombre: 'Senderismo',
            descripcion: 'Explorar montañas y disfrutar de la naturaleza.',
        },
        {
            id: 2,
            nombre: 'Automovilismo',
            descripcion: 'Competir para ganr.',
        },
        {
            id: 3,
            nombre: 'Gaming',
            descripcion: 'Jugar cualquier tipo de juegos.',
        },
        {
            id: 4,
            nombre: 'Tv',
            descripcion: 'Explorar nuevas series y peliculas.',
        },
    ];

    return(
        <div className="
                container
                d-flex 
                justify-content-center 
                align-items-center 
                flex-column"
            style={{ 
                height: 'calc(100vh - 128px)' 
            }}>
            <h2>Mis Hobbies</h2>
            <ul className="list-group">
                {hobbies.map((hobby) => (
                    <li key={hobby.id} className="list-group-item">
                        <h3>{hobby.nombre}</h3>
                        <p>{hobby.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;