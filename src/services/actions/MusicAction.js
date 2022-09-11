import { ALL_MUSIC_ERROR, ALL_MUSIC_LOADER, ALL_MUSIC_SUCCESS } from "../constants/MusicConstant"
import axios from 'axios'

export const getMusic = () => async (dispatch) => {
    dispatch({ type: ALL_MUSIC_LOADER })
    try {
        const result = await axios.get('https://raw.githubusercontent.com/faridulhaque/My-json-data/main/dendrite_musicappjson.json')
        dispatch({ type: ALL_MUSIC_SUCCESS, payload: result.data })
        console.log(result)
    }
    catch (error) {
        dispatch({ type: ALL_MUSIC_ERROR, payload: error.message })
    }
}