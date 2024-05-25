import React from 'react'
import { Link } from 'react-router-dom'

const BottomNavbar = () => {
    return (
        <div className="fixed-bottom shadow-sm osahan-footer p-3">
            <div className="row m-0 footer-menu overflow-hiddem bg-black rounded shadow links">
                <div className="col-4 p-0 text-center">
                    <Link className="p-2 d-inline-block text-warning w-100" to="/home">
                        <span>
                            <i className="bi bi-house h4" />
                        </span>
                        <p className="m-0 small">HOME</p>
                    </Link>
                </div>
                <div className="col-4 p-0 text-center">
                    <Link className="p-2 d-inline-block text-white w-100" to="/cart">
                        <span>
                            <i className="bi bi-basket h4" />
                        </span>
                        <p className="m-0 small">
                            CART{" "}
                            <b
                                style={{
                                    padding: 5,
                                    background: "#ebb314",
                                    borderRadius: 60,
                                    fontSize: 10
                                }}
                                id="cartCount"
                            >{localStorage.getItem("cartCount")}
                            </b>
                        </p>
                    </Link>
                </div>
                <div className="col-4 p-0 text-center">
                    <Link className="p-2 d-inline-block text-white w-100" to="/myprofile">
                        <span>
                            <i className="bi bi-person h4" />
                        </span>
                        <p className="m-0 small">ACCOUNT</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BottomNavbar