import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Container, Form } from 'react-bootstrap'
import Add from './Add'
import './Comp1.css'
import ImagesDisplay from './ImagesDisplay'

function Comp1() {
    const butStyle = {
        margin: '5px',
        height: '1.8rem',
        fontSize: '0.63rem',
        background: 'none',
        color: 'white',
        border: '1px solid white',
        width: '4rem',
    }
    return (
        <Router>
            <Navbar bg='dark' variant='dark' style={{
                height: '2.5rem'
            }}>
                <Container>
                    <Navbar.Brand href='/'>Component 1</Navbar.Brand>
                </Container>
                <Form inline>
                   <Link to='/add' exact>
                       <button style={butStyle}>Add Image</button>
                    </Link>
                </Form>
            </Navbar>
            <Route path='/add' component={Add} />
            <Route path='/' exact component={ImagesDisplay} />
            
        </Router>
    )
}

export default Comp1
