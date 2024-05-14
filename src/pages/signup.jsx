import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const token = localStorage.getItem("token");
        if(token && token!=""){
            window.location.href="/home";
        }
        
    return (
        <>
            <div className="p-3 shadow-sm bg-warning danger-nav osahan-home-header">
                <div className="font-weight-normal mb-0 d-flex align-items-center">
                    <h6 className="fw-normal mb-0 text-dark d-flex align-items-center">
                        <Link className="text-dark me-3 fs-4" to="/landing">
                            <i className="bi bi-chevron-left" />
                        </Link>
                        Sign Up
                    </h6>
                </div>
            </div>
            <div className="p-4">
                <form name="signupform" id="signupform" autocomplte="off">
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="Customername"
                            className="form-label text-muted small mb-1"
                        >
                            Customer Name
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-person-circle text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Customer Name"
                                name="Customername"
                                id="Customername"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="customerMobile"
                            className="form-label text-muted small mb-1"
                        >
                            Mobile
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-phone text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                name="customerMobile"
                                id="customerMobile"
                                placeholder="Phone No"
                                required=""
                            />
                        </div>
                    </div>
                    <br />
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="customerType"
                            className="form-label text-muted small mb-1"
                        >
                            Select Customer
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-check2 text-muted" />
                            </span>
                            <select
                                className="form-control"
                                id="customerType"
                                name="customerType"
                                required=""
                            >
                                <option value="" selected="" disabled="">
                                    --Select--
                                </option>
                                {/*?php echo customertype(0) ?*/}
                            </select>
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="Companyname"
                            className="form-label text-muted small mb-1"
                        >
                            Company Name
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-pencil text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                name="Companyname"
                                id="Companyname"
                                placeholder="Company Name"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label htmlFor="address" className="form-label text-muted small mb-1">
                            Address
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-geo-alt-fill text-muted" />
                            </span>
                            <textarea
                                className="form-control"
                                name="address"
                                id="address"
                                placeholder="Enter Your Address"
                                required=""
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="customerPhone"
                            className="form-label text-muted small mb-1"
                        >
                            TelePhone{" "}
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-phone text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                name="customerPhone"
                                id="customerPhone"
                                placeholder="TelePhone No"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="customerCity"
                            className="form-label text-muted small mb-1"
                        >
                            City{" "}
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-building text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                name="customerCity"
                                id="customerCity"
                                placeholder="Enter City Name"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="customerWebsite"
                            className="form-label text-muted small mb-1"
                        >
                            Website{" "}
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-input-cursor-text text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                name="customerWebsite"
                                id="customerWebsite"
                                placeholder="https://example.com/"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="customerEmail"
                            className="form-label text-muted small mb-1"
                        >
                            E-Mail
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-envelope text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                name="customerEmail"
                                id="customerEmail"
                                placeholder="E-Mail"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="customerPan"
                            className="form-label text-muted small mb-1"
                        >
                            Pan-No
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-pencil-square text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                style={{ textTransform: "uppercase" }}
                                name="customerPan"
                                id="customerPan"
                                placeholder="PAN No"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label htmlFor="panAttach" className="form-label text-muted small mb-1">
                            Pan-Attach
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-card-heading text-muted" />
                            </span>
                            <input
                                type="file"
                                className="form-control"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onchange="show(this)"
                                name="panAttach"
                                id="panAttach"
                                placeholder="PAN No"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label
                            htmlFor="customerGst"
                            className="form-label text-muted small mb-1"
                        >
                            GST-No
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-pencil-square text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                style={{ textTransform: "uppercase" }}
                                name="customerGst"
                                id="customerGst"
                                placeholder="GST No"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label htmlFor="gstAttach" className="form-label text-muted small mb-1">
                            GST-Attach
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-card-heading text-muted" />
                            </span>
                            <input
                                type="file"
                                className="form-control"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onchange="show(this)"
                                name="gstAttach"
                                id="gstAttach"
                                placeholder="GST No"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <label htmlFor="password" className="form-label text-muted small mb-1">
                            Password
                        </label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-key-fill text-muted" />
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <h6>Newsletter</h6>
                        <label className="form-label text-muted small mb-1">Subscribe</label>
                        <div
                            className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem"
                            style={{ display: "flex" }}
                        >
                            <br />
                            <br />
                            <label className="radio-inline" style={{ paddingLeft: 60 }}>
                                <input type="radio" name="newsletter" defaultValue={1} />
                                Yes
                            </label>
                            <label className="radio-inline" style={{ paddingLeft: 60 }}>
                                <input
                                    type="radio"
                                    name="newsletter"
                                    defaultValue={0}
                                    defaultChecked="checked"
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className="pull-right">
                            <input type="checkbox" name="agree" defaultValue={1} />
                            &nbsp; I have read and agree to the{" "}
                            <a href="#!" className="agree">
                                <b>Privacy Policy</b>
                            </a>
                            <input type="hidden" id="register_submit" name="register_submit" />
                            <br />
                            <br />
                            <center>
                                <button
                                    type="submit"
                                    id="submit"
                                    name="submit"
                                    className="btn btn-primary"
                                >
                                    Register
                                </button>
                            </center>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Signup