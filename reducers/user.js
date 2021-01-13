const dummyUser = {
    id: 1,
    nickName: '제로초',
    Posts: [],
    Followings: [],
    Followers: [],
};
export const initialState ={
    isLoggedIn :false,
    me :null,
    signUpData : {},
    loginData:{}
}

export const LOG_IN ='LOG_IN'

// 액션 함수
export const loginAction = (data)=>{
    return{
        type:LOG_IN,
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
        case LOG_IN:
            return{
                ...state,
                isLoggedIn: true,
                me:{
                    ...state.me,

                    me: dummyUser
                }
            }
        case'LOG-OUT':
            return{
                ...state,
                me:{
                    ...state.me,
                    isLoggedIn: false,
                    me:null
                }
            };
        default :
            return state
    }
}