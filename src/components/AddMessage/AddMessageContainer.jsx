import { connect } from "react-redux";
import { addMessageActionCreater, updateMessageTextActionCreater } from "../../redux/messageReducer";
import AddMessage from "./AddMessage";


const mapStateToProps = (state)=> {
	return {
		newMsgText: state.messagePage.newMsgText
	}

}
const mapDispatchToProps = (dispatch)=> {
	return {
		updateMessageTextActionCreater: (text)=> {
			dispatch(updateMessageTextActionCreater(text));
		},
		addMsg: ()=> {
			dispatch(addMessageActionCreater());
		}
	}
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;
