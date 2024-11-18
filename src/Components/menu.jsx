import { useEffect, useState } from "react";
import '/src/styles/menu.css';

export default function Menu() {
  const [brand, setBrand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
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

  return (
    <menu id="navbar" className="nav justify-content-between ms-3 me-3 mt-0 z-3">
      <div
        id="navbar-brand"
        className={`nav-item d-flex justify-content-center align-items-center ${brand ? "visible" : ""}`}
      >
        <a className="navbar-brand" href="#">
          <img src="/src/assets/logo.png" alt="Logo da marca" width="200" />
        </a>
      </div>

      <div id="navbar-nav" className="nav-item d-flex justify-content-center align-items-center">
        <ul className="nav column-gap-3">
          <li className="nav-item">Home</li>
          <li className="nav-item">Quem somos</li>
          <li className="nav-item">Sinopse</li>
          <li className="nav-item">Contato</li>
        </ul>
      </div>
    </menu>
  );
}
