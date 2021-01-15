import shortId from 'shortid';
import faker from 'faker';

import produce from '../util/produce';
export const initialState = {
    mainPosts : [],
    imagePaths :[],
    hasMorePosts:true,

    loadPostsLoading:false,
    loadPostDone : false,
    loadPostError:null,

    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    removePostLoading: false,
    removePostDone: false,
    removePostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,

};
// 받은 number로 map돌려서 해당 더미데이터를 뿌려준다.4
export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: shortId.generate(),
    User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
    },
    content: faker.lorem.paragraph(),
    Images: [{
        src: faker.image.image(),
    }],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.sentence(),
    }],
}));

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data)({
    type:ADD_POST_REQUEST,
    data
})

export const addComment = (data)=>({
    type:ADD_POST_REQUEST,
    data
})


const dummyPost=(data) = ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: 'sol',
    },
    Images: [],
    Comments: [],
})

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
// 1. draft은 리듀서 안에서 쓰는데 state(리듀서 안에서의) 역활을 한다. (immer 사용)
// 2. immer 사용 시에는 break를 넣어준다.
const reducer =   (state=initialState,action)=>(produce(state,(draft)=>{
    switch (action.type) {
        case LOAD_POSTS_REQUEST :{
            // 요청이 시작이 되면 로딩은 트루
            draft.loadPostsLoading = true;
            draft.loadPostsDone = false;
            draft.loadPostsError = null;
            break;
         case LOAD_POSTS_SUCCESS :

            draft.loadPostsLoading = false;
            draft.loadPostsDone = true;
            draft.mainPosts =action.data.concat(draft.mainPosts);
            draft.hasMorePosts  =draft.length <50
            break;

        default :
            return state
        }
    });

export default reducer;