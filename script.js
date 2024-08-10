/** localizando botões */
const turnOnOff = document.getElementById('turnOnOff');

const lampada = document.getElementById('lampada-');


function lampQuebrada (){
    return lampada.src.indexOf ('quebrada') > -1
}

/** Evento de click para ouvir o click ao clicar no botão ligar */
function ligar() {
    if (!lampQuebrada()){
    lampada.src = './img/ligada.jpg';
}

   /**teste inspecionar */ console.log('ligar')
}


/** Evento de click para ouvir o click ao clicar no botão desligar */
function desligar() {
    if (!lampQuebrada()){
    lampada.src = './img/desligada.jpg';
}
 /**teste inspecionar */ console.log('Desligou')
}

function quebrou(){
    lampada.src = './img/quebrada.jpg';
}

function lampadaLigarDesligar(){
    if (turnOnOff.textContent == 'Ligar'){
        ligar();
        turnOnOff.textContent = 'Desligar';
    } else{
        desligar();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener('click', lampadaLigarDesligar);


/**evento de passar mouse em cima da lampada, ligar e desligar */
lampada.addEventListener('mouseover', ligar);
lampada.addEventListener('mouseleave', desligar);
lampada.addEventListener('dblclick', quebrou);


