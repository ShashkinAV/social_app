import React from "react";
import Post from "../components/Post/Post";
import SharePost from "../components/SharePost/SharePost";

const HomePage = (props) => {
  return (
    <>
      <SharePost />
      <Post />
    </>
  );
};
export default HomePage;
