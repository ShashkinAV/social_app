import React from "react";
import LoadingImg from "../../img/loading.gif";


const Preloader = (props) => {
	return (
		<div className="container pt-80">
			<div className="loading-box">
				<img className="loading-box__img" src={LoadingImg} alt="Loading" />
			</div>
		</div>
	)
}
export default Preloader;