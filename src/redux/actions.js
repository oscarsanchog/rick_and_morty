import { ADD_FAV, REMOVE_FAV } from './action-types'

//* Las actions creations son funciones que retornan objetos

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}