import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Add() {
    let history = useHistory();
    const [img, setImg] = useState('');
    const [url, setUrl] = useState('');
    const onChangeImg = ({target}) => {
        setImg(target.value)
    };
    const onChangeUrl = ({target}) => {
        setUrl(target.value);
    }
    const onFormSubmit = async (e) => {
      e.preventDefault()
      await axios.post('https://precily-task.herokuapp.com/comp1', {
          title: img,
          url: url
      }).then(() => {
          history.push('/')
      })
    }
    return (
        <Form style={{
            padding: '10px'
        }} onSubmit={onFormSubmit}>
            <br />
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Title" onChange={onChangeImg} />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Image Url" onChange={onChangeUrl} />
            </Form.Group><br />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Add
