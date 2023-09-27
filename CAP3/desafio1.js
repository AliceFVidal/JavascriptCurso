

class Carro {

    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca =  marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGasto(distanciaEmKM, precoCombustivel) {
        return (distanciaEmKM * this.gastoMedio * precoCombustivel)
    }

}


const uno = new Carro('Fiat', 'Vermelho', 1/12);
const palio = new Carro('Fiat', 'Preto', 1/10)
console.log(uno.calcularGasto(70, 5));
console.log(palio.calcularGasto(70, 5));






