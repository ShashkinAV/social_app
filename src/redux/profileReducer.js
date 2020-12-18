const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-PROFILE';

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const addPostActionCreater = () => ({type: ADD_POST});
export const updatePostActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
    posts: [
        {id: 1, msg: 'Lorem ipsun trulala. Hello my firt duddy!'},
        {id: 2, msg: 'Hello World!'},
        {id: 3, msg: 'Lucky day! Good day!!'},
        {id: 4, msg: 'Lorem ipsun trulala. Hello my firt duddy!'}
    ],
    newPostText: '',
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: state.posts.length + 1, msg: state.newPostText}]
            }

        case UPDATE_NEW_POST_TEXT:

            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        default:
            return state;
    }
}
export default profileReducer;