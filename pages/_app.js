// 페이지들의 공통적인 부분을 여기서 해결
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withReduxSaga from 'next-redux-saga';
import 'antd/dist/antd.css';


import wrapper from '../store/configureStore';

const App = ({Component})=>{
    return (
        <>
            <Head>
                <meta charSet={'utf-8'}/>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>

    )
}
// prop 점검
App.propTypes ={
    Component : PropTypes.elementType.isRequired
}
export  default  wrapper.withRedux(withReduxSaga(App))