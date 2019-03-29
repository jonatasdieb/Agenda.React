import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import enderecos from './Endereco/reducer';
import pessoas from './Pessoa/reducer';
import contatos from './Contato/reducer';
import validationMessages from './ValidationMessages/reducer';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    pessoas,
    enderecos,
    contatos,
    validationMessages   
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;