import React from 'react'
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    const name = localStorage.getItem("cusname");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");

    return (
        <>
            <nav role='navigation'  id="main-nav" className="hc-offcanvas-nav hc-nav-1 nav-levels-overlap nav-position-left disable-body touch-device">
                <ul className="second-nav">
                    <li>
                        <a
                            href="#"
                            className="bg-success sidebar-user d-flex align-items-center py-4 px-3 border-0 mb-0"
                        >
                            <img
                                src="img/avatar.png"
                                className="img-fluid rounded-pill me-3"
                                style={{ width: 50 }}
                            />
                            <div className="text-white">
                                <h6 className="mb-0">
                                    {name}
                                </h6>
                                <small>
                                    {phone}
                                </small>
                                <br />
                                <span className="f-10 text-white-50">
                                    {email}
                                </span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <Link to="/home">
                            <i className="bi bi-house me-2" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <i className="bi bi-lock me-2" /> Account
                        </Link>
                        <ul>
                            <li>
                                <a href="/changepassword">Change Password</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-person me-2" /> Profile
                        </a>
                        <ul>
                            <li>
                                <a href="/myprofile"> My Profile</a>
                            </li>
                            <li>
                                <a href="/myorder"> My Order</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="bottom-nav">
                    <li className="email">
                        <a
                            className="text-success nav-item text-center"
                            href="#!"
                            tabIndex={0}
                            role="menuitem"
                        >
                            <p className="h5 m-0">
                                <i className="icofont-power text-success" />
                            </p>
                            Signout
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideNavbar