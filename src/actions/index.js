import axios from 'axios';

export const FETCH_START ='FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';



export const getCharacter = () =>  dispatch => {
    dispatch({type: fetchStart()})
        axios.get('https://rickandmortyapi.com/api/character')
            .then(resp => {
                dispatch(fetchSuccess(resp.data.results));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            })
}


export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (character) => {
    return({type: FETCH_SUCCESS, payload: character})
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error})
}