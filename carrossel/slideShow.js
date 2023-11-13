/**
 * Simples corrossel de imagens
 * @author Gabriela Gomes da Silva
 */

/*              [0]            [1]          [2]     */
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
console.log(slides[0])
/*
console.log(slides[0]
console.log(slides.length
*/

/*usar o proprio JS para chamar a função*/
let intervalo = 3000
let indice = 0 /*ir trocando as imagens*/

//executar a função dentro do arquivo slideShow.js
show()

function show() {
    //adicionar efeito de transição (classe FadeOut do CSS no HTML)
    document.getElementById("slide").className += "FadeOut" //começa desaparecendo
    //nova função anonima para alternar FadeOut a cada 1 segundo
    setTimeout(function () {
        document.getElementById("slide").src = (`img/${slides[indice]}`)
        document.getElementById("slide").className = "" /*No HTML remove a classe FadeOut*/ 
    }, 1000)

    indice++
    if (indice === 3) {
        indice = 0
    }
    //trocar o slide a cada 3 segundos 
    setTimeout(show, intervalo)
}