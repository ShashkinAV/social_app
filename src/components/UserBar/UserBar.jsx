import React from "react";
import UserItem from "../UserItem/UserItem";

const UserBar = (props) => {

	let UsersDb = [
		{id: 1, name: "Niko"},
		{id: 2, name: "Valeria"},
		{id: 3, name: "Viktor"},
		{id: 4, name: "Olivia"},
	]
	let Users = UsersDb.map(
		(el) => {
			return <UserItem id={el.id} name={el.name} />
		}
	)
  return (
      <aside className="rightBar">
        <div className="rightBar__title">
          <h3>Users</h3>
        </div>
        <ul className="users">
         {Users}
        </ul>
      </aside>
  );
};
export default UserBar;
