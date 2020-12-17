import React from 'react';
import User from '../../components/User/User';
import * as axios from 'axios';
import Preloader from '../../components/Preloader/Preloader';

class UsersPage extends React.Component {

	componentDidMount() {
		this.props.setIsLoading(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setIsLoading(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUserCount(response.data.totalCount);
			});
	}

	onChangePage = (currentPage) => {
		this.props.setCurrentPage(currentPage);
		this.props.setIsLoading(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setIsLoading(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUserCount(response.data.totalCount);
			});
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pagesArr = [];

		for (let i = 1; i <= pagesCount && i <= 10; i++) {
			pagesArr.push(i);
		}

		return (<>
			{this.props.isLoading 
				? <Preloader />
				: <div className="container pt-80">
				<div className="row">
					<div className="col-lg-12">
						<div className="pagination">
							<ul className="pagination__list">
								{
									pagesArr.map(p => {
										return (
											<li className="pagination__item">
												<a href="#1" onClick={(e)=> {e.preventDefault(); this.onChangePage(p)}} className={this.props.currentPage === p ? "pagination__link pagination__current-link" : "pagination__link"}>{p}</a>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>

					{
						this.props.users.map((u) => {
							return <>
							<User
								id={u.id}
								followed={u.followed}
								follow={this.props.follow}
								unFollow={this.props.unFollow}
								name={u.name}
								photo={u.photos.small}
								status={u.status} />
								</>
						})
					}

				</div>
			</div>
}
			</>
		)
	}
}

export default UsersPage;	