const d = document

export default function searchFilter(input, selector){

    const $two = d.getElementById('two')
       d.addEventListener('keyup', (e) => {

           if(e.target.matches(input)){

            if(e.key === 'Escape' || e.key === 'Enter') e.target.value = ''

            d.querySelectorAll(selector).forEach( el =>
                el.textContent.toLowerCase().includes(e.target.value)
                ? el.classList.remove('filter')
                : el.classList.add('filter'))
                  
           }
       })


       /*d.addEventListener('keyup', (e) => {
        
        if(e.target.matches(input)){

            if(e.key === 'Escape' || e.key === 'Enter') e.target.value = ''
            d.querySelectorAll(selector).forEach((el) => {
                if(el.textContent.toLowerCase().includes(e.target.value)){
                    el.classList.remove('filter')
                }else{
                    el.classList.add('filter')
                    $two.insertAdjacentText('afterbegin', 'Elemento no existe')
                }
            })
        }
       })*/
}