import React, { Component } from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
class AddPost extends Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            title: '',
            body: '',
            userId: this.props.match.params.id,
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        // console.log(e);
        e.preventDefault();

        const { title, body ,userId} = this.state;
        const validationContext = new SimpleSchema(
            {
                title: String,
                body: String
            }
        ).newContext();
        validationContext.validate({ title, body });
        if (validationContext.isValid()) {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.userId}`, { title, body, userId })
                .then((res) => {
                    console.log(res);
                    this.props.history.push(`/users/${this.state.userId}`)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        this.setState({ errors: validationContext.validationErrors() });

    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <Container>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Enter title" onChange={this.handleChange} value={this.state.title} />
                        <br />
                        <Form.Label>Post body</Form.Label>
                        <Form.Control type="text" name="body" placeholder="Enter body" onChange={this.handleChange} value={this.state.body} />
                        <br />
                        <Button style={{background: '#FC6377', border: '0'}}type="submit">Submit</Button>
                    </Form.Group>
                </Form>
                <div>
                    {
                        this.state.errors.length
                            ? this.state.errors.map(e => <h1>{e.name} is not valid</h1>)
                            : <h1>no errros</h1>
                    }
                </div>
            </Container>
        )
    }
}
export default AddPost;