import { useEffect, useState } from "react";
import '/src/styles/menu.css'

export default function Menu(){
  const [brand, setBrand] = useState(false)


    useEffect(() => {
        //const menu = document.getElementById('navbar');

        const handleScroll = () => {
          if (window.scrollY > 1) { 
            setBrand(true);


          } else {
            setBrand(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



    return(
        <menu id="navbar" className="nav justify-content-between ms-3 me-3 mt-0  z-3">

          {
            brand == true ?  
            <div id="navbar-brand" class="nav-item d-flex justify-content-center align-items-center">
              <a class="navbar-brand" href="#">
                <img src="/src/assets/logo.png" alt="" width="200"/>
              </a>
            </div>
            : null
          }
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