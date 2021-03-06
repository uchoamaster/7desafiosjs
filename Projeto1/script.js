document.body.addEventListener('keyup', (event) => {
    // console.log(event.code);
    // playSound(event.code.toLocaleLowerCase());
    //vindo tudo minusculo atraves da conversao
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    // console.log("Música", song); vendo se ele captura certo o que foi digitado
    if (song !== '') {
        let songArray = song.split(''); // isso vai fazer com que ele gere um array com cada item do elemento 
        // console.log(songArray); verificando o array que eh criado
        playComposition(songArray);
    }

});


function playSound(sound) {

    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    //aqui verifica se o audio elemento é o mesmo selecionado que possui som e aplica o som ao elemento
    if (audioElement) {
        //reseta o tempo do elemento
        audioElement.currentTime = 0;
        audioElement.play();
    }
    //verifica se o elemento existe e atribui a classe active nele, essa classe ja existe no css e deixará com a cor amarela
    if (keyElement) {
        keyElement.classList.add('active');
        //aqui ele vai esperar 300 milisegundos e remover a classe senão ela fica permanente
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}
// aqui fica a logica da parte de composição da música
function playComposition(songArray) {
    let wait = 0;
    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;

    }
}