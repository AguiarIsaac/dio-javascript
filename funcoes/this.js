const PESSOA_1 = {nome: 'Isaac', idade:26}
const PESSOA_2 = {nome: 'Aguiar', idade:30}
const PESSOA_3 = {nome: 'Pereira', idade:18}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(PESSOA_1, 14))
console.log(calculaIdade.apply(PESSOA_2, [20]))
