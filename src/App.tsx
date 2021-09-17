import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import lenguajes from './assets/img/lenguajes.png';
import jhonlozac from './assets/img/jhon_loza_cuadro.jpg';

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
          <video muted autoPlay loop src="https://imgur.com/h70nk3O.mp4" className="video-section"></video>
          <div className="banner-section">
            <div className="banner-content">
            <h2>Buscas soluciones web o movil</h2>
            <h4>Desarrolla tus aplicaciones web y/o móviles de forma sencilla, llamativa y multifuncional</h4>
            <h4>Tus proyectos a precios accesibles</h4>
            </div>
          </div>
        </section>
      </div>
      <div className="col s12 m12 l12 xl12 center servicios" id="servicios-mi">
        <h1>Nuestro servicio</h1>
        <h5>Ofrecemos soluciones rápidas y económicas para que puedas unirte al mundo online.</h5>
        <h5>Exprésanos tu idea y la haremos realidad por ti para la plataforma que desees incursionar.</h5>
        <br />
        <div className="row s12 m12 l12 xl12 center especialidades">
          <div className="col s12 m4 l4 xl4 seccion1 center">
            <h4>Software de Escritorio</h4>
            <br />
            <img src="http://riodevops.com/web/image/1523/computador-todo-en-uno-lenovo-aio-c360-19022-MCO20165595628_092014-O-300x300.jpg" width="55%"/>
            <br />
            <p className="parrafo1">Software para empresas o negocios personales. Usamos las mejores tecnologías de desarrollo para realizar un excelente producto.</p>
          </div>
          <div className="col s12 m4 l4 xl4 seccion2 center">
            <h4>Software Web</h4>
            <br />
            <img src="http://riodevops.com/web/image/1524/descargar.jfif" width="55%"/>
            <br />
            <p className="parrafo1">Sitios webs interactivos, seguros y adaptables para que se pueden visualizar correctamente en smartphones, tabletas o computadoras.</p>
          </div>
          <div className="col s12 m4 l4 xl4 seccion3 center">
            <h4>Software Móvil</h4>
            <br />
            <img src="http://riodevops.com/web/image/1526/movil.jpg" width="50%"/>
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
              <img src="https://emprendedoresnews.com/wp-content/uploads/2016/01/trabajar.jpg" className="imagen1"/>
            </div>
            <div className="col s12 m6 l6 xl6">
              <h3>Sobre mi trabajo</h3>
              <p className="parrafo2">Realizo el trabajo que necesites para la plataforma que mas se adapte para tu negocio, con experiencia en los lenguajes de programacion "PHP, C++, C#, Java, Python, Javascript y dart" asi como frameworks adjuntos como "Node, React, Flutter, jQuery y mas" de igual manera el manejo de bases de datos relacionales y no relacionales.</p>
            </div>
            <div className="col s12 m6 l6 xl6 sec-img2">
              <img src="https://emprendedoresnews.com/wp-content/uploads/2016/01/trabajar.jpg" className="imagen2"/>
            </div>
          </div>
        </div>
      </div>
      <div className="row s12 m12 l12 xl12 center">

        

      </div>
    </div>
  );
}

export default App;
