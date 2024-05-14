import React, { useState } from 'react';
import { Link   } from 'react-router-dom';
import Swal from 'sweetalert2';


const Signin = () => {

    const token = localStorage.getItem("token");
        if(token && token!=""){
            window.location.href="/home";
        }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const [error, setError] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
      
    
        try {
            const response = await fetch('https://utsarvajewels.com/api/auth', {
                method: 'POST',                
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                if(data.status===true){
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("email", data.email);                    
                    localStorage.setItem("phone", data.phone);                    
                    localStorage.setItem("cusname", data.cusname);                    
                    Swal.fire({
                        icon: "success",
                        title: "Welcome",
                        text: "Taking you to the Shopping"
                      }).then(() => {
                        window.location.href = '/home';
                      });
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Invalid Credentials",
                        text: "Try again with Correct Credentials"
                      })
                }
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className="p-3 shadow-sm bg-warning danger-nav osahan-home-header">
                <div className="font-weight-normal mb-0 d-flex align-items-center">
                    <h6 className="fw-normal mb-0 text-dark d-flex align-items-center">
                        <Link className="text-dark me-3 fs-4" to="/landing">
                            <i className="bi bi-chevron-left" />
                        </Link>
                        Sign In
                    </h6>
                </div>
            </div>
            <div className="p-4">
                <form name="loginform" id="loginform" autoComplete="off" onSubmit={handleFormSubmit}>
                    <h5 style={{ textAlign: "center" }}>Sign in to Continue</h5>
                    <div className="mb-4">
                        <label className="form-label text-muted small mb-1">Your Email</label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hidden">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-envelope-open text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                required
                                placeholder="Enter Your E-Mail"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-muted small mb-1">Password</label>
                        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hidden">
                            <span className="input-group-text bg-white">
                                <i className="bi bi-lock text-muted" />
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                required
                                placeholder="Password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="osahan-footer fixed-bottom p-3 text-center" style={{ position: "static" }}>
                        <div className="h6">By continuing, you agree to our</div>
                        <p className="text-success mb-3">Terms &amp; Conditions</p>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" name="btn" id="btn" className="btn btn-success btn-lg w-100 shadow">
                            SignIn
                        </button>
                        <Link to="/signup" className="btn btn-outline-primary btn-lg w-100 shadow mt-3">
                            Not a member? SIGN UP
                        </Link>
                        <br />
                        <br />
                        <Link to="/forgotpassword" className="text-muted" style={{ fontSize: 16 }}>
                            Forgot Password?
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signin;
