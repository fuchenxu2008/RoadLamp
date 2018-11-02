import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSocket } from './actions/global';
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard';
import io from 'socket.io-client';
// import loading from './assets/loading.gif';
import './App.css';

class App extends Component {
  componentDidMount() {
    const socket = io('http://127.0.0.1:3333');
    socket.on('connect', () => {
      console.log('Socket connected');
      this.props.setSocket(socket);
    })
    socket.on('disconnect', () => {
      console.log('Socket disconnected');
      this.props.setSocket(null);
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <DashBoard />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSocket: (socket) => dispatch(setSocket(socket)),
})

export default connect(null, mapDispatchToProps)(App);
