import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert, Confirm } from 'react-st-modal';
import { getMusic } from '../../services/actions/MusicAction';
import '../../styles/Styles.css'
import { BsFillBookmarkPlusFill, BsStarFill } from "react-icons/bs";


const Home = () => {
    const navigate = useNavigate()
    const { musicData,
        isMusicLoading,
        musicError } = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMusic())
    }, [dispatch])

    if (isMusicLoading) {
        return <>.....</>
    }
    if (musicError) {
        // console.log(musicError)
    }

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
                return await Alert('This item is already added to your favorite lists', 'item already exists')
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

    return (
        <div className="home">
            <h1 className='text-center'>Music Masti</h1>

            <div className='music-container'>
                {
                    musicData.map(music =>
                        <div key={music.title}>
                            <Card style={{ width: '12rem' }}>

                                <Card.Img variant="top" src={music.img_src} style={{ height: '12rem' }} />
                                <Card.Body>
                                    <Card.Title>{music.title}</Card.Title>

                                </Card.Body>

                                <ListGroup className="list-group-flush">




                                    <ListGroup.Item>{music.artist}</ListGroup.Item>
                                    <ListGroup.Item><audio style={{ width: '100%' }}
                                        src={music.src}

                                        controls
                                    ></audio></ListGroup.Item>
                                    <ListGroup.Item>
                                        <BsFillBookmarkPlusFill ></BsFillBookmarkPlusFill>
                                        <BsStarFill onClick={() => handleFavorite(music)}></BsStarFill>
                                    </ListGroup.Item>

                                </ListGroup>

                            </Card>
                        </div>




                    )
                }
            </div>


        </div>
    );
};

export default Home;