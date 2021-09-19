import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import lenguajes from './assets/img/lenguajes.png';
import proy1 from './assets/img/proy1.png';
import proy2 from './assets/img/proy2.png';
import proy3 from './assets/img/proy3.png';
import jhonlozac from './assets/img/jhon_loza_cuadro.jpg';
import softmovil from './assets/img/softmovil.jpg';
import softweb from './assets/img/softweb.jpg';
import softpc from './assets/img/softpc.jpg';
import trabajar from './assets/img/trabajar.jpg';


interface AppProps {}

function App({}: AppProps) {
  
  // Create the count state.

  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div>
      <div className="navbar-fixed ">
        <nav className="navegador">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div className="nav-wrapper center">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="#servicios-mi">Servicios</a></li>
              <li><a href="#sobre-mi">Sobre mi</a></li>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#galeria-proy">Galeria</a></li>
              <li><a href="#contactame">Contactame</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios-mi">Servicios</a></li>
        <li><a href="#sobre-mi">Sobre mi</a></li>
        <li><a href="#galeria-proy">Galeria</a></li>
        <li><a href="#contactame">Contactame</a></li>
      </ul>
      <div className="col s12 m12 l12 xl12" id="inicio">
        <section className="banner">
          <video muted autoPlay loop src="https://i.imgur.com/294juyO.mp4" className="video-section"></video>
          <div className="banner-section">
            <div className="banner-content">
            <h2><b className="banner-letras sombra-letra"> Buscas soluciones web o movil</b></h2>
            <h4><b className="banner-letras">Desarrolla tus aplicaciones web y/o móviles de forma sencilla, llamativa y multifuncional</b></h4>
            <h4><b className="banner-letras">Tus proyectos a precios accesibles</b></h4>
            </div>
          </div>
        </section>
      </div>
      <div className="col s12 m12 l12 xl12 center servicios" id="servicios-mi">
        <h1>Nuestro servicio</h1>
        <h5>Ofrezco soluciones rápidas y económicas para que puedas unirte al mundo online.</h5>
        <h5>Exprésanos tu idea y la haremos realidad por ti para la plataforma que desees incursionar.</h5>
        <br />
        <div className="row s12 m12 l12 xl12 center especialidades">
          <div className="col s12 m4 l4 xl4 seccion1 center">
            <h4>Software de Escritorio</h4>
            <br />
            <img src={softpc} width="55%"/>
            <br />
            <p className="parrafo1">Software para empresas o negocios personales. Usamos las mejores tecnologías de desarrollo para realizar un excelente producto.</p>
          </div>
          <div className="col s12 m4 l4 xl4 seccion2 center">
            <h4>Software Web</h4>
            <br />
            <img src={softweb} width="55%"/>
            <br />
            <p className="parrafo1">Sitios webs interactivos, seguros y adaptables para que se pueden visualizar correctamente en smartphones, tabletas o computadoras.</p>
          </div>
          <div className="col s12 m4 l4 xl4 seccion3 center">
            <h4>Software Móvil</h4>
            <br />
            <img src={softmovil} width="50%"/>
            <br />
            <br />
            <p className="parrafo1">Diseñamos y desarrollamos aplicaciones móviles nativas o híbridas compatibles en todos los dispositivos: iPhone, iPad y Smartphones.</p>
            
          </div>
          
        </div>
      </div>
      <div className="row s12 m12 l12 xl12 center">
        <div className="col s12 m3 l3 xl3 imagen-perfil" id="sobre-mi">
          <div className="center">
            <img src={jhonlozac} className="foto-perfil" alt="jhon_loza_cuadro.jpg" />
          </div>
          <div className="center nombre">
            <h3><b> Jhon Loza</b></h3>
          </div>
          <div className="center titulo">
            <h5>Ing. en Sistemas</h5>
          </div>
          <div className="center correo">
            <h5>jloza.09@gmail.com</h5>
          </div>
        </div>
        <div className="col s12 m9 l9 xl9 acerca">
          <h2>Acerca de mi</h2>
          <p className="parrafo1">Hola, me llamo Jhon Loza, soy ingeniero en sistemas, freelancer en desarrollo de aplicaciones de escritorio, weby moviles, me especializo en desarrollo con lenguaje de programacion libre como PHP, Javascript, Python, Java asi mismo de aplicaciones basadas en .NET Core y para aplicaciones moviles Nativas con Angular e hibridas con Ionic y flutter</p>
          <div className="row center">
            <div className="col s12 m6 l6 xl6">
              <h3>Mis habilidades</h3>
              <p className="parrafo2">Diseñamos tus proyectos utilizando herramientas de software libre para reducir los costos de produccion y elaboracion, siguiendo objetivos amigables con estrategia simple para tu negocio o para tu perfil profesional</p>
            </div>
            <div className="col s12 m6 l6 xl6">
              <img src={lenguajes} className="lenguajes"/>
            </div>
          </div>
          <div></div>
          <div className="row center">
            <div className="col s12 m6 l6 xl6 sec-img1">
              <img src={trabajar} className="imagen1"/>
            </div>
            <div className="col s12 m6 l6 xl6">
              <h3>Sobre mi trabajo</h3>
              <p className="parrafo2">Realizo el trabajo que necesites para la plataforma que mas se adapte para tu negocio, con experiencia en los lenguajes de programacion "PHP, C++, C#, Java, Python, Javascript y dart" asi como frameworks adjuntos como "Node, React, Flutter, jQuery y mas" de igual manera el manejo de bases de datos relacionales y no relacionales.</p>
            </div>
            <div className="col s12 m6 l6 xl6 sec-img2">
              <img src={trabajar} className="imagen2"/>
            </div>
          </div>
        </div>
      </div>
      <div className="row s12 m12 l12 xl12 center">
        
        <h2 id="galeria-proy">Mi experiencia como desarrolador</h2>
        <h4>Descubra mis trabajos publicados en linea a travez de la galeria</h4>
        {/* Card Pagina 1 */}
        <div className="col s12 m6 l3 xl3">
          <div className="card">
            <div className="card-image ">
              <a href="https://uvirtual.unach.edu.ec/ifth/" target="_blank">
                <img src={proy1} className="imagen-galeria"/>
              </a>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>Unach -IFTH</h5>
                <p>Pagina elaborada con .NET para la gestion de estudiantes con beneficios en la UNACH</p>
              </div>
              <div className="card-action">
                <a href="https://uvirtual.unach.edu.ec/ifth/" target="_blank">Revisa la pagina aqui.</a>
              </div>
            </div>
          </div>
        </div>

        {/* Card Pagina 2 */}
        <div className="col s12 m6 l3 xl3">
          <div className="card">
            <div className="card-image ">
              <a href="http://riodevops.com/" target="_blank">
                <img src={proy2} className="imagen-galeria"/>
              </a>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>Rio-Dev-Ops</h5>
                <p>Pagina elaborada con Python y Odoo para la gestion de la micro empresa en la ciudad de riobamba.</p>
              </div>
              <div className="card-action">
              <a href="http://riodevops.com/" target="_blank">Revisa la pagina aqui.</a>
              </div>
            </div>
          </div>
        </div>

        {/* Card Pagina 3 */}
        <div className="col s12 m6 l3 xl3">
          <div className="card">
            <div className="card-image ">
              <a href="http://kilariwow.ddns.net/" target="_blank">
                <img src={proy3} className="imagen-galeria"/>
              </a>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>Kilari-WoW Project</h5>
                <p>Pagina elaborada en Laravel para administracion y publicacion de un servidor de videojuegos publico.</p>
              </div>
              <div className="card-action">
              <a href="http://kilariwow.ddns.net/" target="_blank">Revisa la pagina aqui.</a>
              </div>
            </div>
          </div>
        </div>

        {/* Card Pagina 4 */}{/*
        <div className="col s12 m6 l3 xl3">
          <div className="card">
            <div className="card-image ">
              <a href="http://riodevops.com/" target="_blank">
                <img src={proy2} className="imagen-galeria"/>
              </a>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>Rio-Dev-Ops</h5>
                <p>Pagina elaborada con Python y Odoo para la gestion de la micro empresa en la ciudad de riobamba.</p>
              </div>
              <div className="card-action">
              <a href="http://riodevops.com/" target="_blank">Revisa la pagina aqui.</a>
              </div>
            </div>
          </div>
        </div>
        */}
        
      </div>
    </div>
  );
}

export default App;
