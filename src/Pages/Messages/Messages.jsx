import React from "react";
import DialogItem from "../../components/DialogItem/DialogItem";
import UserBar from "../../components/UserBar/UserBar";
import LeftBar from "../../components/LeftBar/LeftBar";

const Messages = (props) => {
	let dialogItems = props.msgDb.map(item=> <DialogItem from={"dialog__text " + item.from} msg={item.msg} key={item.id} date={item.date}/>)
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
