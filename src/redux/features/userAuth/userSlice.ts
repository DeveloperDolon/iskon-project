import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from "../../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

interface TEmailPassword {
  email: string;
  password: string;
}

const initialState = {
  name: "",
  email: "",
  role: "",
  userAllInfo: {},
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async (
    { email, password }: TEmailPassword,
    { rejectWithValue }
  ): Promise<UserCredential | unknown> => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return response.user;
    } catch (err: any) {
      if (err.code === "auth/email-in-already-use") {
        return rejectWithValue("The email address is already in use!");
      } else if (err.code === "auth/weak-password") {
        return rejectWithValue("The password is too week!");
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async (
    { email, password }: TEmailPassword,
    { rejectWithValue }
  ): Promise<UserCredential | unknown> => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response.user;
    } catch (err: any) {
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        return rejectWithValue("Invalid email or password!");
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
