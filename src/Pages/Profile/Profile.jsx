import React from "react";
import Post from "../../components/Post/Post";
import SharePostContainer from "../../components/SharePost/SharePostContainer";
import ProfileBunner from "../../img/profile-banner.jpg";
import Preloader from "../../components/Preloader/Preloader";
import DefaultPic from "../../img/user.jpg";


const Profile = (props)=> {

	if(!props.profile) {
		return <Preloader />
	}
		let posts = props.posts.map((el) => (
			<Post msg={el.msg} key={el.id} id={el.id} />
		));

		return (
			<>
				<div className="profile-bunner-large">
					<img
						src={ProfileBunner}
						alt="Profile Bunner"
						className="profile-bunner-large__img"
					/>
				</div>
				<div className="profile-menu">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-3 col-md-3">
								<div className="profile-img">
									<figure className="profile-picture">
										<img
											src={props.profile.photos.large == null ? DefaultPic : props.profile.photos.large}
											alt="Profile"
											className="profile-picture__img"
										/>
									</figure>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 offset-lg-1">
								<div className="profile-menu-wrapper">
									<div className="profile-menu-inner">
										<nav>
											<ul className="profile-menu__list">
												<li className="profile-menu__item">
													<a href="/profile">Timeline</a>
												</li>
												<li className="profile-menu__item">
													<a href="/profile">About</a>
												</li>
												<li className="profile-menu__item">
													<a href="/profile">Photos</a>
												</li>
												<li className="profile-menu__item">
													<a href="/profile">Friends</a>
												</li>
												<li className="profile-menu__item">
													<a href="/profile">More</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-3">
								<div className="profile-edit-panel">
									<button className="edit-btn">Edit Profile</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 order-2 order-lg-1"></div>
						<div className="col-lg-6 order-1 order-lg-2">
							<SharePostContainer />
							{posts}
						</div>
						<div className="col-lg-3 order-3">RightBar</div>
					</div>
				</div>
			</>
		);

	
};

export default Profile;
