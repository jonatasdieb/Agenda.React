import { all } from 'redux-saga/effects';
import enderecoSagas from './Endereco/sagas';
import pessoaSagas from './Pessoa/sagas';
import contatoSagas from './Contato/sagas';

export default function* rootSaga(){  
    yield all([
        pessoaSagas(),
        enderecoSagas(),
        contatoSagas()        
     ])
}