import React from "react";
import Post from "../components/Post/Post";
import SharePost from "../components/SharePost/SharePost";
import LeftBar from "../components/LeftBar/LeftBar";

const HomePage = (props) => {
  return (
    <div className="container pt-80">
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <LeftBar />
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <SharePost />
          <Post msg="Lorem ipsun trulala. Hello my firt duddy!" />
          <Post msg="Hello World!" />
          <Post msg="Lucky day! Good day!!" />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
