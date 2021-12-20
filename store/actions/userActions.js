import Api from '../../utils/Api';
import { getToken } from '../../utils/token-handler';
import * as types from '../types'


export const getUserProfile = () => async dispatch => {
    try {
        const token = getToken();
        const response = await Api.get('/user/me', {
            headers: {
                'x-access-token': token
            }
        });
        const result = await response.data;
        console.log(result);
    }catch(err) {
        console.log(err);
    }
}