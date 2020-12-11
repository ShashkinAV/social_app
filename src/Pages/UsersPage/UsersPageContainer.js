import { connect } from "react-redux";
import {
  followAc,
  setUsersAc,
  unFollowAc,
  setCurrentPageAc,
  setTotalUserCountAc,
} from "../../redux/usersReducer";
import UsersPage from "./UsersPage";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAc(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowAc(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAc(currentPage));
    },
    setTotalUserCount: (totalCount) => {
      dispatch(setTotalUserCountAc(totalCount));
    },
  };
};

const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);

export default UsersPageContainer;
