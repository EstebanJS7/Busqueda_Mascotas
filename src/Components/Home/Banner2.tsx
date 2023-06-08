
const Banner2 = () => {
  return (
    <section className="page-section bg-secondary text-white mb-0" id="paraQuien">
    <div className="row amarillo">
        <div className="col-lg-6 text-center py-5">
            <div className="container-fluid bg-clear">
                <h2 className="page-section-heading text-center text-dark mt-5">Quién puede utilizar el sitio?</h2> 
                <h4 className="page-section-text text-dark mt-5 ml-3"> 
                    <ul>
                        <li>Personas que han perdido su mascota y desean publicar un reporte o buscar su mascota.</li>
                        <li>Personas que han encontrado o avistado una mascota que parecía perdida y desean publicar un reporte.</li>
                    </ul>
                </h4>
                <h4 className="page-section-text text-center text-dark mt-5 ml-3"> 
                    Todo con el fin de que estas puedan reencontrarse con sus dueños. 
                </h4>
                <br />
            </div>
        </div>
        <div className="col-lg-6 text-center py-5 amarillo">
            <img src="https://res.cloudinary.com/dkqtquwsj/image/upload/v1686259556/Bootcamp/paw-five_mbbvqb.jpg" className="img-fluid" alt="Man and dog" />
        </div>
    </div>
</section>
  )
}

export default Banner2