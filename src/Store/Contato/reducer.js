const INITIAL_STATE = {
    data: [],
    contato: {},
    isLoading: true
};

export default function contatos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_CONTATOS':
            return {
                ...state, isLoading: true
            }
        case 'SUCCESS_GET_CONTATOS':
            return {
                ...state, data: action.payload.data, isLoading: false
            }
        case 'SUCCESS_GET_CONTATO_BY_ID':
            return {
                ...state, contato: action.payload.data, isLoading: false
            }
        case 'SUCCESS_NOVO_CONTATO':
            return {
                ...state, isLoading: false
            }

        default:
            return state;
    }
}