import React from 'react';

export default function HeroSection() {
    return (
        <div className="container d-flex gap-3 justify-content-center mb-4">
            <div className="bg-light border w-75" style={{ height: '200px' }}></div>
            <div className="bg-light border w-25" style={{ height: '200px' }}></div>
        </div>
    );
}