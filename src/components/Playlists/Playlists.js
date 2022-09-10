import React, { useState } from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';

const Playlists = () => {

    const [selectedPlaylist, setSelectedPlaylist] = useState([])

    const playlistsName = JSON.parse(localStorage.getItem('playlistsName'))

    const handlePlaylistSelection = (playlist) => {
        const playlists = JSON.parse(localStorage.getItem('playlists'))
        const selected = playlists.filter(pl => pl.playlist === playlist)
        setSelectedPlaylist(selected)


    }

    return (
        <div className='mb-5'>
            <h1 className='text-center'>Playlists</h1>
            {
                playlistsName?.length >= 1 && <h2 className='text-center'>You have not created any playlist.</h2>
            }
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Select onChange={(e) => handlePlaylistSelection(e.target.value)} className='w-75' aria-label="Default select example">
                    {
                        playlistsName?.map(pl => <option value={pl.name}>{pl.name}</option>)
                    }
                </Form.Select>
            </div>
            <div className='music-container mt-5'>

                {
                    selectedPlaylist?.map(music =>
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


                                </ListGroup>

                            </Card>
                        </div>




                    )
                }
            </div>
        </div>
    );
};

export default Playlists;