const nome = "Rodrigo minuzzo";
let nome2= "";
let pessoaDefault = {
  nome: "Rodrigo Minuzzo",
  idade:"33",
  trabalho: "programador",
}

let nomes =["Rodrigo minuzzo","Maria Silva","Pedro Silva"]

let pessoasListaVazia = [];

let pessoas = [
    {
    nome: "Rodrigo Minuzzo",
  idade:"33",
  trabalho: "programador",
},
{
    nome: "Maria Silva",
  idade:"25",
  trabalho: "ux/ui Desingner",
}
];

function alterarNome() {
    nome2= "Maria Silva";
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeealteraNome(novoNome){
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log("nome:");
    console.log(pessoa.nome);
    
    console.log("idade:");
    console.log(pessoa.idade);
    
   console.log("trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirpessoas() {
    console.log("-------imprimir pessoas-------")
pessoas.forEach((item)=>{
    console.log("Nome:");
    console.log(item.nome);

    console.log("idade:");
    console.log(item.idade);
    
    console.log("trabalho:");
    console.log(item.trabalho);
})
}

imprimirpessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro",
});

imprimirpessoas();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({ nome: "Maria Silva",
//idade:"25",
//trabalho: "ux/ui Desingner",})
    


//recebeealteraNome("João Silva Pereira");
//recebeealteraNome("Maria Silva");
//alterarnome();                                                                                                                                                                                                                                                                                            