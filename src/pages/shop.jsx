import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import GridProduct from '../components/gridProduct';
import SideNavbar from '../components/sideNavbar'
import BottomNavbar from '../components/bottomNavbar';


const Shop = () => {
    const goBack = (() => {
        history.back();
    })

    const openSidebar = () => {
        document.documentElement.classList.add('hc-nav-yscroll');
        document.body.classList.add('hc-nav-open');
        var navbar = document.getElementById("leftsideNav");

        navbar.classList.add('nav-open');
        navbar.style.visibility = 'visible';
    };

    const { cat, subcat, page } = useParams();
    var cc = 0;
    cc = localStorage.getItem("cartCount");

    return (
        <>
            <SideNavbar />
            <div
                className="p-3 shadow-sm bg-warning danger-nav osahan-home-header sticky-top"
                style={{ backgroundColor: "#ffffff !important" }}
            >
                <div className="font-weight-normal mb-0 d-flex align-items-center">
                    <a href="#!" className="me-3 text-dark fs-5">
                        <i className="bi bi-chevron-left" onClick={goBack} />
                    </a>
                    <h4 className="m-0 fw-bold text-black">
                        Utsarva
                        <span className="text-success" style={{ color: "#ebb314 !important" }}>
                            Jewels
                        </span>
                    </h4>
                    <div className="ms-auto d-flex align-items-center">
                        {/* <a
                            href="#!"
                            data-bs-toggle="modal"
                            data-bs-target="#barcodeModal"
                            
                            className="me-3 text-dark fs-5"
                        >
                            <i className="bi bi-qr-code-scan" />
                        </a> */}
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            className="me-3 text-dark fs-5"
                        >
                            <i className="bi bi-funnel" />
                        </a>
                        <a className="toggle osahan-toggle fs-4 text-dark ms-auto" href="#!" onClick={openSidebar}>
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
            <div className="osahan-listing">
                <div className="osahan-listing p-0 m-0 row border-top">
                    <div className="p-3 border-bottom w-100">
                        <h6 className="m-0 fw-bold d-flex align-items-center text-capitalize">
                            {cat} / {subcat}
                        </h6>
                    </div>

                    <div className="filter_data">
                        <GridProduct cat={cat} subcat={subcat} page={page} />
                    </div>

                </div>

            </div>
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

            <BottomNavbar />
        </>

    )
}

export default Shop