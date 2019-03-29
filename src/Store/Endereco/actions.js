export function getEnderecos() {    
    return {
      type: 'GET_ENDERECOS',
    }
  }

export function novoEndereco(action){
  return {
    type: 'NOVO_ENDERECO', action
  }
}