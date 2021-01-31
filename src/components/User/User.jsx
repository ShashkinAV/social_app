import React from 'react';
import { NavLink } from "react-router-dom";

const User = (props) => {
	return (
		<div className="col-lg-6 col-md-6">
			<div className="user">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="user__avatar">
								<NavLink exact className="menu__link" to={"/profile/" + props.id}>
									<img src={props.photo === null ? "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" : props.photo} alt="User Avatar" className="user__img" />
								</NavLink>

								{
									props.followed
										? <button className="user__btn red" disabled={props.isFollowing.some(id=> id ===props.id)} onClick={() => {
											props.unFollow(props.id);
										}}>Unfollow</button>
										: <button className="user__btn" disabled={props.isFollowing.some(id=> id ===props.id)} onClick={() => {
											props.follow(props.id);
										}}>Follow</button>
								}

							</div>
						</div>
						<div className="col-lg-9">
							<div className="user__data">
								<div className="user__fullname">
									{props.name}
								</div>
								<div className="user__location">
									<div className="user__contry">
										{/* {props.location.country} */}
									</div>,
									<div className="user__city">
										{/* {props.location.city} */}
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