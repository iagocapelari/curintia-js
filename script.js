const imagem = document.getElementById('imagem')

const botao1 = document.getElementById('botao1')
const botao2 = document.getElementById('botao2')
const botao3 = document.getElementById('botao3')
const botao4 = document.getElementById('botao4')
const botao5 = document.getElementById('botao5')
const botao6 = document.getElementById('botao6')

function trocarimagem(img){
    imagem.src = img;
}

botao1.addEventListener('click', function(){
    trocarimagem('imagem11.jpeg');
})

botao2.addEventListener('click', function(){
    trocarimagem('imagem12.jpeg');
})

botao3.addEventListener('click', function(){
    trocarimagem('imagem13.jpeg')
})
botao4.addEventListener('click', function(){
    trocarimagem('imagem14.jpeg')
})
botao5.addEventListener('click', function(){
    trocarimagem('imagem15.jpeg')
})
botao6.addEventListener('click', function(){
    trocarimagem('imagem16.jpeg')
})