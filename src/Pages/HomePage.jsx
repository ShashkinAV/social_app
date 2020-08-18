import React from "react";
import Post from "../components/Post/Post";
import SharePost from "../components/SharePost/SharePost";

const HomePage = (props) => {
  return (
	<div className="col-lg-6 order-1 order-lg-2">
      <SharePost />
      <Post msg="Lorem ipsun trulala. Hello my firt duddy!" />
      <Post msg="Hello World!" />
      <Post msg="Lucky day! Good day!!" />
      </div>
  );
};
export default HomePage;
