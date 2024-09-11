const { select } = require('@inquirer/prompts') // Importando o módulo require da biblioteca inquirer 

const start = async () => {

    while (true) {

        const opcao = await select({ // O Await faz com que a máquina espere a entrada do usuário para depois continuar.
            message: "Menu >", // Mensagem apresentada ao usuário
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },

                {
                    name: "Listar metas",
                    value: "listar"
                },
                
                {
                    name: "Sair",
                    value: "sair"
                }
            ] // Opções apresentadas ao usuário! OBS: Precisa que seja um array.
        })

        switch(opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar")
                break;
            case "listar":
                console.log("Vamos listar")
                break;
            case "sair":
                console.log("Até a próxima!")
                return
        }

    }

}

start()