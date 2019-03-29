export function getPessoas() {  
    return {
      type: 'GET_PESSOAS',
    }
  }

  export function getPessoaMarcadores() {  
    return {
      type: 'GET_PESSOA_MARCADORES',
    }
  }

export function getPessoaById(action){ 
  return {
    type: 'GET_PESSOA_BY_ID', action
  }
}