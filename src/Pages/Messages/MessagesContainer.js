import Messages from "./Messages";
import { connect } from "react-redux";

let mapStateToProps = (state)=> {
	return {
		msg: state.messagePage.msg,
		newMsgText: state.newMsgText,
		users: state.messagePage.users,
	}
}

const MessagesContainer = connect(mapStateToProps)(Messages);


export default MessagesContainer;