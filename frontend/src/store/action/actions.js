import axios from 'axios'

export const READPOST = "READPOST"
export const UPDATEPOST = "UPDATEPOST"
export const CREATEPOST = "CREATEPOST"
export const REMOVEPOST = "REMOVEPOST"

//read post from server
export const onReadPost = () => dispatch => {
    axios
        .get("https://gorest.co.in/public-api/users")
        .then(res => {
            dispatch({
                type: READPOST,
                payload: res.data.data
            })
        })
        .catch(err => {
            console.log("here is error", err)
        })
}