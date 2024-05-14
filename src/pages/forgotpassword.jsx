import React from 'react'
import { Link } from 'react-router-dom'

const Forgotpassword = () => {
    return (
        <>
            <div className="p-3 shadow-sm bg-warning danger-nav osahan-home-header">
                <div className="font-weight-normal mb-0 d-flex align-items-center">
                    <h6 className="fw-normal mb-0 text-dark d-flex align-items-center">
                        <Link className="text-dark me-3 fs-4" to="/signin">
                            <i className="bi bi-chevron-left" />
                        </Link>
                        Forget Password
                    </h6>
                </div>
            </div>
            <div className="p-4">
                <form name="forgetpass" id="forgetpass" autocoplete="off">
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label text-muted small mb-1">
                            E-mail
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-envelope-open-fill" />
                            </span>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter E-Mail Address"
                            />
                        </div>
                    </div>
                    <div className="osahan-footer fixed-bottom p-3 text-center">
                        <button
                            type="submit"
                            className="btn btn-success btn-lg w-100 shadow"
                            id="btnbtn"
                            name="btnbtn"
                        >
                            Forget Password
                        </button>
                        <input type="hidden" name="update_password" />
                    </div>
                </form>
            </div>
        </>

    )
}

export default Forgotpassword