import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const User = (props) => {
    return (
        <Card style={{ width: '18rem' ,height:'12rem',margin:'20px'}}>
            <Card.Body>
                <Card.Text>{props.id}</Card.Text>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.username}</Card.Text>
                <div className="postLink">
                <Link style={{color: 'white', textDecoration: 'none'}}to={`/users/${props.id}`}>View</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default User;