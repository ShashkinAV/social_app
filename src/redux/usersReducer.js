import { usersApi } from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_CURRENT_PAGE = "SETCURRENTPAGE";
const SET_TOTAL_USER_COUNT = "SETTOTALUSERCOUNT";
const TOGGLE_IS_LOADING = "TOGGLEISLOADING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLEISFOLLOWINGPROGRESS";

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
export const setIsFollowingProgress = (isFollowingProgress, userId)=> ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFollowingProgress,
  userId
});

let initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  pageSize: 6,
  isLoading: false,
  isFollowingProgress: []
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
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFollowingProgress
            ? [...state.isFollowingProgress, action.userId]
            : state.isFollowingProgress.filter((id)=>id!== action.userId)
      }
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
export const getUserThunkCreater = (currentPage, pageSize)=> {
return (dispatch) => {
	dispatch(setIsLoading(true));
	usersApi.getUsers(currentPage, pageSize).then(data => {
		dispatch(setIsLoading(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUserCount(data.totalCount));
	});
}
}
export const setUnFollowThunkCreater = (userId)=> {
  return (dispatch)=> {
    dispatch(setIsFollowingProgress(true, userId));
    usersApi.setUnfollow(userId).then(data=> {
      if (data.resultCode === 0) {
        dispatch(unFollow(userId))
      }
      dispatch(setIsFollowingProgress(false, userId));
    })
  }
}
export const setFollowThunkCreater = (userId)=> {
  return (dispatch)=> {
    dispatch(setIsFollowingProgress(true, userId));
    usersApi.setFollow(userId).then(data=> {
      if (data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(setIsFollowingProgress(false, userId));
    })
  }
}


export default usersReducer;
