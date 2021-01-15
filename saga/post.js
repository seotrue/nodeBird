
import axios from 'axios';
import shortId from 'shortid';
import { all, delay, fork, put, takeLatest, throttle } from 'redux-saga/effects';

import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,

    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE, addPost,
} from '../reducers/poster'

function loadPostAPI(data) {
    return axios.get('/api/posts', data);
}
function* loadPosts(action) {
    try{
        // const result = yield call(loadPostAPI, action.data)
        yield delay(1000); // api 연동 전 임시로 딜레이 시킨다
        yield put({
            type : LOAD_POSTS_SUCCESS ,
            data:generateDummyPost(10) //10개만 데이터를 불러온다.
        })
    }catch (err) {
        yield put({
            type : LOAD_POSTS_FAILURE ,
            data:err.response.data
        })
    }
}

function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try {
        //const result = yield call(addPostAPI,action.data)
        yield delay(1000);
        const id = shortId().generate();
        yield  put({
            type : ADD_POST_SUCCESS,
            data :{
                id,
                content : action.data
            }
        })
    }catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchLoadPosts() {
    yield throttle(5000,LOAD_POSTS_REQUEST,loadPosts) // 5초뒤에 포스트 로딩 시작
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchRemovePost() {
    yield takeLatest
}

function* watchAddComment() {
    yield takeLatest
}



//  function* 사가는 앞에 *를 붙여 준다.
export  default  function* postSaga(){
    // all 합쳐준다.
    yield all([
        fork()
        fork()
        fork()
        fork()
    ])
}