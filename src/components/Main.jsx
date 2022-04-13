import { Link } from "react-router-dom"

const Main = () => {
    return (
        <>
            <div className="header-wrapper-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                            <div className="header-content">
                                <div className="header-content-text">
                                    <h3 className="header-text-hook">😎 Crea un perfil ahora</h3>
                                    <h2 className="header-text-title">Un lugar de trabajos a tu medida</h2>
                                    <p className="header-text-paragraph">Sin pagar por servicios o publicidad, acá podras encontrar esos trabajos que se ajusten a tu tiempo de una manera sencilla.</p>
                                </div>
                                <div className="header-content-btn">
                                    <Link to="/register" className="header-btn">¡Empecemos!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                            <div className="header-content-img">
                                <img src="./images/pexels-cottonbro-6986442.jpg" alt="" className="content-img-1 img-position"/>
                                <img src="./images/pexels-cottonbro-7482647.jpg" alt="" className="content-img-2 img-position"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main