import React from "react";
import DialogItem from "../components/DialogItem/DialogItem";

const Messages = () => {
  return (
    <div className="dialog">
      <DialogItem
        from="dialog__text from-me"
        msg="Lorem ipsun trulala. Hello my firt duddy!"
      />
      <DialogItem from="dialog__text from-them" msg="LOLOLOLLOLOLOLO!!!!!" />
      <DialogItem from="dialog__text from-me" msg="Hello my firt duddy!" />
      <DialogItem from="dialog__text from-them" msg="Lorem ipsun trulala." />
      <DialogItem
        from="dialog__text from-me"
        msg="Lorem ipsun trulala. Hello my firt duddy!"
      />
    </div>
  );
};
export default Messages;
