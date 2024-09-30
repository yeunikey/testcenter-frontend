import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { act } from "react";

export interface IUser {
    session: string,
    name: string,
    surname: string,
    patronymic: string,
    uniqueId: string,
    country: string,
    national: string,
    gender: string,
    phone: string,
    email: string
}

interface IUserState {
    user: IUser | null,
    isAuthentificated: boolean
}

let initialState: IUserState = {
    user: null,
    isAuthentificated: false
};

export let userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<IUserState>) => {
            return {
                user: action.payload.user,
                isAuthentificated: action.payload.isAuthentificated
            };
        }
    }
})

export let { setState } = userSlice.actions;

export let selectUser = (state: RootState) => state.user.user;
export let selectAuth = (state: RootState) => state.user.isAuthentificated;

export default userSlice.reducer;