/* Declaração de variáveis e retorno ao usuário: 

// Hello, Word! ou Olá, mundo! (Piada interna entre os programadores) <-- Exemplo de comentário

let mensagem = "Utilizando variáveis com o Maykão da RocketSeat" 
 
console.log(mensagem);

*/

/*
    // Arrays, Objects:

    // Array:
    let metas = ["Mayk", "Hello"]

    // Formas de concatenação
    console.log(metas[1] + " " + metas[0]) 
    console.log(`${metas[1]} ${metas[0]}`) // Forma que eu prefiro
*/

// Object
let meta = {
    value: 'Ler um livro todo mês',
    address: 2,
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "Não é mais 'ler um livro'! "
meta.log(meta.value)

// Function  // Arrow function:

function criarMetas() {} // Function

const criarMeta = () => {} // Arrow Function