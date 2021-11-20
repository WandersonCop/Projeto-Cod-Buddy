let Cadastro = {
  nome: '',
  email: '',
  telefone: '',
  data_nascimento: '',
  masculino: '',
  feminino: '',
  outro: '',
  cidade: '',
  estado: '',
  endereco: '',
}
function preencherObjeto() {
  Cadastro.nome = document.getElementById('nome').value
  Cadastro.email = document.getElementById('email').value
  Cadastro.telefone = document.getElementById('telefone').value
  Cadastro.data_nascimento = document.getElementById('data_nascimento').value
  Cadastro.masculino = document.getElementById('masculino').value
  Cadastro.feminino = document.getElementById('feminino').value
  Cadastro.outro = document.getElementById('outro').value
  Cadastro.cidade = document.getElementById('cidade').value
  Cadastro.estado = document.getElementById('estado').value
  Cadastro.endereco = document.getElementById('endereco').value

  console.log(Cadastro)
}
