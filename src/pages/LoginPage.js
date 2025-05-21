// src/pages/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function LoginPage() {
    return (
        <div className="container-fluid vh-100 d-flex">
            <div className="row flex-grow-1 align-items-center justify-content-center">
                <div className="col-md-6 col-lg-5 px-5">
                    <div className="text-start">
                        <h2 className="mb-3 fw-bold">Sign In</h2>
                        <p className="mb-2">
                            <strong>New user?</strong>{' '}
                            <Link to="/signup" className="text-primary text-decoration-none">Create an account</Link>
                        </p>
                    </div>

                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Username or email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="mb-3 form-check d-flex align-items-center gap-2">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Keep me signed in</label>
                        </div>
                        <button type="submit" className="btn btn-dark w-100">Sign In</button>
                    </form>

                    <div className="text-center my-3">
                        <hr />
                        <span className="small text-muted">Or Sign In With</span>
                    </div>

                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-outline-dark rounded-circle"><i className="bi bi-google"></i></button>
                        <button className="btn btn-outline-dark rounded-circle"><i className="bi bi-facebook"></i></button>
                        <button className="btn btn-outline-dark rounded-circle"><i className="bi bi-linkedin"></i></button>
                        <button className="btn btn-outline-dark rounded-circle"><i className="bi bi-twitter"></i></button>
                    </div>
                </div>

                <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
                    <img src="https://undraw.co/api/illustrations/af8e4045-1fdc-44be-95b7-9b823fd1b3e1" alt="Illustration" className="img-fluid" style={{ maxHeight: "400px" }} />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
