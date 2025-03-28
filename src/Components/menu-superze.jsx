import { useEffect, useRef } from "react";
import '/src/styles/menu-lastfall.scss';
import { useMediaQuery } from "react-responsive";

export default function MenuSuperZe({active}) {
  const navBarRefSuperZe = useRef();


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
        if (window.scrollY > 1500) {
          navBarRefSuperZe.current.classList.add('navbar-superze-active');
        } else {
          navBarRefSuperZe.current.classList.remove('navbar-superze-active');
        }
      }
      window.addEventListener('scroll', handleScroll);
    
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      navBarRefSuperZe.current.classList.add('navbar-superze-active');

    }
     


  }, []);
  

  return (
    <header
      id="navBar-lastfall"
      ref={navBarRefSuperZe} 
      className="nav justify-content-center mt-3 z-3 position-fixed w-100"
      style={{
        opacity: '0',
        transition: '0.5s',
        height: '50px',

      }}
    >
      <nav
        id="navbar-nav"
        ref={menuLastfall}
        className="d-flex justify-content-center align-items-center w-auto rounded-3"
        style={{
          backdropFilter: 'blur(16px)',
          backgroundColor: '#01BFFF',
          boxShadow: '0px 4px 15px rgba(57, 181, 74, 0.2)',
          transition: '1s',
        }}
      >
        <ul className="nav">
          <li>
            <a className='nav-item nav-link text-white font-custom2 fs-1 h-25 superze-menu' href="/home">Home</a>
          </li>

          <li>
            <a className='nav-item nav-link text-white font-custom2 fs-1 superze-menu' href="/SuperZe.zip">Download</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
