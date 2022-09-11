import React, { useEffect, useState } from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMusic } from '../../services/actions/MusicAction';
import { BsFillBookmarkPlusFill, BsStarFill } from "react-icons/bs";

import '../../styles/Styles.css'
import useAddFavorite from '../hooks/useAddFavorite';
import CreatePlaylistModal from '../Modals/CreatePlaylistModal';

const Search = () => {
    const [modalShow, setModalShow] = useState(false);
    const [listedMusic, setListedMusic] = useState({})
    const [handleFavorite] = useAddFavorite()

    const [searchedData, setSearchedData] = useState([])
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

    const handleSearch = async (e) => {
        const searchedResult = musicData.filter(music => music.title.toLowerCase().includes(e))
        setSearchedData(searchedResult)
    }


    return (
        <>
            <h2 className='my-text text-center mt-2'>Search Now</h2>
            <div className='search'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={e => handleSearch(e.target.value)} type="text" placeholder="search here..." />
                    </Form.Group>
                </Form>
            </div>
            <div className='music-container'>
                {
                    searchedData.map(music =>
                        <div >
                            <Card className='music-card'>
                                <Card.Img variant="top" src={music.img_src} style={{ height: '12rem' }} />
                                <Card.Body>
                                    <Card.Title className='card-title my-text'>{music.title}
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='my-text'>{music.artist}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <audio style={{ width: '100%' }}
                                            src={music.src}
                                            controls
                                        ></audio>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <BsStarFill title='Add to favorite' className='card-icon' onClick={() => handleFavorite(music)}></BsStarFill>
                                        <BsFillBookmarkPlusFill title="Add to playlist" className='card-icon' onClick={() => setModalShow(true) & setListedMusic(music)}></BsFillBookmarkPlusFill>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>)
                }
            </div>
            <CreatePlaylistModal
                show={modalShow}
                listedMusic={listedMusic}
                onHide={() => setModalShow(false) & setListedMusic({})}
            />
        </>);
};

export default Search;