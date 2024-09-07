
//declarar uma função
function pesquisar(){


//document é para entrar no documento html e pegar a id do mesmo
//e colocar na variavel no caso chamomos de section
let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value;

// se o campo pesquisa estiver vazio não imprime nada
//o return no js encerra o código neste ponto
//pode se usar também  if(!campoPesquisa) ou inves de if(campoPesquisa == "")
if(campoPesquisa == ""){
    section.innerHTML = '<p class="sem-resultados">Não encontramos nada...</p>'
    return;
};

//modificar tudo o que foi digitado no campo pesquisa para minúsculo
campoPesquisa = campoPesquisa.toLowerCase();

//Manipulação de String , métodp includes, se esta incluso na string

console.log(campoPesquisa);

let resultados = "";
let titulo = ""; //variável para mudar para minúsculo conteúdo de título
let descricao = ""; //variável para mudar para minúsculo conteúdo da descrição
let tags = ""; //variável para mudar para minúsculo conteúdo das tags


// variavel dado vai receber a lista de dados do arquivo dados.js
for(let dado of dados){

    //alterados valores para letras minúsculas
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    //se tem valor do campo de pesquisa inclui o html na variável resultados
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
  
        /*sinal de + depois da variável resultados = (mais igual) vai somando as divs de todo o conteúdo do aquivo dados.js, cada loop do for vai adicionando uma div na variável resultados que depois podemos imprimir no html com a innerHTML para a variável section que esta atribuida com um id
        específico do html  */

        resultados += `
        <div class="item-resultado">
            
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>

            <img src=${dado.imagem} alt="Síbolo da Jolly Roge dos Chapéus de Palha">

            <p class="descricao-meta">${dado.descricao}</p>

            <a href=${dado.link} target="_blank">Mais informações</a>

            
        </div>
        `;
    } //fim do if 

}//fim do for

if(!resultados){
    resultados = '<p class="sem-resultados">Desculpe! Sua pesquisa não retornou nenhum resultado!</p>'
}

//o que eu vou ter na variável section e mostrar na página e console
section.innerHTML = resultados;

}//Fim da função pesquisar

//Função para mostrar todo o conteúdo do arquivo dados.js
function mostraTudo(){

    let section = document.getElementById("resultados-pesquisa");
    let resultados = ""; // Limpa a variável resultados antes de iniciar

    if (dados.length === 0) {
        resultados = '<p class="sem-resultados">Não há dados disponíveis.; </p>'
    } else {

        for(let dado of dados){
                
                        
            resultados += `
            <div class="item-resultado">
                
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>

                <img src=${dado.imagem} alt="Síbolo da Jolly Roge dos Chapéus de Palha">

                <p class="descricao-meta">${dado.descricao}</p>

                <a href=${dado.link} target="_blank">Mais informações</a>

                
            </div>
            `;   
        }//fim do for

    }//fim do else

    //o que eu vou ter na variável section e mostrar na página e console
    section.innerHTML = resultados; 

}//Fim da função motrarTudo





/*conceito de if  em portugues
- se titulo includes campoPequisa 
esntão executa bloco de código
*/



/*conceito de for para em portugues
- para cada dado dentro da lista de dados
*/

// console.log(dados); mostra todos

//console.log(dados[0]); //mostra o nome do índice 2, começa no zero

//console.log(dados);

//somente um item de um dos dados da lista
//console.log(dados[0].descricao);

// console.log(dados);