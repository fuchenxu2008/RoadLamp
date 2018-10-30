import React, { Component } from 'react';
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard';
import io from 'socket.io-client';
import loading from './assets/loading.gif';
import './App.css';

class App extends Component {
  state = { socket: null, img: null, fps: 0 }

  componentDidMount() {
    const socket = io('http://192.168.1.101:3333');
    socket.on('connect', () => {
      console.log('Socket connected');
      this.setState({ socket });
    })
    socket.on('ready', () => {
      console.log('ready');
      this.setState({ img: loading })
    })
    socket.on('image', (data) => {
      console.log(new Date());
      this.setState({ img: data.frame, fps: data.fps })
    })
    socket.on('disconnect', () => {
      console.log('Socket disconnected');
      this.setState({ socket: null });
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <DashBoard />
        {
          this.state.img &&
          <div style={{ alignSelf: 'center', textAlign: 'center' }}>
            <img src={this.state.img} alt="" style={{ width: '50%' }}/>
            <h1>FPS: {this.state.fps}</h1>
          </div>
        }
      </div>
    );
  }
}

export default App;
