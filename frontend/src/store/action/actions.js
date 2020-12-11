import axios from 'axios'

export const READPOST = "READPOST"
export const UPDATEPOST = "UPDATEPOST"
export const CREATEPOST = "CREATEPOST"
export const REMOVEPOST = "REMOVEPOST"

//read post from server
export const onReadPost = () => dispatch => {
    axios
        .get("http://localhost:4000/posts")
        .then(res => {
            // console.log("onReadPost", res.data)
            dispatch({
                type: READPOST,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("here is error", err)
        })
}

//add post from server
export const onAddPost = (data) => dispatch => {
    axios
        .post("http://localhost:4000/posts", data)
        .then(res => {
            dispatch({
                type: CREATEPOST,
                payload: data
            })
        })
        .catch(err => {
            console.log("here is error", err)
        })
}

//update post from server
export const onUpdatePost = (id, data) => dispatch => {
    axios
        .put("http://localhost:4000/posts/" + id, data)
        .then(res => {
            dispatch({
                type: UPDATEPOST,
                id: id,
                payload: data
            })
        })
        .catch(err => {
            console.log("here is error", err)
        })
}
//remove post from server
export const onRemovePost = (id) => dispatch => {
    axios
        .delete("http://localhost:4000/posts/" + id)
        .then(res => {
            dispatch({
                type: REMOVEPOST,
                payload: id
            })
        })
        .catch(err => {
            console.log("here is error", err)
        })
}