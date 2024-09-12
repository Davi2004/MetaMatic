const { select, input, checkbox } = require('@inquirer/prompts') // Importando o módulo require da biblioteca inquirer 

let mensagem = "Bem vindo ao App de Metas!";

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:" })

    if ( meta.length == 0){
        mensagem = "ALERTA! A meta não pode estar vazia!"
        return
    }

    metas.push(
        { value: meta, checked: false }
    )

    mensagem = "Meta cadastrada com sucesso!"
    
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa.",
        choices: [...metas],
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if (respostas.length == 0) {
        mensagem = "Nenhuma meta selecionada!"
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    mensagem = `Meta(s) marcadas como concluída(s)`
    
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if (realizadas.length == 0) {
        mensagem = "Não existem metas realizadas!"
        return
    }

    await select({
        message: `Você possui ${realizadas.length} metas realizadas`,
        choices: [...realizadas] // Os três pontinhos, chamados de Spread Operator, pegam o antigo array e joga dentro da variável (realizadas)
    })
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if (abertas.length == 0) {
        mensagem = "Não existem metas abertas!"
        return
    }

    await select({
        message: `Você possui ${abertas.length} metas abertas`,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false }
    })
    const itensADeletar = await checkbox({
        message: "Selecione um item que deseja excluir.",
        choices: [...metasDesmarcadas],
        instructions: false,
    })

    if (itensADeletar.length == 0) {
        mensagem = "Nenhum item encontrado!"
        return
    }

    itensADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })

    mensagem = "Metas(s) deletada(s) com sucesso"
    
    
}

const mostrarMensagem = () => {
    console.clear();

    if (mensagem != ""){
        console.log(mensagem);
        console.log("");
        mensagem = ""        
    }
}

const start = async () => {

    while (true) {
        mostrarMensagem()

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
                    name: "Metas abertas",
                    value: "abertas"
                },

                {
                    name: "Deletar metas",
                    value: "deletar"
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
            case "abertas":
                await metasAbertas()
                break;
            case "deletar":
                await deletarMetas()
                break;
            case "sair":
                console.log("Até a próxima!")
                return
        }

    }

}

start()