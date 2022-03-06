import {all,call} from 'redux-saga/effects';
import userSagas from '../Sagas/userSaga';

export default function* rootSaga(){
    yield all([
        call(userSagas)
    ])
}