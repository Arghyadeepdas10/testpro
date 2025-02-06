import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice(
    {
        name: "auth",
        initialState:{
            isloggedin: false,
        },
        reducers:{
            login:(state,action)=>{
                state.isloggedin = true
            },
            logout:(state,action)=>{
                state.isloggedin = false
            }
        }
    }
)

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer