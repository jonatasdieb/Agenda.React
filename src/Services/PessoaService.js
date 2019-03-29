import api from './Api'

const service = {       
    getPessoas: () => api.get('Pessoa'),
    getPessoaMarcadores: () => api.get('Pessoa/GetMarcadores'),
    getPessoaById: (pessoaId) => api.get('Pessoa/'+pessoaId)
}

export default service;

