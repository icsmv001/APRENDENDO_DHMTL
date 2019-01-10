function cadastrarPessoas(){
  var nome      = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var cpf       = document.getElementById("cpf").value;
  var telefone  = document.getElementById("telefone").value;
  var endereco  = document.getElementById("endereco").value;
  
  // debugger

  // primerio tipo de validacao 
 if(nome==""){
    alert("Por favor digite o seu nome")
    document.getElementById("nome").focus();
    return;
 }
  if(cpf==""){
    alert("Por favor digite o seu cpf")
    document.getElementById("cpf").focus();
    return;
 }













 // segundo tipo de validacao 
  /*var mensagens = "";
  if (nome == "") {
  	mensagens += "Nome\n"
  }
   if (cpf == "") {
  	mensagens += "CPF\n"
  	alert("Por favor preencha os campos abaixo: \n " + mensagens)
  	document.getElementById("nome").focus();
  	return;
  }

*/












   var html = "<tr id='linha-" + cpf + "' style='opacity:0.0'>";
   html += "<td> " + nome + " </td>";
   html += "<td> " +sobrenome + " </td>";
   html += "<td> " +cpf + " </td>";
   html += "<td> " +telefone + " </td>";
   html += "<td> " +endereco + " </td>";
   html += "</tr>";
   document.getElementById("registros").innerHTML += html;

  // limpar variaveis
  document.getElementById("nome").value ="";
  document.getElementById("sobrenome").value ="";
  document.getElementById("cpf").value ="";
  document.getElementById("telefone").value ="";
  document.getElementById("endereco").value ="";

//  alert("Cadastro Concluido com Sucesso !!! ");
//  document.getElementById("nome").focus();

 document.getElementById("formCadastro").style ="display: none";
 document.getElementById("mostrarFormulario").style = "display:block";
 
 // animacao com opacity -- atributos CSS / JAVASCRITP/DHTML
 var index = 0;
 var interval = setInterval(function(){
     document.getElementById("linha-" + cpf).style= "opacity:0" + index
     index += 1;
     if (index > 9 ) {
      clearInterval(interval);
     }
 },50)

}

function mostrarFormulario(){
  document.getElementById("mostrarFormulario").style = "display:none";
  document.getElementById("formCadastro").style = "display:block";


}

function alterarFilho(){
  document.getElementById("registros").childNodes[2].childNodes[0].childNodes[0].innerHTML = "IZAEL SILVA"


}

function alterarPai(){
  document.getElementById("registros").parentNode.innerHTML += "Teste Registros"

// comandos de navegação na linha da tabela, entre elementos do DOM
// document.getElementById("registros").childNodes[2].childNodes[0].childNodes[1].nextSibling
// ir para o anterior
// document.getElementById("registros").childNodes[2].childNodes[0].childNodes[1].previousSibling

// #### trata intervalos de execução
// funcao para dar intervalo/ espera e executa uma unica vez
// setTimeout(function() { console.log ("TESTE TIMOUT")},6000)


// executa ate que vc mande parar
// var intervalo = setInterval(function() { console.log ("TESTE TIMOUT")},2000)

// mandando parar
// clearInterval(intervalo)



}



