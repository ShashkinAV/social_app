import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import App from './App';

let posts = [
  {id: 1, msg: 'Lorem ipsun trulala. Hello my firt duddy!'},
  {id: 2, msg: 'Hello World!'},
  {id: 3, msg: 'Lucky day! Good day!!'},
  {id: 4, msg: 'Lorem ipsun trulala. Hello my firt duddy!'}
]

let msgDb = [
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
		id:4,
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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} msgDb={msgDb}/>
  </React.StrictMode>,
  document.getElementById('root')
);
