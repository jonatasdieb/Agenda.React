import api from './Api'

const service = {
    getEnderecos: () => api.get('Endereco'),
    updateEndereco: (endereco) => api.put('Endereco', endereco),
    getEnderecoTipos: () => api.get('Endereco/GetTipos'),
    getEnderecoById: (enderecoId) => api.get('Endereco/'+enderecoId)
}

export default service;

