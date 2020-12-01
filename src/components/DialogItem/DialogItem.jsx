import React from "react";

const DialogItem = (props) => {
  return (
    <div className="dialog__item">
      <div className={props.from}>{props.msg}</div>
        <div className="date">{props.date}</div>
    </div>
  );
};

export default DialogItem;
