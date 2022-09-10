import React, { useEffect, useState } from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMusic } from '../../services/actions/MusicAction';
import '../../styles/Styles.css'

const Search = () => {
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
    console.log(searchedData)

    return (
        <>
            <div className='search'>


                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Search your music</Form.Label>
                        <Form.Control onChange={e => handleSearch(e.target.value)} type="text" placeholder="search here..." />

                    </Form.Group>
                </Form>
            </div>
            <div className='music-container'>
                {
                    searchedData.map(music =>
                        <div >
                            <Card style={{ width: '12rem' }}>

                                <Card.Img variant="top" src={music.img_src} style={{ height: '12rem' }} />
                                <Card.Body>
                                    <Card.Title>p{music.title}

                                    </Card.Title>

                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                        

                                    </ListGroup.Item>
                                    <ListGroup.Item>{music.artist}</ListGroup.Item>
                                    <ListGroup.Item><audio style={{ width: '100%' }}
                                        src={music.src}

                                        controls
                                    ></audio></ListGroup.Item>

                                </ListGroup>

                            </Card>
                        </div>




                    )
                }
            </div>
        </>




    );
};

export default Search;