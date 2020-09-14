import { rerender } from "../render";

let state = {
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
		]
	},
		posts: [
			{ id: 1, msg: 'Lorem ipsun trulala. Hello my firt duddy!' },
			{ id: 2, msg: 'Hello World!' },
			{ id: 3, msg: 'Lucky day! Good day!!' },
			{ id: 4, msg: 'Lorem ipsun trulala. Hello my firt duddy!' }
		],
		users: [
			{id: 1, name: "Niko"},
			{id: 2, name: "Valeria"},
			{id: 3, name: "Viktor"},
			{id: 4, name: "Olivia"},
			{id: 5, name: "Antonio"},
		],
		newPostText: 'Default text'
}
export let addPost = (postMsg) => {
	let newPost = {
		id: 5,
		msg: postMsg
	}
	state.posts.push(newPost);
	rerender(state);
}
export let updatePost = (currentText)=> {
	state.newPostText = currentText;
	rerender(state);
}
export default state;