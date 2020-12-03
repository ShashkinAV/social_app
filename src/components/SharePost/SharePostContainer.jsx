import SharePost from "./SharePost";
import {
  addPostActionCreater,
  updatePostActionCreater,
} from "../../redux/homeReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.homePage.newPostText
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreater());
    },
    updatePostActionCreater: (text) => {
      let action = updatePostActionCreater(text);
      dispatch(action);
    },
  };
};
const SharePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SharePost);

export default SharePostContainer;
