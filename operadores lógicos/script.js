function operators(valor1, valor2) {
    let operacao1 = ''
    valor1 === valor2 ? operacao1 = `Os valores ${valor1} e ${valor2} são iguais. ` : operacao1 = `Os valores ${valor1} e ${valor2} não são iguais. `
    
    let operacao2 = ''
    if (valor1 + valor2 > 20){
        operacao2 = `Sua soma é ${valor1 + valor2}, que é maior que 10 e maior que 20.`
    } else if (valor1 + valor2 > 10) {
        operacao2 = `Sua soma é ${valor1 + valor2}, que é maior que 10 e menor que 20.`
    } else {
        operacao2 = `Sua soma é ${valor1 + valor2}, que é menor que 10 e menor que 20.`
    }

    return operacao1 + operacao2
}

console.log(operators(19,4))