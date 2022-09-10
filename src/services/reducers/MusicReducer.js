import { ALL_MUSIC_ERROR, ALL_MUSIC_LOADER, ALL_MUSIC_SUCCESS } from "../constants/MusicConstant"


const initialStateMusic = {
    musicData: [],
    isMusicLoading: false,
    musicError: null
}
const MusicReducer = (state = initialStateMusic, action) => {
    switch (action.type) {
        case ALL_MUSIC_LOADER:
            return {
                ...state,
                isMusicLoading: true
            }
        case ALL_MUSIC_SUCCESS:
            return {
                ...state,
                isMusicLoading: false,
                musicData: action.payload,
                musicError: null
            }
        case ALL_MUSIC_ERROR:
            return {
                ...state,
                isMusicLoading: false,
                musicData: [],
                musicError: action.payload
            }


        default:
            return state;
    }

}
export default MusicReducer