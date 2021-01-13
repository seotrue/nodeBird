// const dummyUser = {
//     id: 1,
//     nickname: '제로초',
//     Posts: [],
//     Followings: [],
//     Followers: [],
// };
export const initialState ={
    isLoggedIn :false,
    me :null,
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
                me:{
                    ...state.me,
                    isLoggedIn: true,
                    me: action.data
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