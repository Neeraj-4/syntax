import {combineReducers, createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { getLatestSongsReducer,getPartySongsReducer,getRomanticSongsReducer, getArtistsReducer, getAlbumsReducer,getCategoryReducer } from "./reducers/ProductReducers";
import thunk from 'redux-thunk';
const reducer = combineReducers({
    getLatestSongs:getLatestSongsReducer,
    getPartySongs:getPartySongsReducer ,
    getRomanticSongs:getRomanticSongsReducer,
    getArtists:getArtistsReducer,
    getAlbums:getAlbumsReducer,
    getCategory:getCategoryReducer
})
const middleware = [thunk];
const Store = createStore(
reducer,composeWithDevTools(applyMiddleware(...middleware))
)
export default Store;