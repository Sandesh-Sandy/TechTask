import React, { useState, useEffect } from 'react'
import Images from './Images'
import './Comp1.css'
import axios from 'axios'

function ImagesDisplay() {
    const [image, setImage] = useState([])
    useEffect(() => {
        async function fetchMyAPI() {
            await axios.get("https://precily-task.herokuapp.com/comp1")
            .then((res) => setImage(res.data))
            .catch((err) => console.log(err.message))
        }
        fetchMyAPI()
    }, [])

    return (
        <div className='flex'>
            {image.map((img) => (
                <Images image={img} />
            ))}
        </div>
    )
}

export default ImagesDisplay
