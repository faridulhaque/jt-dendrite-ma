import { Alert, Confirm } from 'react-st-modal';
import { useNavigate } from 'react-router-dom';


const useAddFavorite = () =>{
    const navigate = useNavigate()

    const handleFavorite = async (music) => {
        const existingItems = JSON.parse(localStorage.getItem('favorites'))
        if (existingItems === null) {
            const favorites = []
            favorites.push(music)
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }

        else if (existingItems.length >= 1) {
            const matched = existingItems.filter(item => item.title === music.title)
            if (matched.length >= 1) {
                return Alert('This item is already added to your favorite lists', 'item already exists')
            }
            const favorites = existingItems;
            favorites.push(music)
            localStorage.setItem('favorites', JSON.stringify(favorites))

        }

        const result = await Confirm('You favorite music lists has been successfully updated. would you like to visit the favorites page?', 'Item successfully added')
        if (result) {
            navigate('/favorites')
        }
    }
    return [handleFavorite]
}
export default useAddFavorite;