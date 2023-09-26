const preco = 100;
const metodo = 2;

const descontodebito = preco * 0.10;
const descontodinpix = preco * 0.15;
const juros = preco * 0.10;

if (metodo == 1){
    console.log('Valor total:', preco - descontodebito);
} else if (metodo == 2 ){
    console.log('Valor total:', preco - descontodinpix);
} else if (metodo == 3){
    console.log('Valor total:', preco);
} else {
    console.log('Valor total', preco + juros);
}

