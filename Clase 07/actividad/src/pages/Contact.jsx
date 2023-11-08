const Contact = () => {
    return(
         <div className="
                container mt-5" 
            style={{ 
                height: 'calc(100vh - 176px)' 
            }}>
            <h2>Contacto</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea className="form-control" id="mensaje" rows="4"></textarea>
                </div>
                <div className="mb-3 mt-3"> 
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;