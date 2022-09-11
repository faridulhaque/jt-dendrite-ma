import React, { useEffect, useState } from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';
import '../../styles/Styles.css'

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
            <h1 className='text-center my-text'>Playlists</h1>
            {
                playlistsName?.length === null && <h2 className='text-center my-text'>You have not created any playlist.</h2>
            }
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Select onChange={(e) => handlePlaylistSelection(e.target.value)} className='w-75' aria-label="Default select example">
                    <option value="0">No playlist selected</option>
                    {
                        playlistsName?.map(pl => <option value={pl.name}>{pl.name}</option>)
                    }
                </Form.Select>
            </div>
            <div className='music-container mt-5'>

                {
                    selectedPlaylist?.map(music =>
                        <div key={music.title}>
                            <Card className='music-card'>
                                <Card.Img variant="top" src={music.img_src} style={{ height: '12rem' }} />
                                <Card.Body>
                                    <Card.Title className='card-title'>{music.title}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className='my-text'>{music.artist}</ListGroup.Item>
                                    <ListGroup.Item><audio style={{ width: '100%' }}
                                        src={music.src}
                                        controls
                                    ></audio></ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Playlists;