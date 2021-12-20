import * as types from '../types';

const initialState= {
    userInfo: {}
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        default: 
        return {
            ...state
        }
    }
}