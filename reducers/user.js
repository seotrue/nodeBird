const dummyUser = {
    id: 1,
    nickname: '제로초',
    Posts: [],
    Followings: [],
    Followers: [],
};
export const initialState ={
    isLoggedIn :false,
    user :null,
    signUpData : {},
    loginData:{}
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

export default  (state=initialState,action)=>{
    switch (action.type) {
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
        default :
            return state
    }
}