/* Declaração de variáveis e retorno ao usuário: 

// Hello, Word! ou Olá, mundo! (Piada interna entre os programadores) <-- Exemplo de comentário

let mensagem = "Utilizando variáveis com o Maykão da RocketSeat" 
 
console.log(mensagem);

*/

/* Estrutura de dados (Array, Object & functions)
    
    // Arrays, Objects:

    // Array:
    let metas = ["Mayk", "Hello"]

    // Formas de concatenação
    console.log(metas[1] + " " + metas[0]) 
    console.log(`${metas[1]} ${metas[0]}`) // Forma que eu prefiro
    
    // Object
    let meta = {
        value: 'Ler um livro todo mês',
        checked: true,
    }

    let metas = [
        meta,
        {
            value: "Caminhar 20 minutos todos os dias",
            checked: false
        }
    ]

    console.log(metas[1].value)

    // Function  // Arrow function:

    function criarMetas() {} // Function

    const criarMeta = () => {} // Arrow Function

*/

/* Estrutura de repetição: 

    While:

    const start = () => {
        let count = 0
        while (count <= 10) {
            console.log(count)
            count ++
        }
    }

    start()

*/

/* Controle de Fluxo

    Switch:

    const start = () => {

        while (true) {

            let opcao = "cadastrar"
            switch(opcao) {
                case "cadastrar":
                    console.log("Vamos cadastrar")
                    break;
                case "listar":
                    console.log("Vamos listar")
                    break;
                case "sair":
                    return
            }

        }
    
    }

    start()
    
*/