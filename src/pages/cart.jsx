import React from 'react'

const Cart = () => {
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
              className="toggle osahan-toggle fs-4 text-dark ms-auto hc-nav-trigger hc-nav-1"
              href="#"
              role="button"
              aria-controls="hc-nav-1"
            >
              <i className="bi bi-list" />
            </a>
          </div>
        </div>
      </div>
      <div id="fetchReload">
        {/*?php
      if(mysqli_num_rows($res1)*/}0){"{"}
        ?&gt;
        <div className="bg-white shadow-sm my-3 p-3">
          {/*?php
              $totalWeight=0;
              $totalQty=0;
              while($lis=mysqli_fetch_assoc($res1)){
                  $totalWeight=$totalWeight+$lis['cart_weight']*$lis['cart_qty'];
                  $totalQty=$totalQty+$lis['cart_qty'];
          ?*/}
          <div className="card od-card border-0 mb-2">
            <div className="d-flex bag-item">
              <div className="bag-item-left">
                <div className="border rounded-3 mx-1 mb-1">
                  <a
                    href="product?pId=<?php echo base64_encode($lis['design_id']) ?>"
                    className="product1"
                  >
                    <img
                      src="<?php echo DESIGN_SITE.$lis['design_image'] ?>"
                      className="img-fluid rounded-3"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="bag-item-right w-100">
                <div className="card-body pe-0 py-0">
                  <p className="card-text mb-0 mt-1 text-black">
                    {/*?php echo $lis['design_no'] ?*/}
                  </p>
                  <small className="text-muted">
                    <i className="bi bi-shop me-1" />{" "}
                    {/*?php echo getsingleData('category_tbl','category_name','category_id',$lis['design_cat']) ?*/}{" "}
                    -{" "}
                    {/*?php echo getsingleData('sub_category_tbl','sub_cat_name','sub_cat_id',$lis['design_sub_cat']) ?*/}
                  </small>
                  <h6 className="card-title mt-2 text-black fw-bold">
                    Weight : {/*?php echo $lis['cart_weight']*$lis['cart_qty'] ?*/}{" "}
                    &nbsp;&nbsp;&nbsp; Size : {/*?php echo $lis['cart_size'] ?*/}{" "}
                  </h6>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <div className="quantity-btn">
                      <div className="text-muted small mb-1">Quantity</div>
                      <div className="input-group input-group-sm border rounded overflow-hiddem">
                        <div
                          className="btn btn-light text-success minus border-0 bg-white"
                          onclick="removeqtycart('<?php echo $lis['cart_id'] ?>')"
                        >
                          <i className="bi bi-dash" />
                        </div>
                        <input
                          type="text"
                          className="form-control text-center box border-0"
                          id="qty_<?php echo $lis['cart_id'] ?>"
                          defaultValue="<?php echo $lis['cart_qty'] ?>"
                          placeholder=""
                          aria-label="Example text with button addon"
                        />
                        <div
                          className="btn btn-light text-success plus border-0 bg-white"
                          onclick="addqtycart('<?php echo $lis['cart_id'] ?>')"
                        >
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="btn btn-light text-danger plus border-0 bg-white"
                      onclick="removeCart('<?php echo $lis['cart_id'] ?>'); "
                      data-bs-toggle="tooltip"
                      title=""
                      data-original-title="Remove"
                      style={{ fontSize: 20 }}
                    >
                      <i className="bi bi-trash" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*?php } ?*/}
        </div>
        <div className="bg-white shadow-sm mb-4 p-3">
          <h6 className="mb-3 text-black fw-bold">Order Summary</h6>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="text-muted">Total Weight</div>
            <div className="price">
              {/*?php echo number_format($totalWeight,2) ?*/}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="text-muted">Total Items</div>
            <div className="text-success">
              {/*?php echo mysqli_num_rows($res1)." Nos" ?*/}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="text-muted">Total Quantity</div>
            <div className="text-success">{/*?php echo $totalQty." Nos" ?*/}</div>
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
            onclick="confirmorder()"
            className="btn btn-success btn-lg w-100 shadow"
          >
            Confirm &amp; Place Order
          </a>
        </div>
      </div>
      {/*?php
    
  }else{
  
  ?*/}
      <div className="p-3 d-flex align-items-center justify-content-center vh-100 flex-column">
        <div className="text-center mb-4">
          <img src="img/empty.svg" alt="#" className="col-12 img-fluid px-5" />
        </div>
        <div className="text-center">
          <h4>Your Cart is Empty</h4>
          <p className="text-muted">Looks like haven't made your choice yet.</p>
        </div>
        <div className="osahan-footer p-3">
          <a href="home.php" className="btn btn-success btn-lg w-100 shadow px-5">
            Back to Homepage
          </a>
        </div>
      </div>
      {/*?php
  
  }
  ?*/}
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
    </>

  )
}

export default Cart