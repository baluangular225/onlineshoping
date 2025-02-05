import React from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <span className="navbar-language">EN</span>
                    <div className="navbar-searchContainer">
                        <input className="navbar-input" type="text" placeholder="Search" />
                        <IoSearch className="icon" />
                    </div>
                </div>

               <div className="navbar-center">
                   <h1 className="navbar-logo">New Trending Code<span>.</span></h1>
               </div>

               <div className="navbar-right">
                  <Link to="/register"><div className="navbar-menuItem">Register</div></Link>
                  <Link to='/login'><div className="navbar-menuItem">Login</div></Link>
                  <div className="navbar-menuItem">
                    <MdOutlineShoppingCart className="icon" />
                     <span className="cart-badge"></span>
                  </div>
               </div>

            </div>
        </div>
    )
}

export default Navbar;