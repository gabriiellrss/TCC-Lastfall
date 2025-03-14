<<<<<<< HEAD
import { useEffect, useState } from 'react';
import '/src/styles/menu.css';
import '/src/styles/menu.scss';
import gsap from 'gsap';


export default function Menu() {
  const [imageSrc, setImageSrc] = useState("/SuperZe-IV/SVG/SuperZe2_1logoVetor.svg");


  useEffect(() => {

    const brandSuperZe = document.getElementById('brandSuperZe')
    const brand = document.querySelector('.lastfall-brand');
    const navBar = document.querySelector('#navBar');
    const brandBack = document.querySelector('#brand-back')

    brand.addEventListener('mouseover', () => {
      navBar.style.backgroundColor = 'rgba(57, 181, 74, 0.1)'; 
    });

    brand.addEventListener('mouseout', () => {
      navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
    });

    brandSuperZe.addEventListener('mouseover', () => {
      navBar.style.backgroundColor = 'rgba(0, 153, 255, 0.4)'; 
    });

    brandSuperZe.addEventListener('mouseout', () => {
      navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
    });

    brand.addEventListener('click', () => {

      const tl = gsap.timeline();

      tl.to(brand, {
        scale: 1.5,         
        duration: 0.5,     
        ease: "power2.out", 
        fill: 'rgb(57, 181, 74)'
      })

      .to(brand, {
        duration: 0.1,      
        ease: "power2.in",
        fill: 'rgb(57, 181, 74)'

      })
      .to(brand, {
        opacity: 0,   
        duration: 0.2,    
        ease: "power1.out" ,
        fill: 'rgb(57, 181, 74)'

      })

      .to(brandBack, {
        scale: 200,
        duration: 0.2,
        backgroundColor: 'black',
        ease: 'power1.out',
      })
      .to(brandBack, {
        opacity: 1,
        duration: 1,
        ease: 'power1.out'
      }, "+=5")
      
      setInterval(function() {
        window.location.href = "/lastfall";
    }, 2500);
    });

  }, [])


  return (
    <header id='menu' className="position-fixed w-100">

      <nav
        className="navbar navbar-expand-lg custom-navbar"
        id='navBar'
        style={{
          transition: '1.1s',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#" style={{ width: '10rem' }}>
            <img className="logo" src="/logos/SVG/GabStudios.svg" alt="Gab Studios" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sobre Nós
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      GabStudios
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lastfall
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      A vida na Epic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Empregos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Alunos
                    </a>
                  </li>
=======
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
>>>>>>> 64d01ee6c79d711029a9eacfc57e456a5cbbe870
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Perguntas frequentes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Ajuda
                </a>
              </li>
              <li id='brand-back' className="nav-item d-flex justify-content-center" style={{ width: '5rem' }}>
                <a className="nav-link px-1 py-0 text-center">
                  <svg id="logo" data-name="Camada 2" alt="Lastfall" className='secondary-logo lastfall-brand z-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1627.14 391.91">
                    <defs>                 
                    </defs>
                    <g id="Camada_1-2" data-name="Camada 1">
                      <g>
                        <path className="cls-1" d="M5.9,267.01l138.18,1.97c6.55,1.15,12.45,3.12,17.7,5.9l-45.73,3.93h-41.3v60.98h-17.7c-2.79-7.7-4.76-16.23-5.9-25.57-2.62,6.88-4.59,14.1-5.9,21.64l-29.5,1.97c-8.52-.82-13.77-6.06-15.74-15.74,2.46-7.7,4.43-16.23,5.9-25.57v-29.5ZM7.87,5.41h86.54l1.97,5.9-1.97,17.7v188.82H27.54c-6.39,2.62-9.67,7.87-9.84,15.74v11.8h13.77v-19.67h66.88c6.39,4.1,9.67,10.66,9.83,19.67l-17.7,11.8H5.9V30.98l1.97-25.57ZM78.68,318.15h17.7v39.34h-17.7v-39.34ZM82.61,282.74h87.04c2.46,9.34,3.77,19.84,3.93,31.47v25.57l-1.97,5.9-71.3,1.97v-39.34h-17.7v-25.57Z"/>
                        <path className="cls-1" d="M196.94,220.79h66.88c7.87,1.15,13.77,5.08,17.7,11.8h17.7v41.31l-5.9,1.97h-13.77v17.7c-2.46,8.2-8.36,13.44-17.7,15.74l-21.64,9.84h-15.74v-39.34h-9.83v33.44c-8.69,2.79-17.87,4.76-27.54,5.9h-11.8l1.97-19.67c1.15-8.03,5.08-15.24,11.8-21.64l7.87-57.04ZM183.17,340.77h37.37l1.97,29.5c-.33,1.48-1.64,2.78-3.93,3.93h-37.37l-1.97-7.87,3.93-19.67v-5.9ZM236.28,4.43h114.08c8.03,4.1,13.28,11.31,15.74,21.64l3.93,33.44c.98,9.18,2.95,19.67,5.9,31.47l23.6,157.35h-62.94v57.04l-19.67,3.93v-15.74l-7.87-29.5v-37.37l3.93-19.67-7.87-80.64-3.93-19.67-11.8,100.31h-82.61l1.97-5.9,13.77-98.35c.33-9.67,1.64-20.81,3.93-33.44l3.93-33.44c.98-9.18,2.95-19.67,5.9-31.47ZM257.91,319.13h21.64v35.4c-2.79,3.44-6.72,6.06-11.8,7.87v-11.8h-25.57c-1.15,7.54-3.12,15.4-5.9,23.6-1.81-7.05-3.12-14.92-3.93-23.6,4.1-6.39,10.65-9.67,19.67-9.84,2.79-6.88,4.75-14.09,5.9-21.64ZM246.11,368.31h27.54c-1.64,5.08-4.26,10.33-7.87,15.74-5.9,3.77-12.46,6.39-19.67,7.87v-23.6ZM283.48,285.7h19.67v17.7h-19.67v-17.7ZM324.79,319.13h11.8v29.5h-9.84l-1.97-29.5ZM340.52,273.89h60.97l1.97,5.9,7.87,49.17c-.66,2.3-1.97,4.26-3.93,5.9-9.34,0-19.18-1.31-29.5-3.93l-29.5,3.93h-7.87v-60.97ZM340.52,344.7h21.64v29.5h-21.64v-29.5ZM377.9,344.7h25.57c7.87.66,13.11,4.59,15.74,11.8l1.97,13.77-5.9,3.93h-25.57c-2.46,5.41-5.74,10.65-9.84,15.74-6.56-3.93-9.83-9.83-9.83-17.7l7.87-17.7-7.87-7.87,7.87-1.97Z"/>
                        <path className="cls-1" d="M418.46,279.3h82.61v9.84c4.43,4.76,9.67,9.34,15.74,13.77v55.07h-7.87l-1.97-39.34h-11.8l-1.97,3.93c2.29,7.05,5.57,13.61,9.84,19.67v31.47l-13.77,1.97v-15.74l-21.64-7.87-19.67-11.8-15.74-13.77-9.84-21.64-3.93-25.57ZM420.43,147.52h17.7v29.5c-6.07-7.54-11.97-17.37-17.7-29.5ZM489.27,0l68.84,3.93,27.54,9.83,17.7,17.7,9.84,27.54,1.97,35.4-1.97,15.74h-80.64v-39.34l-1.97-5.9c-4.59-2.78-9.84-4.75-15.74-5.9l-5.9,7.87-3.93,19.67,1.97,5.9v5.9c4.43,6.88,9.67,13.44,15.74,19.67l45.24,27.54,37.37,35.4v59.01h-66.88v-21.64c-7.87-3.28-17.05-5.9-27.54-7.87l-64.91-45.24-1.97-33.44h-17.7l-3.93-15.74v-37.37l5.9-29.5c3.28-7.87,7.87-15.74,13.77-23.6,6.23-5.57,13.44-10.82,21.64-15.74l25.57-9.83ZM426.33,218.33h33.44l25.57,7.87c10.16.49,15.4,6.39,15.74,17.7v25.57l-1.97,5.9h-27.54l-5.9-1.97c-7.87-2.79-16.39-4.75-25.57-5.9-8.69-1.31-13.93-7.21-15.74-17.7v-25.57l1.97-5.9ZM506.97,220.3h23.6v27.54c-6.07-9.34-13.93-18.52-23.6-27.54ZM530.58,283.24c.98,4.43,1.64,9.67,1.97,15.74h-7.87l5.9-15.74ZM524.68,306.84l11.8,19.67v-7.87h80.64l-5.9,11.8c-7.38,4.26-15.9,7.54-25.57,9.83l-53.11,5.9c-2.95-.33-5.57-1.64-7.87-3.93v-35.4ZM524.68,359.95h86.54c2.29.82,3.6,2.78,3.93,5.9l-90.48,1.97v-7.87ZM540.41,251.77h86.54v25.57c-.66,9.51-2.62,20-5.9,31.47l-84.58,1.97c.16-6.72,1.47-13.93,3.93-21.64v-37.37Z"/>
                        <path className="cls-1" d="M639.74,5.9h188.82c2.62,13.28,3.93,27.7,3.93,43.27l-1.97,25.57-49.17,1.97v98.35c-.33,2.79-1.64,5.41-3.93,7.87-7.38-1.8-14.59-4.43-21.64-7.87l-9.83,7.87h-47.21l-7.87-1.97v-104.25l-51.14-1.97V5.9ZM698.75,184.89h88.51l1.97,5.9v29.5l-29.5,3.93h-13.77v15.74l27.54,3.93-7.87,21.64c8.85.98,14.1,6.23,15.74,15.74v25.57h-7.87c-2.62,7.05-4.59,14.92-5.9,23.6v9.83h-21.64l-55.07,7.87c-4.92-6.23-7.54-14.09-7.87-23.6v-62.94c.16-8.69,1.48-17.86,3.93-27.54l3.93-27.54,29.5-1.97,3.93,27.54c-5.08,6.07-7.71,13.93-7.87,23.6l-1.97,29.5c5.57,4.76,12.79,7.38,21.64,7.87,2.78,7.71,4.75,16.23,5.9,25.57l11.8,1.97v-35.4h-11.8c-7.38-1.97-11.97-7.21-13.77-15.74l-1.97-31.47c2.78-7.05,4.75-14.91,5.9-23.6v-17.7h-33.44v-11.8ZM773.49,338.31h13.77v25.57l-1.97,5.9-11.8,1.97v-33.44Z"/>
                        <path className="cls-1" d="M844.55,338.56h31.47v21.64h-9.84c-6.56,1.31-13.12,3.93-19.67,7.87l-1.97-29.5ZM846.51,281.52h29.5v45.24h-29.5v-45.24ZM854.38,6.15h158.09v3.93h1.97l-1.97,9.83v55.07h-55.81c-8.85.49-14.1,5.74-15.74,15.74v33.44c4.92,6.23,12.13,9.51,21.64,9.84l42.04,1.97,3.93,29.5v33.44c-9.18,1.31-23.85,1.97-44.01,1.97h-21.64c-.98,1.97-1.64,4.59-1.97,7.87l3.93,19.67h-9.84l-5.9,5.9h-15.74v74.74h-31.47v-41.31l-27.54-3.93c-1.31-9.18-1.97-19.67-1.97-31.47V12.05l1.97-5.9ZM862.25,371.99h25.57v9.84h-25.57v-9.84ZM881.92,320.85h29.5v9.83h11.8v29.5c-9.34-3.28-19.83-5.9-31.47-7.87h-9.84v-31.47ZM921.26,252.01c6.72,4.43,10.65,11.64,11.8,21.64h15.74v74.74l1.97,5.9-1.97,1.97c-4.43.82-9.67,1.48-15.74,1.97v-39.34h-9.84l-1.97-66.88ZM923.22,371.99h11.8c-2.62,4.59-6.56,7.87-11.8,9.84v-9.84ZM935.02,246.11h17.7v21.64h-17.7v-21.64Z"/>
                        <path className="cls-1" d="M1032.39,220.79h66.88c7.87,1.15,13.77,5.08,17.7,11.8h17.7v41.31l-5.9,1.97h-13.77v17.7c-2.46,8.2-8.36,13.44-17.7,15.74l-21.64,9.84h-15.74v-39.34h-9.83v33.44c-8.69,2.79-17.87,4.76-27.54,5.9h-11.8l1.97-19.67c1.15-8.03,5.08-15.24,11.8-21.64l7.87-57.04ZM1018.62,340.77h37.37l1.97,29.5c-.33,1.48-1.64,2.78-3.93,3.93h-37.37l-1.97-7.87,3.93-19.67v-5.9ZM1071.73,4.43h114.08c8.03,4.1,13.28,11.31,15.74,21.64l3.93,33.44c.98,9.18,2.95,19.67,5.9,31.47l23.6,157.35h-62.94v57.04l-19.67,3.93v-15.74l-7.87-29.5v-37.37l3.93-19.67-7.87-80.64-3.93-19.67-11.8,100.31h-82.61l1.97-5.9,13.77-98.35c.33-9.67,1.64-20.81,3.93-33.44l3.93-33.44c.98-9.18,2.95-19.67,5.9-31.47ZM1093.36,319.13h21.64v35.4c-2.79,3.44-6.72,6.06-11.8,7.87v-11.8h-25.57c-1.15,7.54-3.12,15.4-5.9,23.6-1.8-7.05-3.12-14.92-3.93-23.6,4.1-6.39,10.65-9.67,19.67-9.84,2.79-6.88,4.75-14.09,5.9-21.64ZM1081.56,368.31h27.54c-1.64,5.08-4.26,10.33-7.87,15.74-5.9,3.77-12.46,6.39-19.67,7.87v-23.6ZM1118.93,285.7h19.67v17.7h-19.67v-17.7ZM1160.24,319.13h11.8v29.5h-9.84l-1.97-29.5ZM1175.97,273.89h60.97l1.97,5.9,7.87,49.17c-.66,2.3-1.97,4.26-3.93,5.9-9.34,0-19.18-1.31-29.5-3.93l-29.5,3.93h-7.87v-60.97ZM1175.97,344.7h21.64v29.5h-21.64v-29.5ZM1213.34,344.7h25.57c7.87.66,13.11,4.59,15.74,11.8l1.97,13.77-5.9,3.93h-25.57c-2.46,5.41-5.74,10.65-9.84,15.74-6.56-3.93-9.83-9.83-9.83-17.7l7.87-17.7-7.87-7.87,7.87-1.97Z"/>
                        <path className="cls-1" d="M1263.26,267.01l138.18,1.97c6.55,1.15,12.45,3.12,17.7,5.9l-45.73,3.93h-41.31v60.98h-17.7c-2.79-7.7-4.76-16.23-5.9-25.57-2.62,6.88-4.59,14.1-5.9,21.64l-29.5,1.97c-8.52-.82-13.77-6.06-15.74-15.74,2.46-7.7,4.42-16.23,5.9-25.57v-29.5ZM1265.22,5.41h86.54l1.97,5.9-1.97,17.7v188.82h-66.88c-6.39,2.62-9.67,7.87-9.84,15.74v11.8h13.77v-19.67h66.88c6.39,4.1,9.67,10.66,9.83,19.67l-17.7,11.8h-84.58V30.98l1.97-25.57ZM1336.03,318.15h17.7v39.34h-17.7v-39.34ZM1339.96,282.74h87.04c2.46,9.34,3.77,19.84,3.93,31.47v25.57l-1.97,5.9-71.3,1.97v-39.34h-17.7v-25.57Z"/>
                        <path className="cls-1" d="M1459.46,267.01l138.18,1.97c6.55,1.15,12.45,3.12,17.7,5.9l-45.73,3.93h-41.31v60.98h-17.7c-2.79-7.7-4.76-16.23-5.9-25.57-2.62,6.88-4.59,14.1-5.9,21.64l-29.5,1.97c-8.52-.82-13.77-6.06-15.74-15.74,2.46-7.7,4.42-16.23,5.9-25.57v-29.5ZM1461.42,5.41h86.54l1.97,5.9-1.97,17.7v188.82h-66.88c-6.39,2.62-9.67,7.87-9.84,15.74v11.8h13.77v-19.67h66.88c6.39,4.1,9.67,10.66,9.83,19.67l-17.7,11.8h-84.58V30.98l1.97-25.57ZM1532.23,318.15h17.7v39.34h-17.7v-39.34ZM1536.16,282.74h87.04c2.46,9.34,3.77,19.84,3.93,31.47v25.57l-1.97,5.9-71.3,1.97v-39.34h-17.7v-25.57Z"/>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <a id='brand-back' href='/superze' className="nav-item d-flex justify-content-center" style={{ width: '5rem' }}>
                <img
                  id={'brandSuperZe'}
                  src={imageSrc}
                  alt="SuperZe Logo"
                  className=' nav-link'
                  onMouseEnter={() => setImageSrc("/SuperZe-IV/SVG/Prancheta 5logoVetor.svg")} // Muda a imagem ao passar o mouse
                  onMouseLeave={() => setImageSrc("/SuperZe-IV/SVG/SuperZe2_1logoVetor.svg")} // Volta ao normal ao sair
                  style={{
                    transition: "opacity 0.5s ease-in-out", // Adiciona a transição
                    opacity: 1, // Começa visível
                  }}
                />
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
