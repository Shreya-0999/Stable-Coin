import {applyMiddleware, createStore} from 'redux';
import createSagaMiddle from 'redux-saga';
import rootReducer from '../Store/rootReducer';
import rootSaga from '../Store/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddle();
export const middleware = [sagaMiddleware];

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);
export default store;