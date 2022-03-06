import userTypes from '../Types/userTypes';

const INITIAL_STATE={
    currentUser:null,
    loginError:""
};

const userReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case userTypes.LOG_IN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                loginError: ""
            }
        case userTypes.LOG_OUT_SUCCESS:
            return{
                ...state,
                ...INITIAL_STATE
            }
        case userTypes.LOG_IN_ERROR:
            return{
                ...state,
                loginError:action.payload
            }
        default: return state;
    }
}

export default userReducer;