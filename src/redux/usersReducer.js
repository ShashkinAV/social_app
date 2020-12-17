const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_CURRENT_PAGE = "SETCURRENTPAGE";
const SET_TOTAL_USER_COUNT = "SETTOTALUSERCOUNT";
const TOGGLE_IS_LOADING = "TOGGLEISLOADING";

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUserCount = (totalCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalCount,
});

let initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
	pageSize: 6,
	isLoading: false,
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
			case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
			};
    default:
      return state;
  }
};
export default usersReducer;
