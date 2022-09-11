import { useEffect, useState } from 'react';
import { Card, ListGroup, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMusic } from '../../services/actions/MusicAction';
import '../../styles/Styles.css'
import { BsFillBookmarkPlusFill, BsStarFill } from "react-icons/bs";
import CreatePlaylistModal from '../Modals/CreatePlaylistModal';
import useAddFavorite from '../hooks/useAddFavorite';



const Home = () => {
    const [modalShow, setModalShow] = useState(false);
    const [listedMusic, setListedMusic] = useState({})
    const [handleFavorite] = useAddFavorite()
    const { musicData,
        isMusicLoading,
        musicError } = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMusic())
    }, [dispatch])

    if (isMusicLoading) {
        return <>Loading.....</>
    }
    if (musicError) {
        // console.log(musicError)
    }

    

    return (
        <>

            <div className="home">
                <h1 className='text-center my-5 my-text'>Music Maasti</h1>
                <div className='music-container'>
                    {
                        musicData.map(music =>
                            <div key={music.title}>
                                <Card className='music-card'>
                                    <Card.Img variant="top" src={music.img_src} style={{ height: '12rem' }} />
                                    <Card.Body>
                                        <Card.Title className="card-title my-text">{music.title}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className='my-text'>{music.artist}</ListGroup.Item>
                                        <ListGroup.Item><audio style={{ width: '100%' }}
                                            src={music.src}
                                            controls
                                        ></audio></ListGroup.Item>
                                        <ListGroup.Item>
                                            <BsStarFill title='Add to favorite' className='card-icon' onClick={() => handleFavorite(music)}></BsStarFill>
                                            <BsFillBookmarkPlusFill title="Add to playlist" className='card-icon' onClick={() => setModalShow(true) & setListedMusic(music)}></BsFillBookmarkPlusFill>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </div>
                        )
                    }
                </div>
            </div>
            <CreatePlaylistModal
                show={modalShow}
                listedMusic={listedMusic}
                onHide={() => setModalShow(false) & setListedMusic({})}
            />
        </>
    );
};

export default Home;