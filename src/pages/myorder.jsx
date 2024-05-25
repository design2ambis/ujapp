import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BottomNavbar from "../components/bottomNavbar";

const Myorder = () => {
    const goBack = () => {
        history.back();
    };

    const [order, setOrder] = useState([]);
    const [orderCount, setOrderCount] = useState([true]);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const order = await fetch(
                    `https://utsarvajewels.com/api/crud?getOrders&token=${localStorage.getItem("token")}`
                );
                const orderjson = await order.json();

                if (orderjson.status == true) {
                    setOrder(orderjson.data);                    
                } else {
                    setOrderCount(false);
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            }

        };

        fetchData();
    }, []);

    return (
        <>

            <div
                className="p-3 shadow-sm bg-warning danger-nav osahan-home-header sticky-top"
                style={{ backgroundColor: "#ffffff !important" }}
            >
                <div className="font-weight-normal mb-0 d-flex align-items-center">
                    <a href="#!" className="me-3 text-dark fs-5" onClick={goBack}>
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
            {!orderCount ? (
                <>
                    <div>
                        <h4 className="text-center p-4 mt-5 ">No Orders</h4>
                    </div>
                </>

            ) : (
                <>
                    {order.map((order,index)=>(
                        <div className="bg-white shadow-sm my-3 p-3 d-flex gap-3 position-relative" key={index}>
                            <div>
                                <p className="mb-0">Order UJ-{order.OrderNo}</p>
                                <p className="small text-muted m-0">
                                    {order.OrderQty} item
                                </p>
                            </div>
                            <div className="ms-auto text-end">
                                <div className="text-success mb-2">
                                    <i className="bi bi-clock-history me-1" /> {order.OrderStatus}
                                </div>
                                <div className="text-muted small">
                                    {order.OrderDate}
                                </div>
                            </div>
                            <Link
                                className="stretched-link"
                                to={`/orderdetail/${order.OrderNo}`}
                            />
                        </div>
                    ))}
                </>
            )}

            {/*?php } ?*/}
            <BottomNavbar />
        </>

    )
}

export default Myorder