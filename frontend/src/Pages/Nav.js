import React from "react";
import logo from '../public/images/steam-logo.png'
import style from './CSS/Nav.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

export default function NavBar() {
    return(
        <div style={style}>
            <nav class="nav">
                <img className="logo" src={logo}></img>
                <a className="link" href="#">Steam</a>
                <a className="link" href="#">Store</a>
                <a className="link" href="#">Community</a>
                <a className="link" href="#">User</a>
                <a className="link" href="#">Chat</a>
                <a className="link" href="#">Support</a>
            </nav>
      </div>
    )
}