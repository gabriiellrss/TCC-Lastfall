import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "/src/styles/footer.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className='mb-5 mt-3'>
        <img className='w-25' src="src/assets/logos/SVG/Ativo 3.svg" alt="" />
      </Container>
      <div className="container">
        
        <div className="row d-flex ">

          <div className="col-md-2">
            <h5>Jogos</h5>
            <ul className="list-unstyled">
              <a href='/lastfall' className='font-custom text-white'>Lastfall</a>
    
            </ul>
          </div>


          <div className="col-md-2">
            <h5>Recursos</h5>
            <ul className="list-unstyled">
              <li>Comunidade de Desenvolvimento</li>
              <li>Comunidade Lastfall</li>
              <li>Apoie</li>
              <li>Faqs</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>Empresa</h5>
            <ul className="list-unstyled">
              <a>Sobre</a>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">© 2024, GabStudios. Todos os direitos reservados.</p>
          <ul className="list-unstyled d-flex mb-0">
            <li className="ms-3">
              <a href="#" className="text-light">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a href="#" className="text-light">
                  <i className="bi bi-twitter-x"></i>
              </a>
            </li>
            <li className="ms-3">
              <a href="#" className="text-light">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
