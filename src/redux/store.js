import { configureStore } from '@reduxjs/toolkit';
import postSlice from './features/postSlice';

export const store = configureStore({
    reducer: {
        post: postSlice,
    },
});