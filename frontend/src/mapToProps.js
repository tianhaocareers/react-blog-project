import * as actionCreators from './store/action/actions'

export const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onReadPost: () => dispatch(actionCreators.onReadPost()),
        onAddPost: (data) => dispatch(actionCreators.onAddPost(data)),
        onUpdatePost: (id, data) => dispatch(actionCreators.onUpdatePost(id, data)),
        onRemovePost: (id) => dispatch(actionCreators.onRemovePost(id))
    }
}