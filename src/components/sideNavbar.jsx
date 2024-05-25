import React from 'react'
import { Link } from 'react-router-dom';
import avatar from "../../img/avatar.png"

const SideNavbar = () => {

    const token = localStorage.getItem("token")
    if(token && token!=""){
        var name  = localStorage.getItem("cusname");
        var phone = localStorage.getItem("phone");
        var email = localStorage.getItem("email");
      }else{
        window.location.href = "/signin";
      }

    const closeSidebar = () => {
        document.documentElement.classList.remove('hc-nav-yscroll');
        document.body.classList.remove('hc-nav-open');
        var navbar = document.getElementById("leftsideNav");
        
        navbar.classList.remove('nav-open');
        // navbar.style.visibility = 'hidden';
      };
      const Signout = () => {
        localStorage.clear();
        window.location.href = "/signin";
      };


     

      


    return (
        <>
            <nav
                role="navigation"
                className="disable-body hc-nav-1 hc-offcanvas-nav nav-levels-overlap nav-position-left touch-device"
                aria-hidden="true"
                aria-labelledby="hc-nav-1"
                id="leftsideNav"
            >
                <div className="nav-container">
                    <div className="nav-wrapper nav-wrapper-0" data-level="0" data-index="0">
                        <div className="nav-content">
                            <ul role="menu" aria-level="1" className="second-nav">
                                <li>
                                    <div className="nav-item-wrapper">
                                        <a
                                            href="#"
                                            className="bg-success sidebar-user d-flex align-items-center py-4 px-3 border-0 mb-0 nav-item"
                                            tabIndex="0"
                                            role="menuitem"
                                        >
                                            <img
                                                src={avatar}
                                                className="img-fluid rounded-pill me-3"
                                                style={{ width: "50px" }}
                                            />
                                            <div className="text-white">
                                                <h6 className="mb-0">{name}</h6>
                                                <small>{phone}</small>
                                                <br />
                                                <span className="f-10 text-white-50">
                                                    {email}
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-close">
                                    <div className="nav-item-wrapper">
                                        <a href="#" role="menuitem" tabIndex="0">
                                            Close<span></span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="nav-item-wrapper">
                                        <Link
                                            to={"/home"}
                                            className="nav-item"
                                            tabIndex="0"
                                            role="menuitem"
                                        >
                                            <i className="bi bi-house me-2"></i> Home
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-parent">
                                    <div className="nav-item-wrapper">
                                        <Link
                                            to={"/changepassword"}
                                            className="nav-item"
                                            tabIndex="0"
                                            role="menuitem"
                                            aria-controls="menu-lsjo1zd1h7q"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-lock me-2"></i>Change Password
                                            <span className="nav-next"></span>
                                        </Link>
                                    </div>
                                    <div
                                        className="nav-wrapper nav-wrapper-1"
                                        data-level="1"
                                        data-index="0"
                                    >
                                        <div className="nav-content">
                                            <h2>Account</h2>
                                            <ul
                                                role="menu"
                                                aria-level="2"
                                                aria-label="Account"
                                                aria-labelledby="menu-lsjo1zd1h7q"
                                            >
                                                <li className="nav-back">
                                                    <div className="nav-item-wrapper">
                                                        <a href="#" role="menuitem" tabIndex="0">
                                                            Back<span></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="nav-item-wrapper">
                                                        <a
                                                            href="changepass.php"
                                                            className="nav-item"
                                                            tabIndex="0"
                                                            role="menuitem"
                                                        >
                                                            Change Password
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-parent">
                                    <input
                                        type="checkbox"
                                        id="hc-nav-1-1-1"
                                        className="hc-chk"
                                        tabIndex="-1"
                                        data-level="1"
                                        data-index="1"
                                        value="vunc8izry0h"
                                    />
                                    <div className="nav-item-wrapper">
                                        <Link
                                            to="/myprofile"
                                            className="nav-item"
                                            tabIndex="0"
                                            role="menuitem"
                                            aria-controls="menu-vunc8izry0h"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-person me-2"></i> Profile
                                            <span className="nav-next"></span>
                                        </Link>
                                    </div>
                                    <div
                                        className="nav-wrapper nav-wrapper-1"
                                        data-level="1"
                                        data-index="1"
                                    >
                                        <div className="nav-content">
                                            <h2>Profile</h2>
                                            <ul
                                                role="menu"
                                                aria-level="2"
                                                aria-label="Profile"
                                                aria-labelledby="menu-vunc8izry0h"
                                            >
                                                <li className="nav-back">
                                                    <div className="nav-item-wrapper">
                                                        <a href="#" role="menuitem" tabIndex="0">
                                                            Back<span></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="nav-item-wrapper">
                                                        <a
                                                            href="myprofile.php"
                                                            className="nav-item"
                                                            tabIndex="0"
                                                            role="menuitem"
                                                        >
                                                            {" "}
                                                            Manage orders
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="nav-item-wrapper">
                                                        <a
                                                            href="my-order.php"
                                                            className="nav-item"
                                                            tabIndex="0"
                                                            role="menuitem"
                                                        >
                                                            {" "}
                                                            My Order
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-parent">
                                    <input
                                        type="checkbox"
                                        id="hc-nav-1-1-1"
                                        className="hc-chk"
                                        tabIndex="-1"
                                        data-level="1"
                                        data-index="1"
                                        value="vunc8izry0h"
                                    />
                                    <div className="nav-item-wrapper">
                                        <Link
                                            to="/myorder"
                                            className="nav-item"
                                            tabIndex="0"
                                            role="menuitem"
                                            aria-controls="menu-vunc8izry0h"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-list-check me-2"></i> Manage Orders
                                            <span className="nav-next"></span>
                                        </Link>
                                    </div>
                                    <div
                                        className="nav-wrapper nav-wrapper-1"
                                        data-level="1"
                                        data-index="1"
                                    >
                                        <div className="nav-content">
                                            <h2>Manage Orders</h2>
                                            <ul
                                                role="menu"
                                                aria-level="2"
                                                aria-label="Profile"
                                                aria-labelledby="menu-vunc8izry0h"
                                            >
                                                <li className="nav-back">
                                                    <div className="nav-item-wrapper">
                                                        <a href="#" role="menuitem" tabIndex="0">
                                                            Back<span></span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="nav-item-wrapper">
                                                        <a
                                                            href="myprofile.php"
                                                            className="nav-item"
                                                            tabIndex="0"
                                                            role="menuitem"
                                                        >
                                                            {" "}
                                                            My Profile
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="nav-item-wrapper">
                                                        <a
                                                            href="my-order.php"
                                                            className="nav-item"
                                                            tabIndex="0"
                                                            role="menuitem"
                                                        >
                                                            {" "}
                                                            My Order
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul role="menu" aria-level="1" className="bottom-nav">
                                <li className="email" onClick={Signout}>
                                    <div className="nav-item-wrapper">
                                        <a
                                            className="text-danger nav-item text-center"
                                            href="#!"
                                            tabIndex="0"
                                            role="menuitem"
                                        >
                                            <p className="h5 m-0">
                                                <i className="icofont-power text-danger"></i>
                                            </p>
                                            Signout
                                        </a>
                                    </div>
                                </li>
                                <li className="closesideNav" id="closesideNav" onClick={closeSidebar}>
                                    <div className="nav-item-wrapper">
                                        <a
                                            className="text-success nav-item text-center"
                                            href="#!"
                                            tabIndex="0"
                                            role="menuitem"
                                        >
                                            <p className="h5 m-0">
                                                <i className="icofont-close-line text-success"></i>
                                            </p>
                                            Close
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default SideNavbar