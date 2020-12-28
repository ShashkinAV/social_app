import React from 'react';
import User from '../../components/User/User';
import Preloader from '../../components/Preloader/Preloader';
import { getUsers } from '../../api/api';

class UsersPage extends React.Component {

	componentDidMount() {
		this.props.setIsLoading(true);
		getUsers(this.props.currentPage, this.props.pageSize).then(data => {
																			this.props.setIsLoading(false);
																			this.props.setUsers(data.items);
																			this.props.setTotalUserCount(data.totalCount);
			});
	}

	onChangePage = (currentPage) => {
		this.props.setCurrentPage(currentPage);
		this.props.setIsLoading(true);
		getUsers(currentPage, this.props.pageSize)
			.then(data => {
				this.props.setIsLoading(false);
				this.props.setUsers(data.items);
				this.props.setTotalUserCount(data.totalCount);
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
											<li className="pagination__item" >
												<a href="#1" key={p} onClick={(e)=> {e.preventDefault(); this.onChangePage(p)}} className={this.props.currentPage === p ? "pagination__link pagination__current-link" : "pagination__link"}>{p}</a>
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
								key={u.id}
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