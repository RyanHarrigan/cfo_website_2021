import {BaseThemeColors} from "./constants";

// export const ColorActions = {
//     SET_PRIMARY_COLOR: 'SET_PRIMARY_COLOR',
//     INVERT_THEME: 'INVERT_THEME',
// }

export type ColorThemeState = {
    [key: string]: string;
}

export type ColorThemeAction =
    | {type: 'SET_PRIMARY_COLOR', color: string}
    | {type: 'INVERT_THEME'}

// colorThemeInitialState will eventually be initialized from user's localStorage, defaulting to BaseThemeColors
export const colorThemeInitialState = BaseThemeColors;

export function colorThemeReducer(
    state: ColorThemeState,
    action: ColorThemeAction
): ColorThemeState { // useReducer may have a type for 'action'
    switch (action.type) {
        default:
            return {...state};
    }
}
