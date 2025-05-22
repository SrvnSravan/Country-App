import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch countries
export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        console.log("Fetching countries...");
        const response = await fetch('https://restcountries.com/v2/all?fields=name,region,flag');
        if (!response.ok) throw new Error('Failed to fetch countries');
        const data = await response.json();
        console.log('Fetched countries:', data);
        return data;
    }

);


const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        allCountries: [],
        filteredCountries: [],
        loading: false,
        error: null,
        regionFilter: 'All',
        page: 1,
        perPage: 10,
    },
    reducers: {
        setRegionFilter(state, action) {
            state.regionFilter = action.payload;
            state.page = 1;
            if (action.payload === 'All') {
                state.filteredCountries = state.allCountries;
            } else {
                state.filteredCountries = state.allCountries.filter(c => c.region === action.payload);
            }
        },
        loadMore(state) {
            state.page += 1;
        },
        reset(state) {
            state.page = 1;
            state.regionFilter = 'All';
            state.filteredCountries = state.allCountries;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.allCountries = action.payload;
                state.filteredCountries = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setRegionFilter, loadMore, reset } = countriesSlice.actions;
export default countriesSlice.reducer;
