import React from 'react'
import { Card } from 'react-bootstrap'
import './Images.css'

function Images({ image }) {
    const cardStyle = { 
        width: '9rem', 
        height: '8rem', 
        margin: '10px',
    }
    return (
        <Card className='card' style={cardStyle}>
            <Card.Body>
                <Card.Title className='title'>{ image.title }</Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={ image.url } />
            <Card.Body>
                <button variant='outline-success' className='button'>Update</button>
            </Card.Body>
        </Card>
    )
}

export default Images
