import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unFollow,
  setCurrentPage,
  setTotalUserCount,
  setIsLoading,
} from "../../redux/usersReducer";
import UsersPage from "./UsersPage";
import { getUserThunkCreater } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};

const UsersPageContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUserCount,
	setIsLoading,
	getUserThunkCreater
})(UsersPage);

export default UsersPageContainer;
