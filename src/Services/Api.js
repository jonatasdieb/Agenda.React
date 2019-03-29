import axios from 'axios';

var url = 'http://agendawebapi.somee.com/';

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default api;
