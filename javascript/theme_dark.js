const d = document,
      ls = localStorage

export default function darkTheme(btn, classDark){

    const $themeBtn = d.querySelector(btn),
           $selectors = d.querySelectorAll('[data-dark]'),
           $next = d.querySelector('#next a')

    let moon = '🌙',
        sun = '☀️'
    
    const lightMode = () => {
        
        $selectors.forEach(e => e.classList.remove(classDark))
        $themeBtn.textContent = moon
        $next.style.color = '#222222'
        ls.setItem('theme', 'light')
    }    
    const darkMode = () => {

        $selectors.forEach(e => e.classList.add(classDark))
        $themeBtn.textContent = sun
        $next.style.color = '#9dd931'
        ls.setItem('theme', 'dark')

    }    

    d.addEventListener('click', (e) => {

        if(e.target.matches(btn)){
            if($themeBtn.textContent === moon){
                darkMode()
            }else{
                lightMode()
            }
        }
    }) 
    
    d.addEventListener('DOMContentLoaded', (e) => {
        if(ls.getItem('theme') === null) ls.setItem('theme', 'light')

        if(ls.getItem('theme') === 'light') lightMode()
        
        if(ls.getItem('theme') === 'dark') darkMode()
    })
}