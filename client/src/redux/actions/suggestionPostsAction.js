import { GLOBALTYPES } from "./globalTypes";
import { getDataAPI } from "../../utils/fetchData";

export const SUGGEST_TYPES = {
    LOADING: 'LOADING_SUGGEST',
    GET_POSTS: 'GET_POSTS_SUGGEST'
}

export const getSuggestion = (token) => async(dispatch) => {
    try {
        dispatch({type: SUGGEST_TYPES.LOADING, payload: true})
        const res = await getDataAPI('suggestionPosts', token)
        // console.log(res)
        dispatch({type: SUGGEST_TYPES.GET_POSTS, payload: res.data})
        dispatch({type: SUGGEST_TYPES.LOADING, payload: false})
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: ({
                error: err.response.data.msg
            })
        })
    }
}