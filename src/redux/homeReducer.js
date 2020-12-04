const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreater = ()=> {
	return {
	  type: ADD_POST
	}
  }

export const updatePostActionCreater = (text) => {
	return { 
	type: UPDATE_NEW_POST_TEXT, 
	newText: text
}
  }

let initialState = {
  posts: [
    { id: 1, msg: 'Lorem ipsun trulala. Hello my firt duddy!' },
    { id: 2, msg: 'Hello World!' },
    { id: 3, msg: 'Lucky day! Good day!!' },
    { id: 4, msg: 'Lorem ipsun trulala. Hello my firt duddy!' }
  ],
  newPostText: ''
}


const homeReducer = (state = initialState, action) => {

    switch (action.type) {

				case ADD_POST: 

						return {
							...state,
							newPostText: '',
							posts: [...state.posts, {id: state.posts.length + 1, msg: state.newPostText}]
						}
						
				case UPDATE_NEW_POST_TEXT: 
				
						return {...state, newPostText: action.newText };
						
        default: 
            return state;
    }
}
export default homeReducer;