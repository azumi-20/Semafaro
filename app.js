const verde = document.querySelector('.verde')
const red = document.querySelector('.rojo')
const amarillo = document.querySelector('.amarillo')
const botones = document.querySelectorAll('button')

let contador = 1 ;
setInterval(() =>{
        if(contador == 1 && contador<=9){
            red.classList.add('rojo-active')
            verde.classList.remove('blue-active')
        }
        else if(contador >= 10 && contador<=19){
            amarillo.classList.add('amarillo-activo')
            red.classList.remove('rojo-active')
        }
        else if(contador >= 20 && contador <=30){
            verde.classList.add('blue-active')
            amarillo.classList.remove('amarillo-activo')
        }
        contador++;
    
}, 100)