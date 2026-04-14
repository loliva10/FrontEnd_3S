function validarFormulario(event){
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

    let quantidadeErros = 0;

    // Nome
    if(nome.trim().length == 0) {
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    } else {
        reiniciaBorda("nome");
    }

    // Sobrenome
    if(sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    } else {
        reiniciaBorda("sobrenome");
    }

    // Email
    if(email.trim().length == 0) {
        formError("email");
        quantidadeErros++;
        // alert("O campo email é obrigatório!");
    } else {
        reiniciaBorda("email");
    }

    // DDI
    if(ddi.trim().length == 0) {
        formError("ddi");
        quantidadeErros++;
        // alert("O campo DDI é obrigatório!");
    } else {
        reiniciaBorda("ddi");
    }

    // DDD
    if(ddd.trim().length == 0) {
        formError("ddd");
        quantidadeErros++;
        // alert("O campo ddd é obrigatório!");
    } else {
        reiniciaBorda("ddd");
    }

    // Numero
    if(numero.trim().length == 0) {
        formError("numero");
        quantidadeErros++;
        // alert("O campo numero é obrigatório!");
    } else {
        reiniciaBorda("numero");
    }

    // Cep
    if(cep.trim().length == 0) {
        formError("cep");
        quantidadeErros++;
        // alert("O campo cep é obrigatório!");
    } else {
        reiniciaBorda("cep");
    }

    // Rua
    if(rua.trim().length == 0) {
        formError("rua");
        quantidadeErros++;
        // alert("O campo rua é obrigatório!");
    } else {
        reiniciaBorda("rua");
    }

    // NumeroCasa
    if(bloco.trim().length == 0) {
        formError("bloco");
        quantidadeErros++;
        // alert("O campo bloco é obrigatório!");
    } else {
        reiniciaBorda("bloco");
    }

    // Estado
    if(estado.trim().length == 0) {
        formError("estado");
        quantidadeErros++;
        // alert("O campo estado é obrigatório!");
    } else {
        reiniciaBorda("estado");
    }

    // Cidade
    if(cidade.trim().length == 0) {
        formError("cidade");
        quantidadeErros++;
        // alert("O campo cidade é obrigatório!");
    } else {
        reiniciaBorda("cidade");
    }

    // Bairro
    if(bairro.trim().length == 0) {
        formError("bairro");
        quantidadeErros++;
        // alert("O campo bairro é obrigatório!");
    } else {
        reiniciaBorda("bairro");
    }

    // Complemento
    if(complemento.trim().length == 0) {
        formError("complemento");
        quantidadeErros++;
        // alert("O campo complemento é obrigatório!");
    } else {
        reiniciaBorda("complemento");
    }

    if(quantidadeErros > 0){
        alert("Existem " + quantidadeErros + " erros no formulário");
        quantidadeErros = 0;
    } else {
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }

}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}


