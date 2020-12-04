import React from "react";
import Post from "../../components/Post/Post";
import SharePostContainer from "../../components/SharePost/SharePostContainer";
import LeftBar from "../../components/LeftBar/LeftBar";

const HomePage = (props) => {
  let posts = props.posts.map((el) => (
    <Post msg={el.msg} key={el.id} id={el.id} />
	));
	
  return (
    <div className="container pt-80">
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <LeftBar />
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <SharePostContainer/>
          {posts}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
