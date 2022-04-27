// Como comentar em linha no JS (Adicionando duas barras, e para finalizar, adicionar um ponto).
// Formas de variavel: Var, let, const. Var é muito mais ampla do que a Let. E a Const é uma constante. O Var consegue atingir todos os níveis de uma função, e o Let é mais limitado a abrangência.
//No javascript temos uma variação de tipos de comandos.
//Formas de numeração: number, string, booleano, array, objeto.
//var a = 1 | var = variavel = o que varia = que desconhecemos/podem mudar.
//let b = 3
//const c = 5;
var nums = [1, 5.3, 4.9, 0.6]
var texts = ['Lucas', "Sarah",'Meu array de número é: ' + nums , `Meu array de números é ${nums}`]

var bool = [true, false]
// true != 'true'

var obj = {
  nome: 'Valério',
  idade: 43,
  cidade: 'Rio de Janeiro',
  profissao: 'Desenvolvedor'
}

let avanade = [
  {
    nome: 'Victor',
    idade: 26,
    cidade: 'São Paulo'
  },
  {
    nome: 'Silvana',
    idade: 33,
    cidade: 'Recife'
  },
  {
    nome: 'Thauan',
    idade: 30,
    cidade: 'Recife'
  }

]
console.log(avanade[1].cidade)

let a
a = 5
var b
b = false
const c = "saude"