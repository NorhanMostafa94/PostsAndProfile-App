import React, { Component } from 'react';
import axios from 'axios';
import {Container, Row} from 'react-bootstrap';

import User from './profile';

class UserList extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
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
{            this.state.data.map(p => <User key={p.id} {...p}></User>)
}            </Row></Container>
        }
    }
    
export default UserList;