const INITIAL_STATE = {
    data: [],
    pessoa: {},
    marcadores: [],
    isLoading: true
};

export default function pessoas(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_PESSOAS':
            return {
                ...state, isLoading: true
            }
        case 'SUCCESS_GET_PESSOAS':
            return {
                ...state, data: action.payload.data, isLoading: false
            }

        case 'SUCCESS_GET_PESSOA_MARCADORES':
            return {
                ...state, marcadores: action.payload.data, isLoading: false
            }

        case 'GET_PESSOA_BY_ID':
            return {
                ...state, isLoading: true
            }

        case 'SUCCESS_GET_PESSOA_BY_ID':
        console.log('reducer: ', action.payload.data)
            return {
                ...state, pessoa: action.payload.data, isLoading: false
            }
        case 'GET_PESSOA_MARCADORES':
            return {
                ...state, isLoading: true
            }

        default:
            return state;
    }
}