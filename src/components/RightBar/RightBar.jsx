import React from "react";
import CardProfile from "../CardProfile/CardProfile";

const RightBar = (props) => {
  return (
    <div className="col-lg-3 order-3">
      <aside className="rightBar">
        <CardProfile />
      </aside>
    </div>
  );
};
export default RightBar;
