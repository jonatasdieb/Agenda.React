import { takeEvery, put, call } from 'redux-saga/effects';
import pessoaService from '../../Services/PessoaService'

function* getPessoas() { 
  try {    
    const response = yield call(pessoaService.getPessoas);
    yield put({ type: 'SUCCESS_GET_PESSOAS', payload: { data: response.data } });
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* getPessoaById(action) {   
  try {    
    const response = yield pessoaService.getPessoaById(action.action.pessoaId);      
    yield put({ type: 'SUCCESS_GET_PESSOA_BY_ID', payload: { data: response.data } });
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* getPessoaMarcadores() { 
  try {    
    const response = yield call(pessoaService.getPessoaMarcadores);   
    yield put({ type: 'SUCCESS_GET_PESSOA_MARCADORES', payload: { data: response.data } });
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}


export default function* pessoaSagas() {
  yield takeEvery('GET_PESSOAS', getPessoas);
  yield takeEvery('GET_PESSOA_MARCADORES', getPessoaMarcadores);
  yield takeEvery('GET_PESSOA_BY_ID', getPessoaById);
}