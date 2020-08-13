import React from "react";
import CardProfile from "../CardProfile/CardProfile";

const LeftBar = (props) => {
  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <aside className="leftBar">
        <CardProfile />
      </aside>
    </div>
  );
};
export default LeftBar;
