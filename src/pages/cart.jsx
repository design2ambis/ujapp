import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SideNavbar from '../components/sideNavbar';
import Swal from 'sweetalert2';
import empty from "../../img/empty.svg"


const Cart = () => {

  const token = localStorage.getItem("token");

  const openSidebar = () => {
    document.documentElement.classList.add('hc-nav-yscroll');
    document.body.classList.add('hc-nav-open');
    var navbar = document.getElementById("leftsideNav");

    navbar.classList.add('nav-open');
    navbar.style.visibility = 'visible';
  };

  const goBack = () => {
    history.back();
  };

  const qty = async (id, qty, type) => {
    try {

      const cartResponse = await fetch(
        `https://utsarvajewels.com/api/crud?update_cart&id=${id}&qty=${qty}&type=${type}`
      );
      const cartData = await cartResponse.json();
      if (cartData.update_sta === true) {
        fetchData();
      }

    } catch (error) {
      console.error("Error updating cart:", error);
    }

  };

  const confirmorder = async () => {
    try {

      const orderRes = await fetch(
        `https://utsarvajewels.com/api/crud?confirm_order_user&&token=${token}`
      );
      const Response = await orderRes.json();
      if (Response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Welcome",
          text: "Order Placed"
        }).then(() => {
          fetchData();
        })
      }

    } catch (error) {
      console.error("Error updating cart:", error);
    }
  }

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [isCart, setisCart] = useState(true);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const cartRaw = await fetch(`https://utsarvajewels.com/api/crud?get_cart&&token=${token}`);
      const cartData = await cartRaw.json();
      if (cartData.status === 200) {
        setCart(cartData.data);
        setCartCount(cartData.total)
        setisCart(true)
      } else {
        setisCart(false)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {

    fetchData();

  }, [token]);



  return (
    <>
      <SideNavbar />

      <div
        className="p-3 shadow-sm bg-warning danger-nav osahan-home-header sticky-top"
        style={{ backgroundColor: "#ffffff !important" }}
      >
        <div className="font-weight-normal mb-0 d-flex align-items-center">
          <a href="#!" className="me-3 text-dark fs-5" onClick={goBack}>
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
              className="toggle osahan-toggle fs-4 text-dark ms-auto hc-nav-trigger hc-nav-1"
              href="#!"
              role="button"
              aria-controls="hc-nav-1"
              onClick={openSidebar}
            >
              <i className="bi bi-list" />
            </a>
          </div>
        </div>
      </div>
      {
        isCart ? (
          <>
            <div id="fetchReload">

              <div className="bg-white shadow-sm my-3 p-3">
                {cart.map((cart, index) => (
                  <div className="card od-card border-0 mb-2" key={index}>
                    <div className="d-flex bag-item">
                      <div className="bag-item-left">
                        <div className="border rounded-3 mx-1 mb-1">
                          <Link
                            to={`/product/${cart.design_no}`}
                            className="product1"
                          >
                            <img
                              src={`https://img.utsarvajewels.com/NewDesign/${cart.design_no}.png`}
                              className="img-fluid rounded-3"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="bag-item-right w-100">
                        <div className="card-body pe-0 py-0">
                          <p className="card-text mb-0 mt-1 text-black">
                            {cart.design_no}
                          </p>
                          <small className="text-muted">
                            <i className="bi bi-shop me-1" />{" "}
                            {cart.category_name}
                            -{" "}
                            {cart.sub_cat_name}
                          </small>
                          <h6 className="card-title mt-2 text-black fw-bold">
                            Weight : {(parseFloat(cart.cart_qty) * parseFloat(cart.cart_weight)).toFixed(2)}
                            &nbsp;&nbsp;&nbsp; Size : {cart.cart_to_size}{" "}
                          </h6>
                          <div className="d-flex align-items-center justify-content-between gap-3">
                            <div className="quantity-btn">
                              <div className="text-muted small mb-1">Quantity</div>
                              <div className="input-group input-group-sm border rounded overflow-hiddem">
                                <div className="btn btn-light text-success minus border-0 bg-white" onClick={() =>
                                  qty(
                                    cart.cart_id,
                                    cart.cart_qty,
                                    "sub"
                                  )
                                }>
                                  <i className="bi bi-dash" />
                                </div>
                                <input
                                  type="text"
                                  className="form-control text-center box border-0"
                                  value={cart.cart_qty}
                                  placeholder=""
                                  aria-label="Example text with button addon"
                                />
                                <div className="btn btn-light text-success plus border-0 bg-white"
                                  onClick={() =>
                                    qty(
                                      cart.cart_id,
                                      cart.cart_qty,
                                      "add"
                                    )
                                  }>
                                  <i className="bi bi-plus" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="btn btn-light text-danger plus border-0 bg-white"
                              data-bs-toggle="tooltip"
                              title=""
                              data-original-title="Remove"
                              style={{ fontSize: 20 }}

                              onClick={() =>
                                qty(
                                  cart.cart_id,
                                  cart.cart_qty,
                                  "delete"
                                )
                              }
                            >
                              <i className="bi bi-trash" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white shadow-sm mb-4 p-3">
                <h6 className="mb-3 text-black fw-bold">Order Summary</h6>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="text-muted">Total Weight</div>
                  <div className="price">
                    {cartCount.total_weight}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="text-muted">Total Items</div>
                  <div className="text-success">
                    {cartCount.total_qty}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="text-muted">Total Quantity</div>
                  <div className="text-success">{cartCount.total_qty}</div>
                </div>
                {/*<hr class="my-3">
          <div class="d-flex justify-content-between align-items-center">
              <div>
                  <h6 class="mb-0 text-dark">Order Total</h6>
                  <small class="text-muted">inclusive of all taxes</small>
              </div>
              <div class="text-success h5">Rs.750</div>
          </div>*/}
              </div>
              <div className="osahan-footer fixed-bottom p-3">
                <a
                  href="#!"
                  onClick={() =>
                    confirmorder()
                  }
                  // onclick="confirmorder()"
                  className="btn btn-success btn-lg w-100 shadow"
                >
                  Confirm &amp; Place Order
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div id="nodata" className="p-3 d-flex align-items-center justify-content-center vh-100 flex-column">
              <div className="text-center mb-4">
                <img src={empty} alt="#" className="col-12 img-fluid px-5" />
              </div>
              <div className="text-center">
                <h4>Your Cart is Empty</h4>
                <p className="text-muted">Looks like haven't made your choice yet.</p>
              </div>
              <div className="osahan-footer p-3">
                <Link to="/home" className="btn btn-success btn-lg w-100 shadow px-5">
                  Back to Homepage
                </Link>
              </div>
            </div>
          </>
        )
      }

    </>
  )
}

export default Cart