import React from 'react';


const User = (props) => {
	return (
		<div className="col-lg-6">
			<div className="user">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="user__avatar">
								<img src={props.avatar} alt="User Avatar"className="user__img"/>
								{
									props.followed 
									? <button onClick={()=>{props.unfollow(props.id)}}>Unfollow</button> 
									: <button  onClick={()=>{props.follow(props.id)}}>Follow</button>
								}
							</div>
						</div>
						<div className="col-lg-9">
							<div className="user__data">
								<div className="user__fullname">
								 {props.fullName}
								</div>
								<div className="user__location">
									<div className="user__contry">
										{props.location.country}
									</div>
									<div className="user__city">
									{props.location.city}
									</div>
								</div>
							</div>
							<div className="user__status">
								{props.status}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default User;