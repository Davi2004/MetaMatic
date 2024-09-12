const { select, input, checkbox } = require('@inquirer/prompts') // Importando o módulo require da biblioteca inquirer 

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:" })

    if ( meta.length == 0){
        console.log("ALERTA! A meta não pode estar vazia!")
        return
    }

    metas.push(
        { value: meta, checked: false }
    )
    
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa.",
        choices: [...metas],
        instructions: false,
    })

    if (respostas.length == 0) {
        console.log("Nenhuma meta selecionada!")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log('Meta(s) marcadas como concluída(s)')
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        console.log("Não existem metas realizadas!")
        return
    }

    await select({
        message: "Metas Realizadas",
        choices: [...realizadas] // Os três pontinhos, chamados de Spread Operator, pegam o antigo array e joga dentro da variável (realizadas)
    })
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
                    name: "Metas realizadas",
                    value: "realizadas"
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
                break;
            case "listar":
                await listarMetas()
                break;
            case "realizadas":
                await metasRealizadas()
                break;
            case "sair":
                console.log("Até a próxima!")
                return
        }

    }

}

start()