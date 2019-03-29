import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import enderecoService from '../../Services/EnderecoService'

function* getEnderecos() {
  try {
    const response = yield call(enderecoService.getEnderecos);
    yield put({ type: 'SUCCESS_GET_ENDERECOS', payload: { data: response.data } });  
    yield put({ type: 'CLEAR_MESSAGES'}); 
  } catch (err) {
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* novoEndereco(action) {
  const endereco = action.action;  
  try {
    yield enderecoService.novoEndereco(endereco);
    yield getEnderecos();
    yield put({ type: 'SUCCESS_NOVO_ENDERECO'});
    yield put({ type: 'REQUEST_SUCCESS', payload: { messages: "Endereco cadastrado com sucesso." } })
    
  }
  catch (err) {     
    const errors = yield err;       
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

export default function* enderecoSagas() {
  yield takeEvery('GET_ENDERECOS', getEnderecos);
  yield takeLatest('NOVO_ENDERECO', novoEndereco);
}