import { ALL_MUSIC_ERROR, ALL_MUSIC_LOADER, ALL_MUSIC_SUCCESS } from "../constants/MusicConstant"
import axios from 'axios'

export const getMusic = () => async (dispatch) => {
    dispatch({ type: ALL_MUSIC_LOADER })
    try {
        const result = await axios.get('data.json')
        dispatch({ type: ALL_MUSIC_SUCCESS, payload: result.data })
    }
    catch (error) {
        dispatch({ type: ALL_MUSIC_ERROR, payload: error.message })
    }
}