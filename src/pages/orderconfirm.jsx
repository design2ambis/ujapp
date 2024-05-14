import React from 'react'

const Orderconfirm = () => {
    return (
        <div className="p-3 d-flex align-items-center justify-content-center vh-100 flex-column">
            <div className="text-center mb-4">
                <img src="img/confirmed.svg" alt="#" className="col-12 img-fluid px-5" />
            </div>
            <div className="text-center">
                <h4>Your Order is Confirm!</h4>
                <p className="text-muted">Looks like haven't made your choice yet.</p>
            </div>
            <div className="osahan-footer p-3">
                <div className="d-grid gap-3">
                    <a
                        href="order-detail.php"
                        className="btn btn-outline-success btn-lg w-100 shadow px-5"
                    >
                        Track Order
                    </a>
                    <a href="home.php" className="btn btn-success btn-lg w-100 shadow px-5">
                        Continue to shopping
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Orderconfirm