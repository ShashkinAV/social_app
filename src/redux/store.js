import homeReducer from './homeReducer';
import messageReducer from './messageReducer';

let store = {
	//Начальный state
	_state: {
		messagePage: {
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
		},
		homePage: {
			posts: [
				{ id: 1, msg: 'Lorem ipsun trulala. Hello my firt duddy!' },
				{ id: 2, msg: 'Hello World!' },
				{ id: 3, msg: 'Lucky day! Good day!!' },
				{ id: 4, msg: 'Lorem ipsun trulala. Hello my firt duddy!' }
			],
			newPostText: ''
		},
		profilePage: {}
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._rerender = observer;
	},
	//Метод перерисовки компонентов React
	_rerender() {
		console.log('State Chenge');
	},

	//ACTIONS

	dispatch(action) {
		this._state.homePage = homeReducer(this._state.homePage, action);
		this._state.messagePage = messageReducer(this._state.messagePage, action);
		this._rerender(this._state);
	}

}

export default store;