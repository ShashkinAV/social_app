const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const homeReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: state.posts.length + 1,
                msg: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
}
export default homeReducer;