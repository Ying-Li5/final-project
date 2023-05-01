import React from "react";
import logo from '../../public/images/steam-logo.png'
import style from './Nav.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
    return(
        <div style={style}>
            <div class="topnav">
                <img className="logo" src={logo}></img>
                <a className="link" href="/home">Home</a>
                <a className="link" href="#">Store</a>
                <a className="link" href="#">Community</a>
                <a className="link" href="/user">User</a>
                <a className="link" href="#">Chat</a>
                <a className="link" href="#">Support</a>
                <a className="link" href="/login">Login</a>
                <input type="text" className="searchbar" placeholder="Search.." />
            </div>
      </div>
    )
}