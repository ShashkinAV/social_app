const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMsg = {
                id: state.msg.length + 1,
                from: "from-them",
                msg: state.newMsgText,
                date: "today at 15.00 am"
            }
            state.msg.push(newMsg);
            state.newMsgText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT: 
            state.newMsgText = action.newMsgText;
            return state;
        default:
            return state;
    }
}

export default messageReducer;