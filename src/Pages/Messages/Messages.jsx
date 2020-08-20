import React from "react";
import DialogItem from "../../components/DialogItem/DialogItem";
import UserBar from "../../components/UserBar/UserBar";
import LeftBar from "../../components/LeftBar/LeftBar";

let MessagesDb = [
	{
		id: 1, 
		from: "from-me",
		msg: "Lorem ipsun trulala. Hello my firt duddy!"
	},
	{
		id: 2,
		from: "from-them",
		msg: "LOLOLOLLOLOLOLO!!!!!"
	},
	{
		id: 3,
		from: "from-me",
		msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis commodi ex, tempora libero laudantium facilis enim architecto numquam voluptate quidem iure facere vero, hic, dignissimos inventore minima possimus mollitia assumenda."
	}
]


const Messages = (props) => {
	let dialogItems = MessagesDb.map(item=> <DialogItem from={"dialog__text " + item.from} msg={item.msg} key={item.id}/>)
  return (
    <div className="container pt-80">
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <LeftBar />
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <div className="dialog">
            {dialogItems}
          </div>
        </div>
        <div className="col-lg-3 order-3">
          <UserBar />
        </div>
      </div>
    </div>
  );
};
export default Messages;
