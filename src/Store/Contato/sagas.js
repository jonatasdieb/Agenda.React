import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import contatoService from '../../Services/ContatoService'

function* getContatos() {   
  try {    
    const response = yield call(contatoService.getContatos);
    yield put({ type: 'SUCCESS_GET_CONTATOS', payload: { data: response.data } });   
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* getContatosByPessoaId(action) {   
  try {    
    const response = yield contatoService.getContatosByPessoaId(action.action);
    yield put({ type: 'SUCCESS_GET_CONTATOS', payload: { data: response.data } });   
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* getContatoById(action) {   
  try {    
    const response = yield contatoService.getContatoById(action.action);
    yield put({ type: 'SUCCESS_GET_CONTATO_BY_ID', payload: { data: response.data } });   
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* novoContato(action) {
  const contato = action.action;  
  try {
    yield contatoService.novoContato(contato);
    yield getContatos();
    yield put({ type: 'SUCCESS_NOVO_CONTATO'});
    yield put({ type: 'REQUEST_SUCCESS', payload: { messages: "Despesa registrada com sucesso." } })
    
  }
  catch (err) {     
    const errors = yield err; 
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

export default function* contatoSagas() {
  yield takeEvery('GET_CONTATOS', getContatos);
  yield takeEvery('GET_CONTATOS_BY_PESSOAID', getContatosByPessoaId);
  yield takeEvery('GET_CONTATOS_BY_ID', getContatoById);
  yield takeLatest('NOVO_CONTATO', novoContato);
}