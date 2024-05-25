import React,{ useEffect,useState } from "react"



const Myprofile = () => {
    

    const goBack = () => {
       history.back();
      };
    
    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
    
            try {
              const raw = await fetch(
                `https://utsarvajewels.com/api/crud?get_profiledata&token=${token}`
              );
              const rawjson = await raw.json();
      
              if (rawjson) {
                setProfileData(rawjson);
                
              }
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };

        const token = localStorage.getItem('token');

        if (token && token !=="") {
            fetchData();
        }else{
            window.location.href = '/';
        }
      }, []);

    return (
        <>
            <div className="p-3 shadow-sm bg-warning danger-nav osahan-home-header">
                <div className="font-weight-normal mb-0 d-flex align-items-center">
                    <h6 className="fw-normal mb-0 text-dark d-flex align-items-center">
                        <a className="text-dark me-3 fs-4" href="#!" onClick={goBack}>
                            <i className="bi bi-chevron-left" />
                        </a>
                        My Profile
                    </h6>
                    <div className="ms-auto d-flex align-items-center">
                        <a
                            className="toggle osahan-toggle fs-4 text-dark ms-auto"
                            href="#"
                            style={{ display: "none" }}
                        >
                            <i className="bi bi-list" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="col-12 mb-4">
                    <label
                        htmlFor="Customername"
                        className="form-label text-muted small mb-1"
                    >
                        Customer Name
                    </label>
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-person-circle text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={profileData.cus_name}
                            placeholder="Enter Customer Name"
                            name="Customername"
                            id="Customername"
                            disabled=""
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
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-phone text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={profileData.cus_mobile}
                            name="customerMobile"
                            id="customerMobile"
                            placeholder="Phone No"
                            disabled=""
                            required=""
                        />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <label htmlFor="Companyname" className="form-label text-muted small mb-1">
                        Company Name
                    </label>
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-pencil text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control"                           
                            defaultValue={profileData.company_name}
                            name="Companyname"
                            id="Companyname"
                            placeholder="Company Name"
                            required=""
                            disabled=""
                        />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <label htmlFor="address" className="form-label text-muted small mb-1">
                        Address
                    </label>
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-geo-alt-fill text-muted" />
                        </span>
                        <textarea
                            className="form-control"
                            name="address"
                            id="address"
                            placeholder="Enter Your Address"
                            required=""
                            disabled=""
                            defaultValue={profileData.cus_address}
                            
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
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-phone text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={profileData.cus_phone}
                            name="customerPhone"
                            id="customerPhone"
                            placeholder="TelePhone No"
                            required=""
                            disabled=""
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
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-building text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={profileData.cus_city}
                            name="customerCity"
                            id="customerCity"
                            placeholder="Enter City Name"
                            required=""
                            disabled=""
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
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-input-cursor-text text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={profileData.cus_website}
                            name="customerWebsite"
                            id="customerWebsite"
                            placeholder="https://example.com/"
                            required=""
                            disabled=""
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
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-envelope text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={profileData.cus_email}
                            name="customerEmail"
                            id="customerEmail"
                            placeholder="E-Mail"
                            required=""
                            disabled=""
                        />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <label htmlFor="customerPan" className="form-label text-muted small mb-1">
                        Pan-No
                    </label>
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-pencil-square text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={profileData.cus_pan}
                            style={{ textTransform: "uppercase" }}
                            name="customerPan"
                            id="customerPan"
                            placeholder="PAN No"
                            required=""
                            disabled=""
                        />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <label htmlFor="customerGst" className="form-label text-muted small mb-1">
                        GST-No
                    </label>
                    <div className="input-group input-group-lg  shadow-sm rounded overflow-hiddem">
                        <span className="input-group-text     ">
                            <i className="bi bi-pencil-square text-muted" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={profileData.cus_gst}
                            style={{ textTransform: "uppercase" }}
                            name="customerGst"
                            id="customerGst"
                            placeholder="GST No"
                            required=""
                            disabled=""
                        />
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <center>
                        <button
                            type="button"                            
                            id="back"
                            name="back"
                            onClick={goBack}
                            className="btn btn-primary btn-lg"
                        >
                            Back
                        </button>
                    </center>
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
                                    {/*?php echo getsingleData('customer', 'cus_name', 'cus_id', $uId) ?*/}
                                </h6>
                                <small>
                                    {/*?php echo getsingleData('customer', 'cus_mobile', 'cus_id', $uId) ?*/}
                                </small>
                                <br />
                                <span className="f-10 text-white-50">
                                    {/*?php echo getsingleData('customer', 'cus_email', 'cus_id', $uId) ?*/}
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
        </>

    )
}

export default Myprofile