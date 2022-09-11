import { Alert } from 'react-st-modal';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const CreateNewPlaylistModal2 = (props) => {

    const existingPlaylistName = JSON.parse(localStorage.getItem('playlistsName'))


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPlaylistName = e.target.playlist.value;
        if (newPlaylistName === '')
            return toast.warn('Please input a name for new playlist', 'Input filed is empty')

        if (existingPlaylistName === null) {
            const updatedPlaylistsNames = []
            updatedPlaylistsNames.push({ name: newPlaylistName })
            localStorage.setItem('playlistsName', JSON.stringify(updatedPlaylistsNames))
            return toast.success('New playlist added')
        }

        const matched = existingPlaylistName.filter(pln => pln.name === newPlaylistName)
        if (matched.length >= 1) {
            return toast.error('A playlist already exists with that name. Please try a different name.')
        }

        if (existingPlaylistName.length >= 1) {
            const updatedPlaylistsNames = existingPlaylistName;
            updatedPlaylistsNames.push({ name: newPlaylistName })
            localStorage.setItem('playlistsName', JSON.stringify(updatedPlaylistsNames))
            return toast.success('New playlist added')
        }


    }

    return (
        <>
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

                        <Modal.Title id="contained-modal-title-vcenter">
                            Create a new playlist!
                        </Modal.Title>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name for your playlist</Form.Label>
                            <Form.Control type="text" placeholder="Add a name" name="playlist" />
                        </Form.Group>
                        <Button type="submit">Create</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
            ></ToastContainer>
        </>
    );
};

export default CreateNewPlaylistModal2;