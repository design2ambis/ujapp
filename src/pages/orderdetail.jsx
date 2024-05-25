import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BottomNavbar from "../components/bottomNavbar";

const Orderdetail = () => {
  const { orderno } = useParams();
  
  const [OrderDet, setOrderdetail] = useState({});

  const goBack = () => {
    history.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const order = await fetch(
          `https://utsarvajewels.com/api/crud?getOrderDetail&token=${localStorage.getItem("token")}&orderno=${orderno}`
        );
        const orderjson = await order.json();

        if (orderjson.status) {
          setOrderdetail(orderjson);
        } 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [orderno]);

  return (
    <>
      <div className="p-3 shadow-sm bg-warning danger-nav osahan-home-header">
        <div className="font-weight-normal mb-0 d-flex align-items-center">
          <h6 className="fw-normal mb-0 text-dark d-flex align-items-center">
            <a className="text-dark me-3 fs-4" href="#!" onClick={goBack}>
              <i className="bi bi-chevron-left" />
            </a>
            <b>Order Details</b>
          </h6>
        </div>
      </div>
      <div className="bg-white shadow-sm my-3 p-3">
        <div className="d-flex align-items-center justify-content-between">
          <span>
            <h6 className="mb-1 text-success">Order No: UJ-{orderno}</h6>
          </span>
          <div className="text-success">
            {OrderDet.OrderStatus ? OrderDet.OrderStatus : ""}
          </div>
        </div>
        <div className="text-muted small">
          {/*?php echo date("d-m-Y",strtotime($row['ot_date'])) ?*/}
        </div>
        <hr />
      </div>
      <div className="bg-white shadow-sm my-3 p-3">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Product</th>              
              <th>Type</th>
              <th>Img</th>
              <th>Size</th>
              <th>Wei</th>
              <th>Qty</th>              
            </tr>
          </thead>
          <tbody>
          {OrderDet.ProductData && OrderDet.ProductData.map((o, index) => (
            <tr key={index}>
              <td>{o.Product}</td>
              <td>{o.Category} - {o.SubCategory}</td>
              <td><img src={o.Image} alt={o.Product} width="25" /></td>
              <td>{o.Size}</td>
              <td>{o.Weight}</td>
              <td>{o.Qty}</td>              
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      <div className="bg-white shadow-sm mb-3 p-3">
        <div className="card od-card border-0" style={{textAlign: 'end',marginRight: '19px'}}>
          <div className="d-flex bag-item">
            <div className="bag-item-right w-100">
              <div className="card-body pe-0 py-0">
                <p className="card-text mb-0 mt-1 text-muted">
                  Quantity: &nbsp;
                  <span className="text-dark">
                    {OrderDet.Data?.totqty}
                  </span>
                </p>
                <p className="card-text mb-0 mt-1 text-muted">
                  Weight: &nbsp;
                  <span className="text-dark">
                    {OrderDet.Data?.totweight}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default Orderdetail;
