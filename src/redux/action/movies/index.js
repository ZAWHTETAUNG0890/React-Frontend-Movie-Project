import { ActionType } from "../action-types";


export const fetchMovie = (movies) => {
    return {
        type : ActionType.FETCH_MOVIES ,
        payload : movies
    }
}

export const selectedMovie = (movie) => {
    return {
        type: ActionType.SELECTED_MOVIE ,
        payload: movie
    }
}

export const removeSelectedMovie = (movie) => {
    return {
        type: ActionType.REMOVE_SELECTED_MOVIE,
        payload: movie
    }
}