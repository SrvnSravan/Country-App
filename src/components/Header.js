import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setRegionFilter } from '../redux/countriesSlice';
import { FaBars } from 'react-icons/fa';


export default function Header() {
    const dispatch = useDispatch();
    const regionFilter = useSelector(state => state.countries.regionFilter);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleFilterChange = (region) => {
        dispatch(setRegionFilter(region));
        setMenuOpen(false);
    };

    return (
        <header className="text-center py-4 bg-light" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container-fluid px-5">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-2">Countries</span>

                    <button
                        className="d-md-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.8rem',
                            color: 'inherit',
                            padding: 0,
                        }}
                        aria-label="Toggle menu"
                    >
                        <FaBars />
                    </button>

                    <div className="d-none d-md-flex">
                        {["All", "Asia", "Europe"].map((region) => {
                            const isActive = regionFilter === region;
                            return (
                                <button
                                    key={region}
                                    onClick={() => handleFilterChange(region)}
                                    className="me-4 fs-5"
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 0,
                                        color: "inherit",
                                        opacity: isActive ? 1 : 0.5,
                                        textDecoration: isActive ? "underline" : "none",
                                        fontWeight: isActive ? "700" : "400",
                                        cursor: "pointer",
                                    }}
                                >
                                    {region}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {menuOpen && (
                    <div className="d-md-none mt-3">
                        {["All", "Asia", "Europe"].map((region) => {
                            const isActive = regionFilter === region;
                            return (
                                <button
                                    key={region}
                                    onClick={() => handleFilterChange(region)}
                                    className="fs-5"
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: '8px 0',
                                        width: '100%',
                                        textAlign: 'left',
                                        color: "inherit",
                                        opacity: isActive ? 1 : 0.5,
                                        textDecoration: isActive ? "underline" : "none",
                                        fontWeight: isActive ? "700" : "400",
                                        cursor: "pointer",
                                    }}
                                >
                                    {region}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </header>
    );
}
