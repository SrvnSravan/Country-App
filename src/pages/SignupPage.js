import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function SignupPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return email.includes('@') && email.includes('.com');
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Username or email is required.';
        } else if (!validateEmail(formData.username)) {
            newErrors.username = 'Invalid email. Must include "@" and ".com".';
        }

        if (!validatePassword(formData.password)) {
            newErrors.password =
                'Password must be at least 8 characters long and include at least 1 capital letter, 1 number, and 1 symbol.';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        // Check for duplicate username/email in users list only if username validation passed
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (!newErrors.username) {
            const userExists = users.some(user => user.username === formData.username);
            if (userExists) {
                newErrors.username = 'User with this email already exists.';
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            users.push({
                username: formData.username,
                password: formData.password,
            });

            localStorage.setItem('users', JSON.stringify(users));

            alert('User created successfully!');
            navigate('/');
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
                        <h2 className="mb-3 fw-bold">Sign Up</h2>
                        <p className="mb-2 fw-bold">
                            <strong>Existing user?</strong>{' '}
                            <Link to="/" className="text-primary text-decoration-none">
                                Sign In
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
                            {errors.username && (
                                <div className="invalid-feedback">{errors.username}</div>
                            )}
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
                            {errors.password && (
                                <div className="invalid-feedback">{errors.password}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                style={{ fontWeight: 600 }}
                                placeholder="Confirm Password"
                            />
                            {errors.confirmPassword && (
                                <div className="invalid-feedback">{errors.confirmPassword}</div>
                            )}
                        </div>

                        <button type="submit" className="btn btn-dark w-100">
                            Sign Up
                        </button>
                    </form>

                    <div className="d-flex align-items-center my-3">
                        <div className="flex-grow-1 border-top"></div>
                        <span className="px-2 text-muted" style={{ fontSize: '14px' }}>
                            Or Sign In With
                        </span>
                        <div className="flex-grow-1 border-top"></div>
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

export default SignupPage;
