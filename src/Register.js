import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom"

function Register() {
    const location = useLocation();
    const event = location.state.event;
    return (
        <Card className='mt-2 mx-auto w-75'>
            <Card.Header>
                <Card.Title>{event.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Image src={event.imageURL} alt={event.name} />
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>
                    <strong>Date:</strong> {event.date.toLocaleDateString()}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Register for this Event</Button>
            </Card.Footer>
        </Card>
    );
}

export default Register;
