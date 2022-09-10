import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Favorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))

    return (
        <div>
            <h1 className='text-center'>Your best tastes</h1>
            {
                favorites === null && <h2 className='text-center'>You have not added any item in your favorite lists. </h2>
            }
            <div className='music-container'>

                {
                    favorites?.map(music =>
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

export default Favorites;