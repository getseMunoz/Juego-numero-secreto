
let numSecreto = 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo=10;

//funcion para mostrar texto en la pagina del juego, el elemento que mostrara el texto y lo que dira el texto
function asginarTextoElemento(elemento, texto){
    let elemtosHTML = document.querySelector(elemento);
    elemtosHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
   let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
   if(numeroDeUsuario == numSecreto){
    asginarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

   }else{
    //el usuario no acerto
    if(numeroDeUsuario > numSecreto){
        asginarTextoElemento('p', `el numero es menor a: ${numeroDeUsuario}`);
    }else{
        asginarTextoElemento('p', `el numero secreto es mayor a: ${numeroDeUsuario} `);
    }
    intentos++;
    vaciarCaja();
   }
    return;
}

function vaciarCaja(){
     document.querySelector('#valorUsuario').value='';
    
}

function generaNumSecreto() {
  let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
  //si el numero generado esta incluido en la lista 
  if(listaNumerosSorteados.length == numeroMaximo){
    asginarTextoElemento('p','Ya se sortearon todos los numeros posibles')
  }else{
  
  if(listaNumerosSorteados.includes(numeroGenerado)){
    return generaNumSecreto();
  }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
     
}

function condicionesIniciales(){
    asginarTextoElemento('h1','Juego del numero secreto');
    asginarTextoElemento('p',`Escriba un numero entre el 1 y ${numeroMaximo}`);
    numSecreto = generaNumSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar la caja
    vaciarCaja();
    //indicar mensaje de intervalo de numero
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
