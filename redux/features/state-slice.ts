import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

type UserState = {
    userId: string;
    userName: string;
    onboarded: boolean;
};

const initialUserState = {
    userId: "",
    userName: "",
    onboarded: false,
};

export const initialState: UserState = {
    ...initialUserState,
};

export const userSlice: any = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setOnboarded: (state, action) => {
            state.onboarded = action.payload;
        },
        resetState: () => initialState,
    },
    selectors: {
        selectUserId: (state) => state.userId,
        selectUserName: (state) => state.userName,
        selectIsOnboarded: (state) => state.onboarded,
    },
});
export const { selectUserId, selectUserName, selectIsOnboarded } = userSlice.selectors;
export const { setUserId, setUserName, setOnboarded, resetState } = userSlice.actions;
export const userReducer = userSlice.reducer;
