/** app health
 * @author Gabriela Gomes
 * https://Joseassis.com.br
 */

let peso, altura, idade, imc, fgm

function calcular() {
    idade = frmIMC.txtIdade.value
    peso = frmIMC.txtPeso.value
    altura = frmIMC.txtAltura.value

    if (frmIMC.txtIdade.value === "") {
        alert("Preencha a idade ! ")
        frmIMC.txtIdadefocus()
   
    } else if (frmIMC.txtPeso.value === "") {
        alert("Preencha o peso! ")
        frmIMC.txtPesofocus() 

    } else if (frmIMC.txtAltura.value === "") {
        alert("Preencha a Altura! ")
        frmIMC.txtAlturafocus() 
    
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o sexo !")
   
    } else if (frmIMC.nivel.value === "") {
        alert("Selecione o nível de atividade")
        frmIMC.nivel.focus()
   
    } else {
        //IMC
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = (`IMC: ${imc.toFixed(2)}`) // getElementById = procura o nome, e o .innerHTML = adiciona

        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "img/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal"
            document.getElementById("grafico").src = "img/normal.png"
        } else if (imc < 30) {
            document.getElementById("status").innerHTML = "Sobrepeso"
            document.getElementById("grafico").src = "img/sobrepeso.png"
        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "Obesidade grau I"
            document.getElementById("grafico").src = "img/obesidade1.png"
        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "Obesidade grau II"
            document.getElementById("grafico").src = "img/obesidade2.png"
        } else {
            document.getElementById("status").innerHTML = "Obesidade severa"
            document.getElementById("grafico").src = "img/obesidadeExtrema.png"
        }
        //FCM - Fórmula de Tanaka
        fcm = 208 - (0.7 * idade)
        document.getElementById("freq").innerHTML = fcm
        //TMB - Fórmula de Harris Benedict
        //variáveis locais para capturar o conteúdo da lista (vetor)
        let select = document.getElementById("atividaes")
        let opcaoValor = Number(select.options[select.selectedIndex].value) //capturando o valor da lista
        let opcao = select.option[select.selectedIndex].text //pega o texto da lista
        // alert(opcao) -> apoio

        //formulas masculino e feminino
        if (document.getElementById("m").checked === true) {
            tmb = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade) ))* opcaoValor
        }
        if (document.getElementById("f").checked === true) {
            tmb = (655 + (9.6 * peso) + (1.8 * (altura * 100) - (4.7 * idade) ))* opcaoValor
        }
        //resultado
        document.getElementById("calorias").innerHTML = tmb.toFixed(2)
    }
    

}

function limpar() {
    document.getElementById("imc").innerHTML = ""
    document.getElementById("status").innerHTML = ""
    document.getElementById("freq").innerHTML = ""
    document.getElementById("grafico").src = "img/reset.png"
}