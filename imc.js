
let calcular = document.getElementById('calcular');

function imc() {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    
    if (nome.value != '', altura != '', peso != '') {

        let valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal, parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'acima do peso..';
        } else if (valorIMC < 35) {
            classificacao = 'Obesidade Grau I, cuidado.';
        } else if (valorIMC > 40) {
            classificacao = 'igual a Thaís Carla.';
        }
        resultado.textContent = `${nome}, seu IMC é ${valorIMC}, você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }

}
    
calcular.addEventListener('click', imc);