let alunos = [
    {nome: 'Isaac',nota: 7},
    {nome: 'Aguiar', nota: 5},
    {nome: 'Pereira', nota: 5},
    {nome: 'Chico', nota: 8}
]

const MEDIA = 7

function media( array, media ) {
    let aprovados = []

    for(let i = 0; i < array.length; i++) {
        if (array[i].nota >= media) {
            aprovados.push(array[i])
        }
    }

    return aprovados
}

console.log(media(alunos, MEDIA))
