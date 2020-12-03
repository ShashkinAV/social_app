import React from "react";

const AddMessage = (props) => {

  //Ссылка на textarea
  let newMsgElement = React.createRef();

  //Отправка в state
  let addMsg = () => {
		props.addMsg();
	};

  //Отслеживание изменения в textarea
  let onPostChange = () => {
    let text = newMsgElement.current.value;
    props.updateMessageTextActionCreater(text);
  };

  return (
    <div className="dialog__add">
      <textarea
        ref={newMsgElement}
        onChange={onPostChange}
        className="share-content__field"
        value={props.newMsgText}
      />
      <button onClick={addMsg} className="dialog__btn btn-share">
        Send
      </button>
    </div>
  );
};

export default AddMessage;
