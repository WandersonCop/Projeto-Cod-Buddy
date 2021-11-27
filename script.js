let Cadastro = {
  nome: '',
  email: '',
  telefone: '',
  data_nascimento: '',
  genero: '',
  cidade: '',
  estado: '',
  endereco: ''
}
function preencherObjeto() {
  Cadastro.nome = document.getElementById('nome').value
  Cadastro.email = document.getElementById('email').value
  Cadastro.telefone = document.getElementById('telefone').value
  Cadastro.data_nascimento = document.getElementById('data_nascimento').value

  // Cadastro.genero = document.getElementsByName('genero'){
  //   var radios =
  //   document.getElementsByName("genero");
  // for (var i = 0; i < radios.length; i++) {
  //     if (radios[i].checked) {
  //         console.log( radios[i].value);
  //     }
  // }
  
  Cadastro.cidade = document.getElementById('cidade').value
  Cadastro.estado = document.getElementById('estado').value
  Cadastro.endereco = document.getElementById('endereco').value

  console.log(Cadastro)
}
