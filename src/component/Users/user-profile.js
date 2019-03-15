import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Post from './../Posts/post'


class UserProfile extends Component {
    state = {
        data: {},
        posts: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(this.props);
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                // console.log(res);
                const data = res.data;
                this.setState({ data })
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((res) => {
                // console.log(res);
                const posts = res.data;
                this.setState({ posts })
            })
            .catch((err) => {
                console.log(err)
            })

    }

    render() {
        return (
            <>
                <div className="addPost">
                    <Link style={{ color: 'white', textDecoration: 'none' }} to={`/posts/add/${this.props.match.params.id}`}>Add Post</Link>
                </div>
                <div className="posts-header">
                    <h3 style={{textAlign: 'center'}}>Posts</h3>
                </div>
                <Container style={{ display: 'flex' , marginTop: '20px'}}>
                    <Card style={{ width: '65rem', marginTop: '-60px'}}>
                        <Card.Body>
                            <Card.Title style={{borderBottom: '0.5px solid #DFDFDF',paddingBottom: '20px'}}>{this.state.data.name}</Card.Title>
                            <Card.Text>Username: {this.state.data.username}</Card.Text>
                            <Card.Text>Email: {this.state.data.email}</Card.Text>
                            <Card.Text>Phone: {this.state.data.phone}</Card.Text>
                            <Card.Text>Website: {this.state.data.website}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Row className="justify-content-md-center">
                        {
                            this.state.posts.map(p => <Post key={p.id} {...p}></Post>)
                        }
                    </Row>
                </Container>
            </>
        )
    }
}
export default UserProfile;