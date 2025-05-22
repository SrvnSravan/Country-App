import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setRegionFilter } from '../redux/countriesSlice';

export default function Header() {
    const dispatch = useDispatch();
    const regionFilter = useSelector(state => state.countries.regionFilter);

    const handleFilterChange = (region) => {
        dispatch(setRegionFilter(region));
    };

    return (
        <header className="text-center py-4 bg-light">
            <div className="container-fluid px-5">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-2">Countries</span>
                    <div>
                        {["All", "Asia", "Europe"].map((region) => (
                            <button
                                key={region}
                                onClick={() => handleFilterChange(region)}
                                className={`btn btn-link me-4 fs-5 text-decoration-none ${regionFilter === region ? "text-decoration-underline fw-bold" : ""
                                    }`}
                                style={{ color: "inherit" }}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
