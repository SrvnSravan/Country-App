import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from '../redux/countriesSlice';

export default function LoadMoreButton() {
    const dispatch = useDispatch();
    const { filteredCountries, page, perPage } = useSelector(state => state.countries);
    const countriesToShowCount = page * perPage;

    if (countriesToShowCount >= filteredCountries.length) return null;

    return (
        <div className="container-fluid text-center my-4">
            <button className="btn btn-dark px-4 py-2 fs-5" onClick={() => dispatch(loadMore())} >
                Load more
            </button>
        </div >
    );
}
