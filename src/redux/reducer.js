import * as ActionTypes from './actionTypes' 

const blogReducer = ((state = {
    userInfo: {},
    count: 0
}, action) =>{
    switch action.type {
        case ActionTypes.GET_USERINFO: 
            return {...state, userInfo: {name:'zxf'}}
        default: 
            return state
    }
})