import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';



const Singleproduct = () => {


  const { prono } = useParams();
  const [product, setproduct] = useState([]);
  const [image, setImage] = useState([]);
  const username = localStorage.getItem("token");



  useEffect(() => {
    
    const fetchData = async () => {

      try {
        const ProductRes = await fetch(
          `https://utsarvajewels.com/api/crud?get_product&designno=${prono}`
        );
        const proData = await ProductRes.json();

        if (proData) {
          setproduct(proData);
          setImage(proData.design_image);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [prono]);

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

    return (
        <>
            <div
                className="p-3 shadow-sm bg-warning danger-nav osahan-home-header sticky-top"
                style={{ backgroundColor: "#ffffff !important" }}
            >
                <div className="font-weight-normal mb-0 d-flex align-items-center">
                    <a href="#!"  className="me-3 text-dark fs-5">
                        <i className="bi bi-chevron-left" />
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
                            // onclick="startQr()"
                            className="me-3 text-dark fs-5"
                        >
                            <i className="bi bi-qr-code-scan" />
                        </a> */}
                        <Link
                            className="toggle osahan-toggle fs-4 text-dark ms-auto hc-nav-1"
                            to="/cart"
                            role="button"
                            aria-controls="hc-nav-1"
                        >
                            <i className="bi bi-basket" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-sm my-3 p-3">
                <div className="card od-card border-0">
                    <div className="d-flex bag-item">
                        <div className="bag-item-left">
                            <div className="slider-for border rounded-3 mx-1 mb-1">
                                <div className="product1">
                                    <img
                                        src={product.design_image}
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        className="img-fluid rounded-3"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="slider-nav">
                                <div className="product2 p-1">
                                    <img
                                        src={product.design_image}
                                        className="img-fluid rounded-3 border"
                                        alt={product.design_no}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bag-item-right w-100">
                            <div className="card-body pe-0 py-0">
                                {/*span class="badge bg-success">20% OFF</span*/}
                                <p className="card-text mb-0 mt-1 text-black">
                                    {product.design_no}
                                </p>
                                <small className="text-muted">
                                    <b>
                                    {product.category_name}
                                        -{" "}
                                    {product.sub_cat_name}
                                    </b>
                                </small>
                                <h4 className="card-title mt-2 text-black fw-bold">
                                    Weight :{" "}
                                    {product.design_weight} grams
                                </h4>
                                <div className="d-flex align-items-center justify-content-between gap-3">
                                    <div className="quantity-btn">
                                        <div className="text-muted small mb-1">Quantity</div>
                                        <div className="input-group input-group-sm border rounded overflow-hiddem">
                                            <div className="btn btn-light text-success minus border-0 bg-white">
                                                <i className="bi bi-dash" />
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control text-center box border-0"
                                                id="qty"
                                                defaultValue={1}
                                                placeholder=""
                                                aria-label="Example text with button addon"
                                            />
                                            <div className="btn btn-light text-success plus border-0 bg-white">
                                                <i className="bi bi-plus" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-muted small mb-1">User Weight:</div>
                                <div className="input-group input-group-sm border rounded overflow-hiddem">
                                    <input
                                        className="form-control"
                                        required=""
                                        name="userweight"
                                        id="userweight"
                                        placeholder="Enter Weight "
                                    />
                                </div>
                                <div className="text-muted small mb-1">User Size:</div>
                                <div className="input-group input-group-sm border rounded overflow-hiddem">
                                    <input
                                        className="form-control"
                                        required=""
                                        name="usersize"
                                        id="usersize"
                                        placeholder="Enter Size "
                                    />
                                </div>
                                <input
                                    type="hidden"
                                    className="form-control"
                                    name="designid"
                                    id="designid"
                                    defaultValue="<?php echo $row['design_id'] ?>"
                                />
                                <input
                                    type="hidden"
                                    className="form-control"
                                    name="fromwgt"
                                    id="fromwgt"
                                    defaultValue="<?php echo $row['design_weightfrom'] ?>"
                                />
                                <input
                                    type="hidden"
                                    className="form-control"
                                    name="towgt"
                                    id="towgt"
                                    defaultValue="<?php echo $row['design_weightto'] ?>"
                                />
                                <input
                                    type="hidden"
                                    className="form-control"
                                    name="fromsize"
                                    id="fromsize"
                                    defaultValue="<?php echo $row['design_from'] ?>"
                                />
                                <input
                                    type="hidden"
                                    className="form-control"
                                    name="tosize"
                                    id="tosize"
                                    defaultValue="<?php echo $row['design_to'] ?>"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-sm mb-4 p-3">
                <h6 className="mb-3 text-black fw-bold">Product Summary</h6>
                <div className="justify-content-between align-items-center mb-2">
                    <h5 style={{ color: "#ecb40a" }}>
                        Actual Weight:&nbsp;&nbsp;
                        {product.design_weight} grams
                    </h5>
                    <b className="tt">Category:&nbsp;&nbsp;</b>
                    <span>
                    {product.category_name}
                    </span>
                    <br />
                    <b className="tt">Sub-Category:&nbsp;&nbsp;</b>
                    <span>
                    {product.sub_cat_name}
                    </span>
                    <br />
                    <b className="tt">Actual Size:&nbsp;&nbsp;</b>
                    <span className="align">{/*?php echo $row['design_act'] ?*/}</span>
                    <br />
                    <b className="tt">From Size:&nbsp;&nbsp;</b>
                    <span>{/*?php echo $row['design_from'] ?*/}</span>
                    <br />
                    <b className="tt">To Size:&nbsp;&nbsp;</b>
                    <span>{/*?php echo $row['design_to'] ?*/}</span>
                    <br />
                    <b className="tt">
                        From Weight:&nbsp;&nbsp;
                        <b>
                            <span>{parseFloat(product.design_weight)-parseFloat(0.50)}</span>
                            <br />
                            <b className="tt">
                                To Weight:&nbsp;&nbsp;
                                <b>
                                    <span>{parseFloat(product.design_weight)+(parseFloat(0.50))}</span>
                                    <br />
                                </b>
                            </b>
                        </b>
                    </b>
                </div>
                <b className="tt">
                    <b>
                        <b className="tt">
                            <b>
                                <hr className="my-3" />
                            </b>
                        </b>
                    </b>
                </b>
            </div>
            <b className="tt">
                <b>
                    <b className="tt">
                        <b>
                            <div className="osahan-footer fixed-bottom p-3">
                                <a
                                    href="#!"
                                    onclick="addtocart()"
                                    className="btn btn-success btn-lg w-100 shadow"
                                >
                                    Add To Cart
                                </a>
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
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">
                                            <img
                                                src="<?php echo DESIGN_SITE.$row['design_image'] ?>"
                                                className="img-fluid"
                                                alt="#"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b>
                    </b>
                </b>
            </b>
        </>

    )
}

export default Singleproduct