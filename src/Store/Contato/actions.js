export function getContatos() {  
    return {
      type: 'GET_CONTATOS',
    }
  }

  export function getContatosByPessoaId(action) {  
    return {
      type: 'GET_CONTATOS_BY_PESSOAID', action
    }
  }

  export function getContatoById(action) {  
    return {
      type: 'GET_CONTATO_BY_ID', action
    }
  }

export function novoContato(action){
  return {
    type: 'NOVO_CONTATO', action
  }
}