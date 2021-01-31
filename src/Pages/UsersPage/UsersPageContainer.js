import { connect } from "react-redux";
import UsersPage from "./UsersPage";
import { getUserThunkCreater, setFollowThunkCreater, setUnFollowThunkCreater  } from "../../redux/usersReducer";
import {AuthRedirectHoc} from "../../Hoc/AuthRedirectHoc";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    isFollowingProgress: state.usersPage.isFollowingProgress
  };
};

export default compose(
    connect(mapStateToProps, {
      getUserThunkCreater,
      setFollowThunkCreater,
      setUnFollowThunkCreater,

    }),
    AuthRedirectHoc,
)(UsersPage)
