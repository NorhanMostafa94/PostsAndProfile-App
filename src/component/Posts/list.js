import React, { Component } from 'react';
import axios from 'axios';
import {Container, Row} from 'react-bootstrap';

import Post from './post';

class PostsList extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
        return <Container>
            <Row className="justify-content-md-center">
{            this.state.data.map(p => <Post key={p.id} {...p}></Post>)
}            </Row></Container>
        }
    }
    
export default PostsList;