import React from 'react'

const Orderdetail = () => {
  return (
    <>
  <nav id="main-nav">
    {/*?php include 'qr.php' ?*/} {/*qr code*/}
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
          <i className="bi bi-house me-2" /> Homepage
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
      <li>
        <a
          href="#!"
          data-bs-toggle="modal"
          data-bs-target="#barcodeModal"
          onclick="startQr()"
        >
          <i className="bi bi-qr-code me-2" /> QR Reader
        </a>
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
  <div className="p-3 shadow-sm bg-warning danger-nav osahan-home-header">
    <div className="font-weight-normal mb-0 d-flex align-items-center">
      <h6 className="fw-normal mb-0 text-dark d-flex align-items-center">
        <a className="text-dark me-3 fs-4" href="#!">
          <i className="bi bi-chevron-left" />
        </a>
        <b>Order Details</b>
        <br />
      </h6>
    </div>
  </div>
  <div className="bg-white shadow-sm my-3 p-3">
    <div className="d-flex align-items-center justify-content-between">
      <span>
        <h6 className="mb-1 text-success">
          Order No: {/*?php echo "UJ-".$row['ot_no'] ?*/}
        </h6>
      </span>
      <div className="text-success">&nbsp;{/*?php echo $status ?*/}&nbsp;</div>
    </div>
    <div className="text-muted small">
      {/*?php echo date("d-m-Y",strtotime($row['ot_date'])) ?*/}
    </div>
    <hr />
    {/*<div class="row m-0">
      <div class="col-1 d-flex justify-content-center ps-0">
          <div class="d-block">
              <div class="lh-1 mt-1"><i class="bi bi-circle-fill text-danger"></i></div>
              <div class="lh-1"><i class="bi bi-dot text-danger"></i></div>
              <div class="lh-1"><i class="bi bi-dot text-danger"></i></div>
              <div class="lh-1"><i class="bi bi-dot text-danger"></i></div>
              <div class="lh-1 mt-1"><i class="bi bi-circle-fill text-danger"></i></div>
              <div class="lh-1"><i class="bi bi-dot text-secondary"></i></div>
              <div class="lh-1"><i class="bi bi-dot text-secondary"></i></div>
              <div class="lh-1"><i class="bi bi-dot text-secondary"></i></div>
              <div class="lh-1 mt-1"><i class="bi bi-circle-fill text-secondary"></i></div>
          </div>
      </div>
      <div class="col-11 ps-0">
          <div class="mb-3">
              <div class="h6 mb-1 text-danger">Order Placed</div>
              <div class="text-muted small">On Mon, 24th Feb'22</div>
          </div>
          <div class="mb-3">
              <div class="h6 mb-1 text-danger">Estimated Dispatch</div>
              <div class="text-muted small">On Wed, 26th Feb'22</div>
          </div>
          <div>
              <div class="h6 mb-1 text-secondary">Estimated Delivery</div>
              <div class="text-muted small">On Sat, 29th Feb'22</div>
          </div>
      </div>
  </div>*/}
  </div>
  {/*?php
    $sql=mysqli_query($con,"select order_details.*, design_tbl.design_no, design_tbl.design_weight, design_tbl.design_id, design_tbl.design_sub_cat, design_tbl.design_image, design_tbl.design_cat
    from order_details,design_tbl where order_details.od_master='$id' && order_details.od_pro=design_tbl.design_id  ");
    while($list = mysqli_fetch_assoc($sql)){
    ?*/}
  <div className="bg-white shadow-sm mb-3 p-3">
    <div className="card od-card border-0">
      <div className="d-flex bag-item">
        <div className="bag-item-left">
          <div className="slider-for border rounded-3 mx-1 mb-1">
            <div className="product1">
              <img
                src="<?php echo DESIGN_SITE.$list['design_image'] ?>"
                className="img-fluid rounded-3"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bag-item-right w-100">
          <div className="card-body pe-0 py-0">
            <p className="card-text mb-0 mt-1 text-muted">
              Design No: &nbsp;{/*?php echo $list['design_no'] ?*/}
            </p>
            {/*<small class="text-muted"><i class="bi bi-shop me-1"></i> Seller - Private limited</small>
                  <h5 class="card-title mt-2 text-danger">₹80.00 <small class="text-decoration-line-through text-muted fs-6 fw-light">₹100.00</small></h5>
                  <p class="card-text text-muted mb-1">Unit&nbsp;<span class="text-dark">800 g</span></p>*/}
            <p className="card-text mb-0 mt-1 text-muted">
              Quantity: &nbsp;
              <span className="text-dark">
                {/*?php echo $list['od_qua'] ?*/}
              </span>
            </p>
            <p className="card-text mb-0 mt-1 text-muted">
              Weight: &nbsp;
              <span className="text-dark">
                {/*?php echo number_format($list['od_wei'],2) ?*/}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*?php } ?*/}
  <div className="fixed-bottom shadow-sm osahan-footer p-3">
    <div className="row m-0 footer-menu overflow-hiddem bg-black rounded shadow links">
      <div className="col-4 p-0 text-center">
        <a className="p-2 d-inline-block text-warning w-100" href="home.php">
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
            >
              {/*?php echo $count ?*/}
            </b>
          </p>
        </a>
      </div>
      <div className="col-4 p-0 text-center">
        <a className="p-2 d-inline-block text-white w-100" href="myprofile.php">
          <span>
            <i className="bi bi-person h4" />
          </span>
          <p className="m-0 small">ACCOUNT</p>
        </a>
      </div>
    </div>
  </div>
</>

  )
}

export default Orderdetail