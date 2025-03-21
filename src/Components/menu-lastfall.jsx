import { useEffect, useRef } from "react";
import '/src/styles/menu-lastfall.scss';
import { useMediaQuery } from "react-responsive";

export default function MenuLastfall({active}) {
  const navBarRef = useRef();


  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const menuLastfall = useRef()



  useEffect(() => {
    if(isMobile && menuLastfall.current){
      menuLastfall.current.classList.add('menuMoblie')
    } else {
      menuLastfall.current.classList.remove('menuMoblie')
    }
  },[isMobile])


  useEffect(() => {

    if(active == true) {

      const handleScroll = () => {
        if (window.scrollY > 1000) {
          navBarRef.current.classList.add('navbar-lastfall-active');
        } else {
          navBarRef.current.classList.remove('navbar-lastfall-active');
        }
      }
      window.addEventListener('scroll', handleScroll);
    
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      navBarRef.current.classList.add('navbar-lastfall-active');

    }
     


  }, []);
  

  return (
    <header
      id="navBar-lastfall"
      ref={navBarRef} 
      className="nav justify-content-center mt-3 z-3 position-fixed w-100"
      style={{
        opacity: '0',
        transition: '0.5s',
      }}
    >
      <nav
        id="navbar-nav"
        ref={menuLastfall}
        className="d-flex justify-content-center align-items-center w-auto rounded-5"
        style={{
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(57, 181, 74, 0.2)',
          boxShadow: '0px 4px 15px rgba(57, 181, 74, 0.2)',
          transition: '1s',
        }}
      >
        <ul className="nav">
          <li>
            <a className='nav-item nav-link text-white ' href="/">Home</a>
          </li>

        <li className="nav-item dropdown">
          <a className="nav-item nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Game
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/lastfall">Lastfall</a></li>
            <li><a className="dropdown-item" href="#sobreojogo">Sobre o Jogo</a></li>
            <li><a className="dropdown-item" href="#quemsomos">Quem Somos</a></li>
            <li><a className="dropdown-item" href="#sinopse">Sinopse</a></li>
            <li><a className="dropdown-item" href="#caracteristicas">Caracteristicas</a></li>
            <li><a className="dropdown-item" href="#persons">Personagens</a></li>
            <li><a className="dropdown-item" href="#trailer">Trailer</a></li>
            <li><a className="dropdown-item" href="#jogabilidade">Jogabilidade</a></li>
            <li><a className="dropdown-item" href="#historia">Historia</a></li>
            <li><a className="dropdown-item" href="#fale">Fale Conosco</a></li>





          </ul>
        </li>



          <li>
            <a className='nav-item nav-link text-white' href="/lastfall/desenvolvimento">Desevolvimento</a>
          </li>

          <li>
            <a className='nav-item nav-link text-white' href="">Download</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
