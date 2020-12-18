const SET_USER_DATE = 'SET-USER-DATE';

export const setAuthUserDate = (userId, login, email)=> {
    return {
        type: SET_USER_DATE,
        data: {userId, login, email }
    }
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogin: false

}


const authReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_USER_DATE:

            return {
                ...state,
                ...action.data,
                isLogin: true
            }

        default:
            return state;
    }
}
export default authReducer;