import React from "react";
import DialogItem from "../components/DialogItem/DialogItem";
import UserBar from "../components/UserBar/UserBar";

const Messages = () => {
  return (
    <>
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
          <DialogItem from="dialog__text from-me" msg="Hello my firt duddy!" />
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
    </>
  );
};
export default Messages;
