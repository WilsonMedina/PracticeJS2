const d = document,
      w = window,
      n = navigator

export default function getGeolocalizacion(id){
     
    const $geo = d.getElementById(id),
          options = {
              enableHighAccuracy: true,
              timeOut: 5000,
              maximumAge: 0
          }

    const success = (position) => {
        let coords = position.coords

        $geo.innerHTML = `
        <p>Posicion actual</p>
        <ul style='list-style: none'>
        <li>Latitud: ${coords.latitude}</li>
        <li>Altitud: ${coords.longitude}</li>
        <li>Presicion: ${Math.floor(coords.accuracy)} metros</li>
        </ul>
        <a style='margin-left: 35px' href='https://www.google.com/maps/@${coords.latitude}, 
        ${coords.longitude}, 20z' target='_blank' rel='noopener'>Ir a Google Maps</a>
        `
    }

    const error = (err) => {
        console.log(err)
    }

    n.geolocation.getCurrentPosition(success, error, options) 
    //n.geolocation.watchPosition()  metodo para escuchar cambios en posicion.  
}      