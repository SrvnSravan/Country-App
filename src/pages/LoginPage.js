import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function LoginPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === formData.username);

        let newErrors = {};

        if (!user) {
            newErrors.username = 'User not found. Please sign up.';
        } else if (user.password !== formData.password) {
            newErrors.password = 'Incorrect password.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert('Login successful!');

            // Store logged-in user in localStorage
            localStorage.setItem('loggedInUser', user.username);

            navigate('/home'); // Redirect after login
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="container-fluid vh-100 d-flex">
            <div className="row flex-grow-1 align-items-center justify-content-center">
                <div className="col-md-6 col-lg-5 px-5">
                    <div className="text-start">
                        <h2 className="mb-3 fw-bold">Sign In</h2>
                        <p className="mb-2 fw-bold">
                            <strong>New user?</strong>{' '}
                            <Link to="/signup" className="text-primary text-decoration-none">
                                Create an account
                            </Link>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                style={{ fontWeight: 600 }}
                                placeholder="Username or email"
                            />
                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                style={{ fontWeight: 600 }}
                                placeholder="Password"
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <div className="mb-3 form-check d-flex align-items-center gap-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    border: '2px solid rgba(61, 61, 61, 1)',
                                    borderRadius: '0',
                                }}
                            />
                            <label className="form-check-label fw-semibold" htmlFor="rememberMe">
                                Keep me signed in
                            </label>
                        </div>

                        <button type="submit" className="btn btn-dark w-100">
                            Sign In
                        </button>
                    </form>

                    <div className="d-flex align-items-center my-3">
                        <div
                            style={{
                                flex: 1,
                                height: '1px',
                                backgroundColor: 'rgba(61, 61, 61, 0.3)',
                            }}
                        ></div>
                        <span
                            className="px-2"
                            style={{ color: 'rgba(61, 61, 61, 1)', fontSize: '14px' }}
                        >
                            Or Sign In With
                        </span>
                        <div
                            style={{
                                flex: 1,
                                height: '1px',
                                backgroundColor: 'rgba(61, 61, 61, 0.3)',
                            }}
                        ></div>
                    </div>

                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-outline-dark rounded-circle">
                            <i className="bi bi-google social-icon"></i>
                        </button>
                        <button className="btn btn-outline-dark rounded-circle">
                            <i className="bi bi-facebook social-icon"></i>
                        </button>
                        <button className="btn btn-outline-dark rounded-circle">
                            <i className="bi bi-linkedin social-icon"></i>
                        </button>
                        <button className="btn btn-outline-dark rounded-circle">
                            <i className="bi bi-twitter social-icon"></i>
                        </button>
                    </div>
                </div>

                <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
                    <img
                        src="https://cdni.iconscout.com/illustration/free/thumb/user-login-7329999-5991694.png"
                        alt="Illustration"
                        className="img-fluid"
                        style={{ maxHeight: '400px' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
