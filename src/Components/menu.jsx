import { useEffect } from "react";

export default function Menu(){
    useEffect(() => {
        const menu = document.getElementById('navbar');
    
        const handleScroll = () => {
          if (window.scrollY > 1) { 
            menu.classList.add("Menu_active");
            menu.classList.remove("nav");

          } else {
            menu.classList.remove("Menu_active");
            menu.classList.add("nav");

          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <menu id="navbar" className="nav justify-content-between ms-3 me-3 mt-0  z-3">
            <div class="nav-item d-flex justify-content-center align-items-center3">
            <a class="navbar-brand" href="#">
                <img src="/src/assets/logo.png" alt="" width="200"/>
             </a>
            </div>
            <div className="nav-item d-flex justify-content-center align-items-center">
                <ul className="nav column-gap-3">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Quem somos</li>
                    <li className="nav-item">Sinopse</li>
                    <li className="nav-item">Contato</li>
                </ul>
            </div>
        </menu>
    )
}