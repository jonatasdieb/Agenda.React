const INITIAL_STATE = {
    data: [],
    isLoading: true    
};

export default function enderecos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_ENDERECOS':
            return {
                ...state, isLoading: true
            }
        case 'SUCCESS_GET_ENDERECOS':          
            return {
                ...state, data: action.payload.data, isLoading: false
            }
        case 'SUCCESS_NOVO_ENDERECO':
            return{
               ...state, isLoading: false
            }   
        default:
            return state;
    }
}