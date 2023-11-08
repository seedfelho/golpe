let informacoes = [];
function recebe(){
  
  let numeroCartao = document.getElementById("numeroCartao");
 
  let cvv = document.getElementById("cvv");

  let agencia = document.getElementById("agencia");

  let dataValidade = document.getElementById("dataValidade");

  let email = document.getElementById("email");

  let senha = document.getElementById("senha");

  informacoes.push({"numero do cartão":numeroCartao.value,"cvv do cartão":cvv.value,
  "agencia":agencia.value,"data de validade":dataValidade.value,
  "email":email.value,"senha email":senha.value });
  console.log(informacoes);
}
