import hamburgerMenu from './hamburger.js'
import { digitalClock } from './clock.js'
import { shortcuts } from './teclado.js'
import countdown from './cuenta_regresiva.js' 
import scrollTop from './button_scroll.js'
import darkTheme from './theme_dark.js'
import responsiveMedia from './objeto_responsive.js'
import responsiveTester from './prueba_responsive.js'
import userDevice from './deteccion_dispositivos.js'
import network from './deteccion_red.js'
import webCam from './deteccion_webcam.js'
import getGeolocalizacion from './geolocalizacion.js'
import searchFilter from './filtro_busqueda.js'
import draw from './sorteo_digital.js'
import slider from './slider_responsive.js'
import scrollSpy from './scroll_spia.js'
import smartVideo from './video_inteligente.js'
import contactFormVlida from './validacion_formulario.js'
import narrador from './narrador.js'

const d = document

d.addEventListener('DOMContentLoaded', (e)=> {
    
    hamburgerMenu('.panel-btn', '#aside', '#aside a')
    digitalClock('.reloj', '.act', '.desact')
    countdown('#countdown', 'January 08, 2021 07:00:00', 'Feliz cumpleaños mi amor')
    scrollTop('.scroll-top-btn')
    responsiveMedia('youTube', '(min-width: 1024px)', `<a href='https://youtu.be/0XElmYomloA' target='_black'>Ver video</a>`, `<iframe width="400" height="350" src="https://www.youtube.com/embed/0XElmYomloA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    responsiveMedia('maps', '(min-width: 1024px)', `<a href='https://goo.gl/maps/whUnt1jkcoH1s1aeA' target='_black'>Ver maps</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53293.0132119099!2d-70.5442840340013!3d-33.40203406305011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ceb46835b925%3A0xcd3927b10fbcf564!2sAlto%20Las%20Condes!5e0!3m2!1ses-419!2scl!4v1598566647734!5m2!1ses-419!2scl" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`)
    responsiveTester('responsive-tester')
    userDevice('user-device')
    webCam('webcam')
    getGeolocalizacion('geoLocalizacion')
    searchFilter('.card-filter', '.card')
    draw('#winner', '.player')
    slider()
    scrollSpy()
    smartVideo()
    contactFormVlida()
    
})

d.addEventListener('keydown', (e) => {
    
    shortcuts(e)
    
})

darkTheme('.dark-theme-btn', 'dark-mode')
network()
narrador()