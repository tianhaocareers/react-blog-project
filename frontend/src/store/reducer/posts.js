import * as actionTypes from '../action/actions';

const initialState = {
    posts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.READPOST:
            console.log("Connected to READPOST reducer")
            return {
                ...state,
                posts: action.payload
            }
        case actionTypes.UPDATEPOST:
            return state
        case actionTypes.CREATEPOST:
            return state
        case actionTypes.REMOVEPOST:
            return state
        default:
            return state
    }
}

export default reducer