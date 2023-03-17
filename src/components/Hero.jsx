import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './componentStyles/hero.css'

function Hero() {
    return (
        <Container>
            <Row>
                <Col xs={12} className="d-flex justify-content-center">
                    <div className='text-center'>
                        <h1>Canada Plates</h1>
                        <h2>The Ultimate Plate Generator</h2>
                    </div>
                </Col>
                <Col xs={12} className="d-flex justify-content-center">

                    <Button variant="outline-primary link-primary">
                        <Link to="/home">Get Started</Link>
                    </Button>
                    <Button variant="outline-secondary link-secondary">
                        <Link to="https://github.com" target="_blank">View Repo</Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero