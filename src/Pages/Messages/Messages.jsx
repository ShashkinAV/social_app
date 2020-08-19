import React from "react";
import DialogItem from "../../components/DialogItem/DialogItem";
import UserBar from "../../components/UserBar/UserBar";
import LeftBar from "../../components/LeftBar/LeftBar";

const Messages = (props) => {
  return (
    <div className="container pt-80">
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <LeftBar />
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <div className="dialog">
            <DialogItem
              from="dialog__text from-me"
              msg="Lorem ipsun trulala. Hello my firt duddy!"
            />
            <DialogItem
              from="dialog__text from-them"
              msg="LOLOLOLLOLOLOLO!!!!!"
            />
            <DialogItem
              from="dialog__text from-me"
              msg="Hello my firt duddy!"
            />
            <DialogItem
              from="dialog__text from-them"
              msg="Lorem ipsun trulala."
            />
            <DialogItem
              from="dialog__text from-me"
              msg="Lorem ipsun trulala. Hello my firt duddy!"
            />
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
