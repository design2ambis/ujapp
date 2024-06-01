import React from 'react'
import { Link } from 'react-router-dom'
import ujgif from "../../uj.gif"

const Index = () => {
    const token = localStorage.getItem("token");
        if(token && token!=""){
            window.location.href="/home";
        }
    return (
        <>
            <div
                className="osahan-index bg-c d-flex align-items-center justify-content-center vh-100 index-page"
                style={{ background: "none" }}
            >
                <div className="text-center">
                    <Link to="/landing">
                        <img src={ujgif} className="img-fluid rounded-3" />
                    </Link>
                    <br />
                    <div className="spinner" />
                </div>
            </div>
            <div className="osahan-footer fixed-bottom p-3">
                <Link
                    to="/landing"
                    className="btn btn-success btn-lg w-100 d-flex align-items-center shadow"
                >
                    Get Started <i className="icofont-arrow-right ms-auto" />
                </Link>
            </div>
        </>

    )
}

export default Index