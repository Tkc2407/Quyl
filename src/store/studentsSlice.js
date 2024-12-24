import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../supabaseClient";

// Thunk to fetch students from Supabase
export const fetchStudents = createAsyncThunk(
    "students/fetchStudents",
    async ({ selectedYear, selectedClass }, { rejectWithValue }) => {
        try {
            let query = supabase.from("students").select("*");

            if (selectedYear) query = query.eq("cohort", selectedYear);
            if (selectedClass === "CBSE 9") {
                query = query.eq("courses", "CBSE 9 Science CBSE 9 Math");
            } else if (selectedClass === "CBSE 10") {
                query = query.eq("courses", "CBSE 10 Science CBSE 10 Math");
            }

            const { data, error } = await query;

            if (error) throw error;

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thunk to add a new student to Supabase
export const addStudent = createAsyncThunk(
    "students/addStudent",
    async (studentData, { rejectWithValue }) => {
        try {
            const { data, error } = await supabase
                .from("students")
                .insert([studentData])
                .select("*");

            if (error) throw error;

            return data[0]; // Return the newly added student
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const studentsSlice = createSlice({
    name: "students",
    initialState: {
        students: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Handle fetching students
        builder
            .addCase(fetchStudents.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.loading = false;
                state.students = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // Handle adding a new student
        builder
            .addCase(addStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(addStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.students.push(action.payload); // Add the new student
            })
            .addCase(addStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default studentsSlice.reducer;
