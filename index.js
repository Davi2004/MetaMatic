const { select, input } = require('@inquirer/prompts') // Importando o módulo require da biblioteca inquirer 

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:" })

    if ( meta.length == 0){
        console.log("A meta não pode estar vazia.")
        return
    }

    metas.push(
        { value: meta, checked: false }
    )
    
}

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
                await cadastrarMeta()
                console.log(metas)
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