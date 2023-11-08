import BasicExample from "../components/Spinner";

const NotFound = () => {
    return(
        <div className="
                container 
                mt-5
                d-flex
                justify-content-center 
                align-items-center
                flex-column"
                style={{ 
                    height: 'calc(100vh - 176px)' 
                }}>
            <div className=" d-flex ">
                <BasicExample/>
                <h2 className="ms-3">Página no encontrada</h2>
            </div>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
        </div>
    );
}

export default NotFound;