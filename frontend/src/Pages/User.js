import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from '../public/images/Alax.jpg'
import style from '../Pages/CSS/User.css'
// import "bootstrap/dist/js/bootstrap.bundle.min";

export default function User() {
    return(
        <div className="user-home" style={style}>

            <div class="container text-center" className="profile-header">
                <div class="row">
                    <div class="col-sm-8">
                        <img className="profile-pic" src={profilePic} />
                        <h3 className="username">Insert username here</h3>
                        <h4 className="user-level">Insert user's level here</h4>
                    </div>

                    <div class="col-sm-4">
                        <button type="button" className="log-out">Log Out</button>
                </div>

                <div class="container text-center" className="profile-content">
                    <div class="row">
                        <div class="col-sm-8">
                            <h4 className="achievements">Achievements</h4>
                            {/* <p className="user-achievements">insert achievements here</p> */}
                        </div>
                        <div class="col-sm-4">
                            <h4 className="review">Reviews</h4>
                            {/* <p className="user-review">insert reviews here</p> */}
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}