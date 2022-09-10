import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import MusicReducer from "./services/reducers/MusicReducer";

const store = createStore(MusicReducer,(applyMiddleware(thunk)))

export default store;