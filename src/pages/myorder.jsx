import React from 'react'

const Myorder = () => {
    return (
        <>
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
            <div
                className="p-3 shadow-sm bg-warning danger-nav osahan-home-header sticky-top"
                style={{ backgroundColor: "#ffffff !important" }}
            >
                <div className="font-weight-normal mb-0 d-flex align-items-center">
                    <a href="#!" className="me-3 text-dark fs-5">
                        <i className="bi bi-chevron-left" />
                    </a>
                    <h4 className="m-0 fw-bold text-black">My Orders</h4>
                    <div className="ms-auto d-flex align-items-center">
                        <a
                            className="toggle osahan-toggle fs-4 text-dark ms-auto"
                            style={{ display: "none" }}
                            href="#"
                        >
                            <i className="bi bi-list" />
                        </a>
                    </div>
                </div>
            </div>
            {/*?php
    $x=1;
    $res = mysqli_query($con,"SELECT ot_date, ot_sta, ot_no, ot_id  FROM order_tbl_new WHERE ot_cust='$customerid' ");
    while($row=mysqli_fetch_assoc($res)){
        
        if($row['ot_sta']=='0'){
          $status = "Pending";
        }else if($row['ot_sta']=='1'){
          $status = "Order placed";
        }else if($row['ot_sta']=='2'){
          $status = "Cancelled";  
        }else{
          $status = "Completed";    
        }
        
      $sql = mysqli_query($con,"select SUM(od_qua) as od_qua, SUM(od_wei) as od_wei from order_details where od_master = '".$row['ot_id']."' ");
      $list = mysqli_fetch_assoc($sql);
        
        
    ?*/}
            <div className="bg-white shadow-sm my-3 p-3 d-flex gap-3 position-relative">
                <div>
                    <p className="mb-0">Order {/*?php echo "UJ-".$row['ot_no'] ?*/}</p>
                    <p className="small text-muted m-0">
                        {/*?php echo $list['od_qua'] ?*/} item
                    </p>
                </div>
                <div className="ms-auto text-end">
                    <div className="text-success mb-2">
                        <i className="bi bi-clock-history me-1" /> {/*?php echo $status ?*/}
                    </div>
                    <div className="text-muted small">
                        {/*?php echo date("d-m-Y",strtotime($row['ot_date'])) ?*/}
                    </div>
                </div>
                <a
                    className="stretched-link"
                    href="order-detail.php?oId=<?php echo base64_encode($row['ot_id']) ?>"
                />
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

export default Myorder