const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_CURRENT_PAGE = "SETCURRENTPAGE";
const SET_TOTAL_USER_COUNT = "SETTOTALUSERCOUNT";

export const followAc = (userId) => ({ type: FOLLOW, userId });
export const unFollowAc = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAc = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAc = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUserCountAc = (totalCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalCount,
});

let initialState = {
  users: [],
  currentPage: 8,
  totalUsersCount: 0,
  pageSize: 5,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    default:
      return state;
  }
};
export default usersReducer;
