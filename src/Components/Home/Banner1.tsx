

const Banner1 = () => {
  return (
    <div className="img-full">
        <div className="row m-0 pt-5">
            <div className="col-lg-5 ml-auto pt-5 text-center" style={{marginTop: '40 px'}}>
                <img src="https://res.cloudinary.com/dkqtquwsj/image/upload/v1686255702/Bootcamp/principal1_ofmuqt.jpg" className="img-fluid" style={{maxHeight: '400px'}} alt="Dow watching" />
            </div>
            <div className="col-lg-7 ml-auto pt-5 text-center" style={{marginTop: '40px'}}>
                <h4 className="page-section-heading text-center text-dark bg-clear  mx-2"> Busca Mascota es una plataforma open-source, para que mascotas perdidas puedan reencontrarse con sus dueños. <br /> Puedes publicar tu mascota sin costo! Y también será publicado en las redes oficiales de Busca Mascota automáticamente.<br /> 
                </h4>
                <h3 className="page-section-heading text-center text-dark">
                    <a className="btn btn-warning btn-lg m-2 amarillo" href="/map/">
                        Buscar mi mascota
                    </a>
                    <a className="btn btn-outline-dark btn-lg m-2 ml-1" href="/publicar/">
                        Publicar mascota
                    </a>
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Banner1