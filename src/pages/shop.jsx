import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import GridProduct from '../components/gridProduct';

const Shop = () => {
    const { cat, subcat, page } = useParams();
    return (
        <>
            <div
                className="p-3 shadow-sm bg-warning danger-nav osahan-home-header sticky-top"
                style={{ backgroundColor: "#ffffff !important" }}
            >
                <div className="font-weight-normal mb-0 d-flex align-items-center">
                    <a href="#!" className="me-3 text-dark fs-5">
                        <i className="bi bi-chevron-left" />
                    </a>
                    <h4 className="m-0 fw-bold text-black">
                        Utsarva
                        <span className="text-success" style={{ color: "#ebb314 !important" }}>
                            Jewels
                        </span>
                    </h4>
                    <div className="ms-auto d-flex align-items-center">
                        <a
                            href="#!"
                            data-bs-toggle="modal"
                            data-bs-target="#barcodeModal"
                            
                            className="me-3 text-dark fs-5"
                        >
                            <i className="bi bi-qr-code-scan" />
                        </a>
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            className="me-3 text-dark fs-5"
                        >
                            <i className="bi bi-funnel" />
                        </a>
                        <a className="toggle osahan-toggle fs-4 text-dark ms-auto" href="#">
                            <i className="bi bi-list" />
                        </a>
                    </div>
                </div>
                <div className="input-group input-group-lg bg-white border-0 shadow-sm rounded overflow-hiddem mt-3">
                    <span className="input-group-text bg-white border-0">
                        <i className="bi bi-search text-muted" />
                    </span>
                    <input
                        type="text"
                        className="form-control border-0 ps-0"
                        placeholder="Search for Products.."
                    />
                </div>
            </div>
            <input type="hidden" id="category" defaultValue="<?php echo $cId ?>" />
            <input type="hidden" id="subcategory" defaultValue="<?php echo $subId ?>" />
            <input type="hidden" id="pagination" defaultValue={0} />
            <input
                type="hidden"
                id="maxpage"
                defaultValue="<?php echo floor($row['TCOUNT']/12)+1 ?>"
            />
            <div className="osahan-listing">
                <div className="osahan-listing p-0 m-0 row border-top">
                    <div className="p-3 border-bottom w-100">
                        <h6 className="m-0 fw-bold d-flex align-items-center">
                            {cat}
                            <b>
                                /<b> {subcat}</b>
                            </b>
                        </h6>
                        <b>
                            <b></b>
                        </b>
                    </div>
                    <b>
                        <b>
                            <div className="filter_data">
                                <GridProduct cat={cat} subcat={subcat} page={1} />
                            </div>
                        </b>
                    </b>
                </div>
                <b>
                    <b></b>
                </b>
            </div>
            <b>
                <b>
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered m-0">
                            <div className="modal-content modal-content rounded-0 border-0 vh-100">
                                <div className="modal-header">
                                    <h6 className="modal-title fw-bold" id="exampleModalLabela">
                                        Sort by
                                    </h6>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Weight Range
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body" id="filter-group1"></div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingtwo">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapsetwo"
                                                    aria-expanded="true"
                                                    aria-controls="collapsetwo"
                                                >
                                                    UOM
                                                </button>
                                            </h2>
                                            <div
                                                id="collapsetwo"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingtwo"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body" id="filter-group2"></div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingthree">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapsethree"
                                                    aria-expanded="true"
                                                    aria-controls="collapsethree"
                                                >
                                                    Occasional
                                                </button>
                                            </h2>
                                            <div
                                                id="collapsethree"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingthree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body" id="filter-group5"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex align-items-center justify-content-between fixed-bottom">
                                    <button
                                        type="button"
                                        className="col btn btn-outline-success"
                                        data-bs-dismiss="modal"
                                    >
                                        CLEAR ALL
                                    </button>
                                    <button
                                        type="button"
                                        className="col btn btn-success"
                                        data-bs-dismiss="modal"
                                    >
                                        APPLY FILTER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed-bottom shadow-sm osahan-footer p-3">
                        <div className="row m-0 footer-menu overflow-hiddem bg-black rounded shadow links">
                            <div className="col-4 p-0 text-center">
                                <a className="p-2 d-inline-block text-white w-100" href="home.php">
                                    <span>
                                        <i className="bi bi-house h4" />
                                    </span>
                                    <p className="m-0 small">HOME</p>
                                </a>
                            </div>
                            <div className="col-4 p-0 text-center">
                                <a className="p-2 d-inline-block text-white w-100" href="cart.php">
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
                                        >
                                            {/*?php echo $count ?*/}
                                        </b>
                                    </p>
                                </a>
                            </div>
                            <div className="col-4 p-0 text-center">
                                <a
                                    className="p-2 d-inline-block text-white w-100"
                                    href="myprofile.php"
                                >
                                    <span>
                                        <i className="bi bi-person h4" />
                                    </span>
                                    <p className="m-0 small">ACCOUNT</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <nav id="main-nav">
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
                                            {/*?php echo getsingleData('customer','cus_name','cus_id',$customerid) ?*/}
                                        </h6>
                                        <small>
                                            {/*?php echo getsingleData('customer','cus_mobile','cus_id',$customerid) ?*/}
                                        </small>
                                        <br />
                                        <span className="f-10 text-white-50">
                                            {/*?php echo getsingleData('customer','cus_email','cus_id',$customerid) ?*/}
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="home.php">
                                    <i className="bi bi-house me-2" /> Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bi bi-lock me-2" /> Account
                                </a>
                                <ul>
                                    <li>
                                        <a href="changepass.php">Change Password</a>
                                    </li>
                                    {/*li><a href="javascript:void(0">Verification</a></li*/}
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bi bi-person me-2" /> Profile
                                </a>
                                <ul>
                                    <li>
                                        <a href="myprofile.php"> My Profile</a>
                                    </li>
                                    <li>
                                        <a href="my-order.php"> My Order</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="bottom-nav">
                            <li className="email">
                                <a
                                    className="text-success nav-item text-center"
                                    href="signout.php"
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
                </b>
            </b>
        </>

    )
}

export default Shop