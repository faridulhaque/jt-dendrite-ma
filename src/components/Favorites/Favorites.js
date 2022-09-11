import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../../styles/Styles.css'

const Favorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))

    return (
        <div>
            <h1 className='text-center my-text my-5'>Your best choices</h1>
            {
                favorites === null && <h2 className='text-center my-text'>You have not added any item in your favorite lists. </h2>
            }
            <div className='music-container'>
                {
                    favorites?.map(music =>
                        <div key={music.title}>
                            <Card className='music-card'>
                                <Card.Img variant="top" src={music.img_src} style={{ height: '12rem' }} />
                                <Card.Body>
                                    <Card.Title className="music-title">{music.title}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="my-text">{music.artist}</ListGroup.Item>
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

export default Favorites;