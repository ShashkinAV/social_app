const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreater = () => {
	return { 
		type: ADD_MESSAGE 
	}
}
export const updateMessageTextActionCreater = (text)=> {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newMsgText: text
	}
}

let initialState = {
    msg: [
        {
            id: 1,
            from: "from-me",
            msg: "Lorem ipsun trulala. Hello my firt duddy!",
            date: "yesterday at 22.00 pm"
        },
        {
            id: 2,
            from: "from-them",
            msg: "LOLOLOLLOLOLOLO!!!!!",
            date: "today at 13.00 am"
        },
        {
            id: 3,
            from: "from-me",
            msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis commodi ex, tempora libero laudantium facilis enim architecto numquam voluptate quidem iure facere vero, hic, dignissimos inventore minima possimus mollitia assumenda.",
            date: "today at 13.05 am"
        },
        {
            id: 4,
            from: "from-them",
            msg: "LOLOLOLLOLOLOLO!!!!!",
            date: "today at 13.15 am"
        },
        {
            id: 5,
            from: "from-me",
            msg: "LOLOLOLLOLOLOLO!!!!!",
            date: "today at 14.00 am"
        },
        {
            id: 6,
            from: "from-them",
            msg: "LOLOLOLLOLOLOLO!!!!!",
            date: "today at 15.00 am"
        }
    ],
    users: [
        { id: 1, name: "Niko" },
        { id: 2, name: "Valeria" },
        { id: 3, name: "Viktor" },
        { id: 4, name: "Olivia" },
        { id: 5, name: "Antonio" },
    ],
    newMsgText: ''
}

const messageReducer = (state = initialState, action) => {
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