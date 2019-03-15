import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = (props) => {
    return (
        <Card style={{ width: '18rem',height:'15rem',margin:'20px' }}>
            <Card.Body>
                <Card.Text>{props.id}</Card.Text>
                <Card.Title>{props.title}</Card.Title>
                <div className="postLink">
                <Link style={{color: 'white', textDecoration: 'none'}} to={`/posts/${props.id}`}>View</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Post;