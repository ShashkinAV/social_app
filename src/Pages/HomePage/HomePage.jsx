import React from "react";
import Post from "../../components/Post/Post";
import SharePost from "../../components/SharePost/SharePost";
import LeftBar from "../../components/LeftBar/LeftBar";

let posts = [
  {id: 1, msg: 'Lorem ipsun trulala. Hello my firt duddy!'},
  {id: 2, msg: 'Hello World!'},
  {id: 3, msg: 'Lucky day! Good day!!'},
  {id: 4, msg: 'Lorem ipsun trulala. Hello my firt duddy!'}
]

const HomePage = (props) => {
  let postMsg = posts.map(el => <Post msg={el.msg} key={el.id} id={el.id}/>)
  return (
    <div className="container pt-80">
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <LeftBar />
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <SharePost />
          {postMsg}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
