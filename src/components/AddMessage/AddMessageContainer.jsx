import { connect } from "react-redux";
import { addMessageActionCreater, updateMessageTextActionCreater } from "../../redux/messageReducer";
import AddMessage from "./AddMessage";

// const AddMessageContainer = (props) => {


//   //Отправка в state
//   let addMsg = () => {
//     props.dispatch(addMessageActionCreater());
//   };

//   //Отслеживание изменения в textarea
//   let onPostChange = (text) => {
//     props.dispatch(updateMessageTextActionCreater(text));
//   };

//   return (
//     <AddMessage addMsg={addMsg} updateMessageTextActionCreater={onPostChange} newMsgText={props.newMsgText}/>
//   );
// };

const mapStateToProps = (state)=> {
	return {
		newMsgText: state.newMsgText
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
