const d = document,
      w = window

export default function responsiveTester(from){
    
    const $from = d.getElementById(from)

    let tester

    d.addEventListener('submit', (e) => {
        
        if(e.target === $from){
            e.preventDefault()
            tester = w.open($from.direccion.value,
                           'tester',
                           `innerWidth= ${$from.ancho.value},
                            innerHeight= ${$from.alto.value}`)
        }
    })

    d.addEventListener('click', (e) => {
        if(e.target === $from.cerrar) tester.close()
    })
}