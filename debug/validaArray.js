function testErros(arr, size){
    try{
        if(!arr && !size) throw new ReferenceError('Parâmetros vazios');

        if(typeof arr !== 'object') throw new TypeError('Primeiro parâmetro não é um objeto válido');
    
        if(typeof size !== 'number') throw new TypeError('Segundo parâmetro não é um número válido');
    
        if(arr.length !== size) throw new RangeError('Tamanho do array não é igual ao segundo parâmetro');
        
        return arr
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log('ReferenceError')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('TypeError')
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log('RangeError')
            console.log(e.message)
        } else {
            console.log('erro não esperado')
        }
    }
}

testErros()
