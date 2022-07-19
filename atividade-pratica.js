function numigual(num1, num2) {
    if (!num1 || !num2) {
        return 'Defina dois números!';
    } else if (num1 === num2) {
        return "Os números " + num1 + " e " + num2 + " são iguais.";
    } else {
        const s = `Os números ${num1} e ${num2} não são iguais.`;
        return s;
    }
}

function somar(num1, num2) {
    var dez = 'menor',
        vinte = 'menor';
    const soma = num1 + num2;
    if (soma > 20) {
        dez = 'maior';
        vinte = 'maior';
        return "Sua soma é " + soma + ", que é " + dez + " do que 10 e " + vinte + " do que 20.";
    } else if (soma > 10 && soma < 20) {
        dez = 'maior';
        vinte = 'menor';
        return "Sua soma é " + soma + ", que é " + dez + " do que 10 e " + vinte + " do que 20.";
    } else if (soma < 10) {
        dez = 'menor';
        vinte = 'menor';
        return "Sua soma é " + soma + ", que é " + dez + " do que 10 e " + vinte + " do que 20.";
    }
}

const entrada = require('Prompt-Sync')({ sigint: true });

let num1, num2;
num1 = parseFloat(entrada("Digite o primeiro número: "));
num2 = parseFloat(entrada("Digite o segundo número: "));

numigual(num1, num2);
somar(num1, num2);

console.log("" + numigual(num1, num2) + " " + somar(num1, num2));