import api from './Api'

const service = {
    getContatos: () => api.get('Contato'),
    updateContato: (contato) => api.put('Contato', contato),
    getContatoTipos: () => api.get('Contato/GetTipos'),
    getContatoById: (contatoId) => api.get('Contato/'+contatoId)
}

export default service;