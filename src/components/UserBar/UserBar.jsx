import React from "react";
import UserItem from "../UserItem/UserItem";

const UserBar = (props) => {

	let users = props.users.map(
		(el) => {
			return <UserItem key={el.id} id={el.id} name={el.name} />
		}
	)
  return (
      <aside className="rightBar">
        <div className="rightBar__title">
          <h3>Friends</h3>
        </div>
        <ul className="users">
         {users}
        </ul>
      </aside>
  );
};
export default UserBar;
