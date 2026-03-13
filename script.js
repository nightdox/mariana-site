document.addEventListener("DOMContentLoaded", () => {

const botao = document.getElementById("botao-abrir")
const tela1 = document.getElementById("tela-inicial")
const tela2 = document.getElementById("tela-mensagem")
const musica = document.getElementById("musica-fundo")
const texto = document.getElementById("texto")

const mensagem = `Eu pensei muito em tudo que aconteceu entre nós.

E quanto mais eu penso,
mais eu percebo o quanto me arrependo
de tudo que te machucou ou te afastou de mim.

Eu me lamento de verdade por tudo que aconteceu.
Se eu pudesse voltar no tempo,
eu faria muitas coisas diferentes,
minha intenção nunca foi te magoar...

Você é uma das pessoas mais especiais
que já passaram pela minha vida.

Eu amo muito a sua amizade.
Amo quem você é.
Amo tudo que você representa para mim.

A última coisa que eu quero
é que a gente vire dois estranhos
que um dia já significaram tudo um para o outro.

Eu queria muito que, de alguma forma,
a gente pudesse voltar a ser
o que éramos no começo.

Eu faria o que fosse possível
para ter isso de volta.

Porque você é a pessoa mais especial
que eu já tive na minha vida.

Tudo que eu quero
é ver você sorrindo de novo.

Quero ver você feliz,
sendo você mesma,
como sempre foi.

Eu prometo que vou me esforçar todos os dias
para ser alguém melhor para você.

Eu realmente não quero te perder.

Com todo carinho,

Gustavo`

function escreverTexto(){

let i = 0

function digitar(){

if(i < mensagem.length){

texto.innerHTML += mensagem.charAt(i)

i++

setTimeout(digitar, 35)

}

}

digitar()

}

botao.addEventListener("click", () => {

musica.volume = 0.35
musica.play().catch(()=>{})

tela1.classList.remove("active")

setTimeout(() => {

tela2.classList.add("active")

escreverTexto()

}, 1000)

})

})
