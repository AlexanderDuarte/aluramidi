const listaTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);


    if (elemento === null) {
        console.log('Elemento não encontrado!');
    }else if (elemento != null && elemento.localName === 'audio') {

        elemento.play();
    } else {
        console.log('Elemento não é Áudio');

    }





}

for (let i = 0; i < listaTeclas.length; i++) {

    const tecla = listaTeclas[i];
    const idAudio = `#som_${tecla.classList[1]}`;
    tecla.onclick = function () {

        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {

            tocaSom(idAudio);
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }



}

