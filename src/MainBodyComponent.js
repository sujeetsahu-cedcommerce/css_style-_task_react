import React from "react";
import { NavLink } from "react-router-dom";
function MainBodyComponent() {
  return (
    <div className="main_body_container">
      <div className="left_container">
        <p style={{fontSize:"4vw",fontWeight:"bolder",color:"rgb(21, 145, 145)"}}>ONLINE</p>
        <p style={{fontSize:"4vw",fontWeight:"lighter"}}>EDUCATION</p>
        <p style={{fontSize:"1.2vw"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, including versions of Lorem Ipsum.
        </p>
        <div className="button_learn_more">
           <NavLink to="" style={{fontSize:"1.5vw",textDecoration:"none",borderRadius:"5rem",padding:"0.6vw",color:"black",border:"1px solid rgb(21, 145, 145)",background:"rgb(21, 145, 145)"}}>Learn more</NavLink>
        </div>
      </div>
      <div className="right_container">
        <img src="crop_image_study.png" alt="" />
      </div>
    </div>
  );
}

export default MainBodyComponent;
