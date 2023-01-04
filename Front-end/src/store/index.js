import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialAlertState = {
    isVisible: false,
    alertType: 'error',
    title: '',
    message: '',
}

const alertSlice = createSlice({
    name: 'Alert Slice',
    initialAlertState,
    reducers: {
        toggleAlert(state) {
            state.isVisible = !state.isVisible;
        },
        setAlertDetail(state, action) {
            state.isVisible = true;
            state.alertType = action.payload.alertType;
            state.title = action.payload.title;
            state.message = action.payload.message;
        }
    }
});

const store = configureStore({
    reducer: {
        alert: alertSlice.reducer,
    }
});

export const alertActions = alertSlice.actions;

export default store;
