import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createSagaMiddleware} from 'redux-saga'
import reducer from '../reducers';
import rootSaga from '../saga'
const configureStore = (context) => {
    console.log(context);
    const sagaMiddleware =  createSagaMiddleware
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(
            applyMiddleware(...middlewares),
        );

    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store;
};
const wrapper = createWrapper(configureStore,{
    debug : process.env.NODE_ENV === 'development' //  개발 봄드면 디버그 설명이 잘 나옴
})
export  default  wrapper