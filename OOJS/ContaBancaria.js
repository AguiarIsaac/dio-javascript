class ContaBancaria {
    constructor(agencia, conta, tipo, saldo) {
        this.agencia = agencia
        this.conta = conta
        this.tipo = tipo
        this._saldo = saldo
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }

    saque(valor) {
        if (valor > this._saldo) {
            return 'Operação negada. Saldo insuficiente'
        }
        this._saldo = this._saldo - valor

        return `Saque de R$ ${valor} realizado! Saldo restante: R$ ${this._saldo}.`
    }

    deposito(valor) {
        this._saldo = this._saldo + valor
        return `Depósito de R$ ${valor} realizado! Saldo atualizado: R$ ${this._saldo}.`
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, conta, saldo, cartaoCredito) {
        super(agencia, conta, saldo)
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, conta, saldo) {
        super(agencia, conta, saldo)
        this.tipo = 'poupança'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, conta, saldo) {
        super(agencia, conta, saldo)
        this.tipo = 'Universitária'
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operação inválida, limite de saque excedido'
        }

        this._saldo = this._saldo - valor
    }
}
