
// % = resto da divisão

const numero = 15;
const isNumeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0){
    console.log('número inválido');
} else if (isNumeroDivisivelPor5) {
    console.log('sim');
} else {
    console.log('nao');
}

