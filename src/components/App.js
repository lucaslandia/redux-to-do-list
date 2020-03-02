import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './App.sass'
import Header from './Header'
import Main from './Main'

const App = () => {
    useEffect(() => {
        document.documentElement.style.height = '100%'
        document.body.style.height = '100%'
        document.getElementById('root').style.height = '100%'
    }, [])

    return (
        <Container fluid className='appContainer'>
            <Row className='appRow'>
                <Col className='appCol'>
                    <Header />
                    <Main />
                </Col>
            </Row>
        </Container>
    )
}

export default App