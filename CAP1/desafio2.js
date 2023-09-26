

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombulstivel = 'Gasolina';
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

const valorEtanol = litrosConsumidos * precoEtanol
const valorGasolina = litrosConsumidos * precoGasolina

if (tipoCombulstivel === 'Etanol'){
    console.log(valorEtanol);
} else {
    console.log(valorGasolina);
}

