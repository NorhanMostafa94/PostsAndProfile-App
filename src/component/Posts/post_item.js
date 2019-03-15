import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container, Row} from 'react-bootstrap';


class PostsItem extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(this.props);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                // console.log(res);
                const data = res.data;
                this.setState({ data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <Container>
            <Row className="justify-content-md-center">
            <Card style={{ width: '50rem', marginTop: '20px' }}>
                <Card.Body>
                    <Card.Text>{this.state.data.id}</Card.Text>
                    <Card.Title>{this.state.data.title}</Card.Title>
                    <Card.Text>{this.state.data.body}</Card.Text>
                </Card.Body>
            </Card>
            </Row>
            </Container>
        )
    }
}
export default PostsItem;