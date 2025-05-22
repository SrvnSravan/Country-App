import React from 'react';

export default function Header() {
    return (
        <header className="text-center py-4 bg-light ">
            <div className="container-fluid px-5">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-2">Countries</span>
                    <div>
                        <a href="#" className="me-4 fw-bold text-decoration-underline fs-5">All</a>
                        <a href="#" className="me-4 fs-5">Asia</a>
                        <a href="#" className="fs-5">Europe</a>
                    </div>
                </div>
            </div>
        </header >
    );
}
