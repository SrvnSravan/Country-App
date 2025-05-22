import React from 'react';

export default function Footer() {
    return (
        <footer className="border-top bg-light py-4 mt-5">
            <div className="container-fluid text-center">
                <div className="mb-3">
                    <i className="bi bi-facebook mx-3 fs-4"></i>
                    <i className="bi bi-twitter mx-3 fs-4"></i>
                    <i className="bi bi-instagram mx-3 fs-4"></i>
                </div>
                <div className="mb-1 fs-6 text-muted">example@email.com</div>
                <small className="text-muted">&copy; 2025 Name. All rights reserved.</small>
            </div>
        </footer>
    );
}
