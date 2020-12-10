import * as actionCreators from './store/action/actions'

export const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onReadPost: () => dispatch(actionCreators.onReadPost())
    }
}