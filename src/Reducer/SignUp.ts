import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const api = axios.create({
    baseURL: "http://localhost:8080/signUp",
})

const SignUpSlice = createSlice({
    name:'signUp',
    initialState:initialState,
    reducers:{

    }
})

export default SignUpSlice.reducer;