import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Alert } from 'react-st-modal'

const CreatePlaylistModal = (props) => {
    const [playlistName, setPlaylistName] = useState('')
    const [newPlaylistName, setNewPlaylistName] = useState('')

    const playlistsName = JSON.parse(localStorage.getItem('playlistsName'))


    const existingPlaylist = JSON.parse(localStorage.getItem('playlists'))


    const music = props.listedMusic;

    const handleCreateNewPlaylist = async () => {
        if (playlistsName === null) {
            const updatedPlaylistsName = []
            updatedPlaylistsName.push({ name: newPlaylistName })
            localStorage.setItem('playlistsName', JSON.stringify(updatedPlaylistsName))
            return Alert('new playlist created')
        }
        else if (playlistsName.length >= 1) {
            const matched = playlistsName.filter(pn => pn.name === newPlaylistName)
            console.log(matched)
            if (matched.length >=1) {

                return Alert('Please enter a different name!', 'You already have a playlist with that name')
            }
            const updatedPlaylistsName = playlistsName;
            updatedPlaylistsName.push({ name: newPlaylistName })
            localStorage.setItem('playlistsName', JSON.stringify(updatedPlaylistsName))
            return Alert('playlists successfully created')
        }

    }


    const handleSubmit = (e) => {
        const playlist = e.target.playlist.value;

        e.preventDefault();


        if (existingPlaylist === null) {
            const playListedMusic = { ...music, playlist: playlist }
            const playlists = []
            playlists.push(playListedMusic)
            localStorage.setItem('playlists', JSON.stringify(playlists))
        }




    }
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create your playlists!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>


                    {
                        playlistsName === null &&
                        <Form.Label>You don't have any playlists, please create one</Form.Label>
                    }
                    <Form.Select onChange={(e) => setPlaylistName(e.target.value)} aria-label="Default select example" disabled={playlistsName === null}>
                        <option>Select your playlist</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Song</Form.Label>
                        <Form.Control type="text" value={music.title} disabled />

                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={playlistsName === null}>
                        Add
                    </Button>
                    <hr></hr>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create a new playlist!
                    </Modal.Title>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name for your playlist</Form.Label>
                        <Form.Control onBlur={(e) => setNewPlaylistName(e.target.value)} type="text" placeholder="Add a name" name="playlist" />

                    </Form.Group>
                    <Button onClick={handleCreateNewPlaylist} variant="primary" type="button">
                        Create
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePlaylistModal;