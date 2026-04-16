// Essa função recebe os dados do formulário em um objeto JavaScript
async function cadastrarContato(objetoContato) {
    console.log(objetoContato);

    // Chamar a api com o fetch
    const resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato), // converte o objeto JavaScript em JSON 
        headers: {// Informa para a api que o body está sendo enviado no formato  json
            "Content-Type": "application/json; charset=UTF-8",
        }
    });

    return false;
}

async function buscarEndereco(cep) {
    if (cep.trim().length < 8) {
        // quando o cep não vier preenchido
        alert("O CEP deve ter 8 números");
        return false;
    }

    // busca o CEP lá na ViaCEP
    try {
        aguardarCampos();

        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json()

        console.log(dados); // objeto dados
        console.log(dados.logradouro); // nome da rua
        console.log(dados.bairro); // bairro
        console.log(dados.localidade); // cidade
        console.log(dados.uf); // estado

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;
    } catch (error) {
        console.log(error);
    }
}

function aguardarCampos() {
    document.getElementById("rua").value = "aguarde...";
    document.getElementById("bairro").value = "aguarde...";
    document.getElementById("cidade").value = "aguarde...";
    document.getElementById("estado").value = "aguarde...";
}

async function validarFormulario(event) {
    event.preventDefault()

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let ddi = document.getElementById("ddi").value;
    let ddd = document.getElementById("ddd").value;
    let numero = document.getElementById("numero").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let bloco = document.getElementById("bloco").value;
    let estado = document.getElementById("estado").value;
    let cidade = document.getElementById("cidade").value;
    let bairro = document.getElementById("bairro").value;
    let complemento = document.getElementById("complemento").value;
    let anotacoes = document.getElementById("anotacoes").value;

    let quantidadeErros = 0;

    // Nome
    if (nome.trim().length == 0) {
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    } else {
        reiniciaBorda("nome");
    }

    // Sobrenome
    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    } else {
        reiniciaBorda("sobrenome");
    }


    // Email
    if (email.trim().length == 0) {
        formError("email");
        quantidadeErros++;
        // alert("O campo email é obrigatório!");
    } else {
        reiniciaBorda("email");
    }

    // DDI
    if (ddi.trim().length == 0) {
        formError("ddi");
        quantidadeErros++;
        // alert("O campo ddi é obrigatório!");
    } else {
        reiniciaBorda("ddi");
    }

    // DDD
    if (ddd.trim().length == 0) {
        formError("ddd");
        quantidadeErros++;
        // alert("O campo ddd é obrigatório!");
    } else {
        reiniciaBorda("ddd");
    }

    // Numero
    if (numero.trim().length == 0) {
        formError("numero");
        quantidadeErros++;
        // alert("O campo numero é obrigatório!");
    } else {
        reiniciaBorda("numero");
    }

    // Cep
    if (cep.trim().length == 0) {
        formError("cep");
        quantidadeErros++;
        // alert("O campo cep é obrigatório!");
    } else {
        reiniciaBorda("cep");
    }

    // Rua
    if (rua.trim().length == 0) {
        formError("rua");
        quantidadeErros++;
        // alert("O campo rua é obrigatório!");
    } else {
        reiniciaBorda("rua");
    }

    // NumeroCasa
    if (bloco.trim().length == 0) {
        formError("bloco");
        quantidadeErros++;
        // alert("O campo bloco é obrigatório!");
    } else {
        reiniciaBorda("bloco");
    }

    // Estado
    if (estado.trim().length == 0) {
        formError("estado");
        quantidadeErros++;
        // alert("O campo estado é obrigatório!");
    } else {
        reiniciaBorda("estado");
    }

    // Cidade
    if (cidade.trim().length == 0) {
        formError("cidade");
        quantidadeErros++;
        // alert("O campo cidade é obrigatório!");
    } else {
        reiniciaBorda("cidade");
    }

    // Bairro
    if (bairro.trim().length == 0) {
        formError("bairro");
        quantidadeErros++;
        // alert("O campo bairro é obrigatório!");
    } else {
        reiniciaBorda("bairro");
    }

    // Complemento
    if (complemento.trim().length == 0) {
        formError("complemento");
        quantidadeErros++;
        // alert("O campo complemento é obrigatório!");
    } else {
        reiniciaBorda("complemento");
    }

    // Anotações
    if (anotacoes.trim().length == 0) {
        formError("anotacoes");
        quantidadeErros++;
        // alert("O campo anotacoes é obrigatório!");
    } else {
        reiniciaBorda("anotacoes");
    }

    // Hora cadastrar
    if (quantidadeErros > 0) {
        alert("Preencha todos os campos!");
        quantidadeErros = 0; // Reinicia a contagem
    } else {
        // Gera um objeto com os dados do formulário
        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            ddi: ddi,
            ddd: ddd,
            numero: numero,
            cep: cep,
            rua: rua,
            bloco: bloco,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            complemento: complemento,
            anotacoes: anotacoes
        }

        let cadastro = cadastrarContato(objetoContato);

        reiniciaTodasAsBordas();
    }
}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "";
}

function reiniciaTodasAsBordas() {
    reiniciaBorda("nome");
    reiniciaBorda("sobrenome");
    reiniciaBorda("email");
    reiniciaBorda("ddi");
    reiniciaBorda("ddd");
    reiniciaBorda("numero");
    reiniciaBorda("cep");
    reiniciaBorda("rua");
    reiniciaBorda("bloco");
    reiniciaBorda("estado");
    reiniciaBorda("cidade");
    reiniciaBorda("bairro");
    reiniciaBorda("complemento");
    reiniciaBorda("anotacoes");
}

