import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice'; // Import your reducer

const store = configureStore({
    reducer: {
        students: studentsReducer, // Reducer for students data
    },
});

export default store;
