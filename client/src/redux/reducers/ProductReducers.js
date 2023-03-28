
import * as actionType from '../constants/ProductConstants';
export const getLatestSongsReducer = (state = { Latest_songs: [] }, action) => {
    switch (action.type) {
        case actionType.GET_LATESTSONGS_SUCCESS:
            return { Latest_songs: action.payload }
        case actionType.GET_LATESTSONGS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getPartySongsReducer = (state = { party_songs: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PARTYSONGS_SUCCESS:
            return { party_songs: action.payload }
        case actionType.GET_PARTYSONGS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getRomanticSongsReducer = (state = { romantic_songs: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ROMANTICSONGS_SUCCESS:
            return { romantic_songs: action.payload }
        case actionType.GET_ROMANTICSONGS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getArtistsReducer = (state = { AllArtist: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALLARTISTS_SUCCESS:
            return { AllArtist: action.payload }
        case actionType.GET_ALLARTISTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getAlbumsReducer = (state = { AllAlbums: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALBUMS_SUCCESS:
            return { AllAlbums: action.payload }
        case actionType.GET_ALBUMS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getCategoryReducer = (state = { CategoryItems: [] }, action) => {
    switch (action.type) {
        case actionType.GET_CATEGORY_SUCCESS:
            return { CategoryItems: action.payload }
        case actionType.GET_CATEGORY_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};