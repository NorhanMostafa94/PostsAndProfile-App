import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Components
import posts from './component/Posts/list';
import postsItem from './component/Posts/post_item';
import addPost from './component/Posts/add';
import users from './component/Users/list';
import userProfile from './component/Users/user-profile';
import Home from './component/home';
import NotFound from './component/not-found';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Navbar  bg="dark" variant="dark" expand="lg">
              <Navbar.Brand>My First React-App</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/posts" style={{color: '#F8F9FA',textDecoration: 'none'}}>Posts</Link>
                  <Nav.Link></Nav.Link><Link to="/users" style={{color: '#F8F9FA',textDecoration: 'none'}}>Profile</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route path='/posts/add/:id' component={addPost} />
              <Route path='/posts/:id' component={postsItem} />
              <Route path='/users/:id' component={userProfile} />
              <Route path='/posts' component={posts} />
              <Route path='/users' component={users} />
              <Route exact path='/' component={Home} />
              <Route path='*' component={NotFound} />
            </Switch>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
