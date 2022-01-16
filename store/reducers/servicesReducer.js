import * as types from '../types'
import Api from '../../utils/Api';


export const getAllCategories = () => async dispatch => {
    try {   
        const response = await Api.get('/categories');
        if(response.status >= 400) {
            //error handling;
            console.log(response);
            return;
        }
        const result = await response.data;
        console.log(result);


    }catch(err) {
        console.log(err)
    }
}

export const getServiesOfCategory = (categoryId) => async dispatch => {
    try {
        const response = await Api.get('/services/'+categoryId);
        if(response.status >= 400) {
            //error handling;
            console.log(response);
            return;
        }
        const result = await response.data;
        console.log(result);
    }catch(err) {
        console.log(err)
    }
}