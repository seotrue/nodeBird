import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux";

import user from "./user";
import poster from "./poster";

const rootReducer = combineReducers({
    index : (state={},action) =>{
        switch (action.type) {
            case HYDRATE :
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;

        }
    },
    user,
    poster
})


export default rootReducer