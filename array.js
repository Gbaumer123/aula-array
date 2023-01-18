const latinhas = ["coca-cola", "Sprite", "fanta"] 

//INSERIR
//latinhas.push("colecao-especial") //insere elementos dentro do array

//FILTRAR
/*
const latinhasAtualizadas = latinhas.filter(latinha =>{ //latinhas recebe latinhas.filter que é onde filtra os dados filtra os dados na váriavel latinhas
    return true;//filtra todas as latinhas se forem true e nao retorna nada se for false.
})

const latinhasNaoSprit = latinhas.filter(latinha =>{//latinha recebe latinhas.filter que é onde filtra os dados na váriavel latinhas
    return latinha !== "Sprite";//latinha filtra todas as latinhas que não forem Sprite
})
*/

//PESQUISAR
/*
const latinhaCoca = latinhas.find(function(latinha){//latinhaCoca  recebe latinhas.find que é onde pesquisa os dados na váriavel latinhas
    return true //pesquisa todas as latinhas se forem true e nao retorna nada se for false.
})

const latinhaFind = latinhas.find (function(latinha){//latinhaFind  recebe latinhas.find que é onde pesquisa os dados na váriavel latinhas
    return latinha === "coca-cola"  //pesquisa todas as latinhas que forem coca cola
})
*/

//OUTRA FORMA DE PESQUISAR
/*
console found = latinhas.includes("coca-cola") // found é metodo pra dizer se encontrou a latinha ou não

console.log(latinhas.includes("coca-cola", 0)) //metodo pra dizer se encontrou a latinha a partir da posição informada
*/

//UPDATE
/*
const novasLatinhas =[...latinhas, "breja"] //novasLatinhas recebe latinhas da constante e insere uma nova

const latinhasUpdate = novasLatinhas.slice(-2) // retorna um novo array que mostra as 2 ultimas latinhas 


console.log(latinhasUpdate)//retorna novas latinhas
*/

//REMOÇÃO
/*
latinhas.pop() //remove o ultimo elemento do array e retorna o array origianl

console.log(latinhas) //retorna latinhas
*/

//TRANSFORM
/*
const fruits = [ "🍎", "🍇"] //variável recebe duas frutas
const apples = fruits.map(function(fruit){ //map  é a função que recebe uma fruta só, então ela transforma todas as frutas em 1 só
    return "🍎" //retorna o que é desejado pelo usuário
})

console.log(fruits) //mostra a variável fruits
console.log(apples)//mostra apenas as maçãs
*/

//REVERSE
/*
const fruits = [ "🍎", "🍇"] //variável recebe duas frutas

const fruitsReverse = fruits.reverse() //ele reverte o array original

const fruitsReverse = [...fruits].reverse() //cria um novo array a partir do reverse

console.log(fruits)
console.log(fruitsReverse)
*/


//LOOP
const fruits = [ "🍎", "🍇"]

// no forEach para cada um dele roda uma função receba o item para que possa fazer algo que voce quer.
fruits.forEach(function(fruit){ //para cada fruta irá rodar uma função, forEach não retorna um novo array e nem altera o original
    console.log(fruit)
})