import React from 'react';
import User from '../../components/User/User';
import * as axios from 'axios';

class UsersPage extends React.Component {

	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {this.props.setUsers(response.data.items);})
	}
	

	render() {
		return (
		<div className="container pt-80">
			<div className="row">
				
			{
				this.props.users.map((u) => {
					return <User 
						id={u.id} 
						followed={u.followed} 
						follow={this.props.follow} 
						unFollow={this.props.unFollow}  
						name={u.name} 
						photo={u.photos.small} 
						status={u.status}/>
				})
			}
				
			</div>
		</div>
		)}
}

export default UsersPage;