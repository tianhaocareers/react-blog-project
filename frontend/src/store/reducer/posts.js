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
            console.log("Connected to UPDATEPOST reducer")
            const updatePost = action.payload
            const newArray = state.posts.map(posts => {
                if (posts._id === action.id) {
                    return updatePost
                }
                return posts
            })
            return {
                ...state,
                posts: newArray
            }

        case actionTypes.CREATEPOST:
            console.log("Connected to CREATEPOST reducer")
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        case actionTypes.REMOVEPOST:
            console.log("Connected to REMOVEPOST reducer")
            return {
                ...state,
                posts: state.posts.filter(posts => posts._id !== action.payload)
            }
        default:
            return state
    }
}

export default reducer