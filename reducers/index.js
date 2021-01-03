import { HYDRATE } from "next-redux-wrapper";

const initalState = {
    user :{
        isLoggedIn : false,
        user:null,
        signUpdata:{},
        loginData:{}
    },
    post :{
        mainPosts:[],
    }
}


// 액션 함수
export const loginAction = (data)=>{
    return{
        type:'Log_IN',
        data
    }
}

export const logoutAction = ()=>{
    return{
        type:'Log_OUT',
    }
}
const rootReducer = ((state=initalState,action)=>{
    switch (action.type) {
        case HYDRATE:
        console.log(HYDRATE,'HYDRATE');
        return {...state,...action.payload}
        case'LOG-IN':
            return{
                ...state,
                user:{
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data
                }
            }
        case'LOG-OUT':
            return{
                ...state,
                user:{
                    ...state.user,
                    isLoggedIn: false,
                    user:null
                }
            };
            default
                return state

    }
});
export default rootReducer