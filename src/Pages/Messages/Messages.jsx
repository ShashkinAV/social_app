import React from "react";
import DialogItem from "../../components/DialogItem/DialogItem";
import UserBar from "../../components/UserBar/UserBar";
import LeftBar from "../../components/LeftBar/LeftBar";

const Messages = (props) => {

  let text = React.createRef();
  let addMsg = () => {
	  let textValue = text.current.value;
	  alert(textValue);
  }
  let items = props.messagePage.msg.map(
    (el) => {

      return <DialogItem from={"dialog__text " + el.from} msg={el.msg} key={el.id} date={el.date} />;
    }
  )
  return (
    <div className="container pt-80">
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <LeftBar />
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <div className="dialog">
          {items}
		  <div className="dialog__add">
			  <textarea  ref={ text } className="share-content__field"></textarea>
			  <button onClick= {addMsg} className="dialog__btn btn-share">Send</button>
		  </div>
          </div>
        </div>
        <div className="col-lg-3 order-3">
         <UserBar users={props.users}/>
        </div>
      </div>
    </div>
  );
};
export default Messages;
