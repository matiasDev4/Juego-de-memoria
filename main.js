
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let tarjetas_mostrar = 0;
let tarjeta1 = null
let tarjeta2 = null
let resultado1 = null
let resultado2 = null
let movimiento = 0
let aciertos = 0
let tiempo = false
let timer = 30
let puntos = 0
let intervalo_detener = null
let mostrar_acierto = document.getElementById("acierto")
let mostrar_movimiento = document.getElementById('movimiento')
let mostrar_tiempo = document.getElementById('tiempo')
let victoria = document.getElementById('win')
let reintentar = document.getElementById('intentar')
numeros = numeros.sort(()=>{return Math.random()-0.5});


function bloquear(){
    for(let i = 0; i<=15; i++){
        let bloquear_juego = document.getElementById(i);
        bloquear_juego.innerHTML = numeros[i]
        bloquear_juego.disabled = true
    }
}

 function reiniciar(){
    location.reload()
    
 }
function contador_tiempo(){
    intervalo_detener = setInterval(()=>{
        timer--;
        mostrar_tiempo.innerHTML = `${timer}s`
        if(timer == 0){
            clearInterval(intervalo_detener)
            victoria.innerHTML = ' 📢 Derrota '
            victoria.classList.toggle('block')
            victoria.classList.remove('hidden')
            victoria.classList.toggle('bg-red-800')
            victoria.classList.remove('bg-lime-600')
            reintentar.classList.remove('hidden')
            bloquear()

        }
    },1000)
}

function mostrar(id){
    tarjetas_mostrar++;
    if(tiempo == false){
        contador_tiempo()
        tiempo = true
    }

    if(tarjetas_mostrar == 1){
        tarjeta1 = document.getElementById(id)
        resultado1 = numeros[id]
        tarjeta1.innerHTML = resultado1
        
        tarjeta1.disabled = true;
    }
    else if(tarjetas_mostrar == 2){
        tarjeta2 = document.getElementById(id)
        resultado2 = numeros[id]
        tarjeta2.innerHTML = resultado2
        tarjeta2.disabled = true;
        movimiento++;
        mostrar_movimiento.innerHTML = movimiento

        if(resultado1 == resultado2){
            tarjetas_mostrar = 0
    
            aciertos++;
            mostrar_acierto.innerHTML = aciertos
            if(aciertos == 8){
                victoria.classList.toggle('block')
                victoria.classList.remove('hidden')
                clearInterval(intervalo_detener)
            }
        }
        else{
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetas_mostrar = 0;
            },700)
        }
    }
}

