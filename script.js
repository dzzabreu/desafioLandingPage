document.getElementById("botaoCadastro").addEventListener("click", validaCadastro)

function validaCadastro(){
  if(document.getElementById("nome").value !="" && document.getElementById("contato").value !="" && document.getElementById("endereço").value !="" && document.getElementById("novasenha").value !=""){
    alert("Prontinho, seja bem-vindo! Agora vamos ao cardápio!")
  }else{
    alert("Por favor, realize seu cadastro preenchendo todos os campos, só assim poderemos prosseguir com o seu pedido!")
  }
   
}