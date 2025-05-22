import React from 'react';

export default function Header() {
    return (
        <header className="text-center py-3 ">
            <div className="d-flex justify-content-between px-3">
                <span className="fw-bold">Countries</span>
                <div>
                    <a href="#" className="me-3 fw-bold text-decoration-underline">All</a>
                    <a href="#" className="me-3">Asia</a>
                    <a href="#">Europe</a>
                </div>
            </div>
        </header>
    );
}