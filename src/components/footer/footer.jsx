import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-logo">
                            <p>¡No lograras identificar los sabores!</p>
                        </div>
                        <div className="social">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-info">
                            <h3>Nos Ubicamos en:</h3>
                            <p>Otro Planeta</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer-menu">
                            <h3>Menu</h3>
                            <ul>
                                <li><a href="#">🍕 Cuatro Estaciones</a></li>
                                <li><a href="#">🍕 Bacon</a></li>
                                <li><a href="#">🍕 Española</a></li>
                                <li><a href="#">🍕 Napolitana</a></li>
                                <li><a href="#">🍕 Salame</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
