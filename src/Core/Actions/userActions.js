import userTypes from '../Types/userTypes';

export const logInStart=({email,password})=>({
    type:userTypes.LOG_IN_START,
    payload: {email,password}
})

export const logInSuccess=(user)=>({
    type: userTypes.LOG_IN_SUCCESS,
    payload: user

})

export const logInError=(error)=>({
    type: userTypes.LOG_IN_ERROR,
    payload: error
})

export const logOutStart=()=>({
    type: userTypes.LOG_OUT_START
})

export const logOutSuccess=()=>({
    type: userTypes.LOG_OUT_SUCCESS
})