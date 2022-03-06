import userTypes from '../Types/userTypes';
import { takeLatest,call,all,put } from 'redux-saga/effects';
import {logInSuccess,logInError,logOutSuccess} from '../Actions/userActions';
import user from '../../Core/Services/auth'

export function* userLogIn({payload:{email,password}}){
    try{
        
        if(email===user.email && password===user.password){
            yield put(
                logInSuccess(user)
            )
        }else{
            yield put(
                logInError("Wrong Credentials")
            )
        }
    }catch(err){
        console.log(err);
    }
}

export function* onUserLogInStart(){
    try{
        yield takeLatest(userTypes.LOG_IN_START, userLogIn)
    }catch(err){

    }
}

export function* userLogOut(){
    try{
        yield put(
            logOutSuccess()
        )
    }catch(err){
        console.log(err)
    }
}

export function* onUserLogOutStart(){
    try{
        yield takeLatest(userTypes.LOG_OUT_START, userLogOut);
    }catch(err){
        console.log(err);
    }
}

export default function* userSagas(){
    yield all([
        call(onUserLogInStart),
    ])
}