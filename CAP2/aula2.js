

function escrevaMeuNome (nome) {
    return ('Meu nome é:' + nome);
}

function verificarIdade(idade){
    if (idade >=18){
        console.log(escrevaMeuNome('Alice') + 'maior');
    } else {
        console.log(escrevaMeuNome('Alice') + 'menor');
    }
}

verificarIdade(19);