import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.config";


export const createUser = createAsyncThunk(
    "userSlice/createUser",
    async ({email, password}, {rejectWithValue}) => {
        try {
            const response = await createUserWithEmailAndPassword(auth);
            return response.data;
        } catch (err) {

        }
    },

)