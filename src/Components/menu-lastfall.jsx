import { useEffect, useRef } from "react";
import '/src/styles/menu-lastfall.scss';

export default function MenuLastfall(active) {
  const navBarRef = useRef(null); 

  useEffect(() => {

    if(active === true){
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
        className="d-flex justify-content-center align-items-center w-auto rounded-5"
        style={{
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(57, 181, 74, 0.2)',
          boxShadow: '0px 4px 15px rgba(57, 181, 74, 0.2)',
          transition: '1s',
        }}
      >
        <ul className="nav">
        <li className="nav-item dropdown">
          <a className="nav-item nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">GabStudios</a></li>
            <li><a className="dropdown-item" href="/lastfall">Lastfall</a></li>
          </ul>
        </li>
          <li><a className='nav-item nav-link text-white' href="/lastfall/desenvolvimento">Desevolvimento</a></li>
          <li><a className='nav-item nav-link text-white' href="">Download</a></li>
        </ul>
      </nav>
    </header>
  );
}
