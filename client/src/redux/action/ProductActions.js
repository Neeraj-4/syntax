import axios from "axios"
import * as actionTypes from '../constants/ProductConstants';
const URL = 'http://localhost:8000';


export const getLatestSongs = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/Latest_song`);
         
        dispatch({type:actionTypes.GET_LATESTSONGS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_LATESTSONGS_FAIL,payload:error.message})

    }
}
export const getPartySongs = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/party_song`);
         
        dispatch({type:actionTypes.GET_PARTYSONGS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_PARTYSONGS_FAIL,payload:error.message})

    }
}
export const getRomanticSongs= () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/romantic_song`);
         
        dispatch({type:actionTypes.GET_ROMANTICSONGS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_ROMANTICSONGS_FAIL,payload:error.message})

    }
}
export const getArtists= () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/artists`);
        dispatch({type:actionTypes.GET_ALLARTISTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_ALLARTISTS_FAIL,payload:error.message})

    }
}
export const getAlbums= () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/Albums`);
        dispatch({type:actionTypes.GET_ALBUMS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_ALBUMS_FAIL,payload:error.message})

    }
}
export const getCategory= () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/Category`);
        dispatch({type:actionTypes.GET_CATEGORY_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_CATEGORY_FAIL,payload:error.message})

    }
}
