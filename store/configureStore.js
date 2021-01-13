import {createWrapper} from "next-redux-wrapper";
import {createStore} from "redux";

import reducer from '../reducers'

const configureStore = ()=>{
    const store = createStore(reducer);
    return store
}
const wrapper = createWrapper(configureStore,{
    debug : process.env.NODE_ENV === 'development' //  개발 봄드면 디버그 설명이 잘 나옴
})
export  default  wrapper