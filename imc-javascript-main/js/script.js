    async function calcular() {
        // Pegar os valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const altura = parseFloat(document.getElementById("altura").value);
        const peso = parseFloat(document.getElementById("peso").value);

        // Verificar se tem campo sem preencher
        if (nome.length == 0 || isNaN(altura) || isNaN(peso)) {
            alert("Preencha todos os campos!");
            return false;
        }

        console.log("Liberado para cadastrar");

        // Calcular o IMC
        const IMC = calcularIMC(peso, altura);

        // Gerar o texto da situação 
        const situacao = geraSituacao(IMC);

        // Gerar um Objetos JS com os dados 
        const objIMC = {
            nome: nome,
            altura: altura,
            peso: peso,
            IMC: IMC,
            situacao: situacao
        };

        // Cadastrar na API
        const dadosGravados = await cadastrarNaAPI(objIMC);
        console.log(dadosGravados);

        if ("error" in dadosGravados) {
            alert(dadosGravados.error);       
        } else {
            // Mostrar no html (inserir a linha da tabela)
            carregarCadastros();
        }
    } // Fim da função calcular

    async function cadastrarNaAPI(objCadastro) {
        // Fazer um post na API

        try {
            const retorno = await fetch("http://localhost:3000/imc", {
                method: "POST",
                body: JSON.stringify(objCadastro),
                headers: {
                    "Content-Type": "application/json ; charset=UTF-8"
                }
            });

            const dadosGravados = await retorno.json();
            return dadosGravados;
        } catch (error) {
            console.log(error);
            return await {error : "Problemas para gravar na API"};
        }
    } // Fim da função cadastrar na API

    function mostrarNaTela(objCadastro) {
        // Insere uma linha de tabla no HTML
        document.getElementById("cadastro").innerHTML += `
        <tr>
            <td>${objCadastro.nome}</td>
            <td>${objCadastro.altura}</td>  
            <td>${objCadastro.peso}</td>
            <td>${objCadastro.IMC.toFixed(2)}</td>
            <td>${objCadastro.situacao}</td>
        </tr>`;
    } // Fim da função mostrar na Tela

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    } // Fim da função calcular IMC

    async function carregarCadastros() {
        // Carregar os dados no html
        alert("Carregando os dados...");

        // Fazer o fetch
        try {
            const retorno = await fetch("http://localhost:3000/imc");

            const dados = await retorno.json(); // convertendo a resposta para json

            dados.sort( (a, b) => {
                return a.nome.localeCompare(b.nome);
            });

            document.getElementById("cadastro").innerHTML = ""; // limpa a tabela antes de carregar 

            // percorre os dados para cada pessoa 
            dados.forEach(pessoa => {
                mostrarNaTela(pessoa);
            });
        } catch (error) {
            console.log(error);
            alert("Erro ao carregar os dados");       
        }
    }

    //Menor que 16 – Magreza grave;
    //16 a menor que 17 – Magreza moderada;
    //17 a menor que 18,5 – Magreza leve;
    //18,5 a menor que 25 – Saudável;
    //25 a menor que 30 – Sobrepeso;
    //30 a menor que 35 – Obesidade Grau I;
    //35 a menor que 40 – Obesidade Grau II (considerada severa);
    //Maior que 40 – Obesidade Grau III (considerada mórbida).

    // A função deverá retornar o texto da situação baseada no IMC 
    function geraSituacao(IMC) {
        if (IMC < 16) {
            return "Magreza grave";
        } else if (IMC < 17) {
            return "Magreza moderada";
        } else if (IMC < 18.5) {
            return "Magreza leve";
        } else if (IMC < 25) {
            return "Saudável";
        } else if (IMC < 30) {
            return "Sobrepeso";
        } else if (IMC < 35) {
            return "Obesidade Grau I";
        } else if (IMC < 40) {
            return "Obesidade Grau II (severa)";
        } else {
            return "Obesidade Grau III (mórbida)";
        }
    }

