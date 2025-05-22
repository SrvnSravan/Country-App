import React from 'react';
import './WelcomeText.css';

export default function WelcomeText() {
    return (
        <div className="welcome-wrapper d-flex align-items-center justify-content-center my-4 ">
            <div className="line flex-grow-1 me-3" />
            <h2 className="welcome-text fw-bold m-0" style={{ fontSize: '3rem' }}>WELCOME</h2>
            <div className="line flex-grow-1 ms-3" />
        </div>
    );
}
