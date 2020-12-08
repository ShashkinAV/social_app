import { connect } from 'react-redux';
import { followAc, setUsersAc, unFollowAc } from '../../redux/usersReducer';
import UsersPage from './UsersPage';

const mapStateToProps = (state)=> {
	return {
		users: state.usersPage.users
	}
}
const mapDispatchToProps = (dispatch)=> {
	return {
		follow: (userId)=> {
			dispatch(followAc(userId));
		},
		unFollow: (userId)=> {
			dispatch(unFollowAc(userId));
		},
		setUsers: (users)=> {
			dispatch(setUsersAc(users)); 
		}
	}
}

const  UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer;