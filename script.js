let musicas = [
    {titulo:'Grande é o Senhor', artista:'Adhemar de Campos', src:'./musicas/ADHEMAR DE CAMPOS _ ATO 3 _ 04 _ Grande Ã© o Senhor  _ _IgrejaNaRua(MP3_320K).mp3', img:'./imagens/GrandeÉOSenhor.png'},    
    {titulo:'Eu quero é Deus', artista:'Morada', src:'./musicas/EU QUERO É DEUS _ CELEBRAI A CRISTO _ AQUELE QUE ESTÃ FELIZ _ MORADA (CLIPE OFICIAL)(MP3_320K).mp3', img:'./imagens/EuQueroDeus.png'},   
    {titulo:'Todavia me Alegrarei', artista:'Leandro Soares', src:'./musicas/LEANDRO SOARES - TODAVIA ME ALEGRAREI (CLIPE OFICIAL)(MP3_320K).mp3', img:'./imagens/TodaviaMeAlegrarei.png'},    
    {titulo:'Daniel', artista:'Thalles Roberto', src:'./musicas/Thalles Roberto - Daniel ft. Fernandinho(MP3_320K).mp3', img:'./imagens/Daniel.png'},    
    {titulo:'Ele vem', artista:'Thalles Roberto', src:'./musicas/Thalles Roberto - Ele Vem (Ao Vivo na Bola de Neve BH) (Clipe Oficial)(MP3_320K).mp3', img:'./imagens/EleVem.png'},    
    {titulo:'Vem me buscar', artista:'Jefferson & Suellen', src:'./musicas/VEM ME BUSCAR - JEFFERSON _ SUELLEN (LIVE SESSION - AO VIVO)(MP3_320K).mp3', img:'./imagens/VemBuscar.png'}    
];

// Inicio
let musica = document.querySelector('audio');
let indexMusica = 0;

let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let imagem = document.querySelector('img');
let tempoDecorrido = document.querySelector('.tempo .inicio');
let duracaoMusica = document.querySelector('.tempo .fim');

renderizarMusica(indexMusica);

// Evento

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pararMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = 6;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 6){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});


// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
}

function pararMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSeguntos = segundos % 60;

    if(campoSeguntos < 10){
        campoSeguntos = '0' + campoSeguntos;
    }
    
    return `${campoMinutos}:${campoSeguntos}`;
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

