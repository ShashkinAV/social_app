import React from 'react';
import User from '../../components/User/User';

const UsersPage = (props)=> {

	if(props.users.length === 0) {
		props.setUsers ([
			{ id: 1, 
				avatarUrl: 'https://thumbs.dfs.ivi.ru/storage31/contents/0/a/1228c8bfae00ce8e1218cd360f9736.jpg',
				followed: true, fullName: 'Dmitriy', status: 'Lorem ipsun trulala. Hello my firt duddy!', location: {country: 'Russia', city: 'Moscow'} },
			{ id: 2, 
				avatarUrl: 'https://thumbs.dfs.ivi.ru/storage31/contents/0/a/1228c8bfae00ce8e1218cd360f9736.jpg',
				followed: false, fullName: 'Ivan', status: 'Hello World!', location: {country: 'Moldavia', city: 'Beshkek'} },
			{ id: 3, 
				avatarUrl: 'https://thumbs.dfs.ivi.ru/storage31/contents/0/a/1228c8bfae00ce8e1218cd360f9736.jpg',
				followed: true, fullName: 'John', status: 'Lucky day! Good day!!', location: {country: 'Turkey', city: 'Stambul'} },
			{ id: 4, 
				avatarUrl: 'https://thumbs.dfs.ivi.ru/storage31/contents/0/a/1228c8bfae00ce8e1218cd360f9736.jpg',
				followed: false, fullName: 'Andrew', status: 'Lorem ipsun trulala. Hello my firt duddy!', location: {country: 'Russia', city: 'Sochi'} }
			]);
	}


	let users = props.users.map((user)=> {
		return <User 
							id={user.id} 
							avatar={user.avatarUrl}
							followed={user.followed}
							follow={props.follow}
							unfollow={props.unFollow}
							key={user.id}
							fullName={user.fullName}
							location={user.location}
							status={user.status}
						/> 
	})
	return (
		<div className="container pt-80">
				<div className="row">
					
					{users}
					
				</div>
		</div>
	)
}

export default UsersPage;