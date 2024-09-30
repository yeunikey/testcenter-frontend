import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export let navigations: INavigation[] = [
    {
        id: "profile",
        name: "Профиль"
    },
    {
        id: "statement",
        name: "Подать заявление"
    },
    {
        id: "history",
        name: "Моя история"
    },
    {
        id: "feedback",
        name: "Отзыв"
    }
];

export interface INavigation {
    id: string,
    name: string
}

let initialState: INavigation = navigations[0];

export let navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setNavigation: (state, action: PayloadAction<INavigation>) => {
            return action.payload;
        }
    }
})

export let { setNavigation } = navigationSlice.actions;

export let selectNavigation = (state: RootState) => state.navigation;

export default navigationSlice.reducer;