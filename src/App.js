import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      person: {
        fullName: 'Ruth Smith',
        bio: 'A junior frontend developer enthusiastic about creating and developing user-friendly web experinces.',
        imgSrc: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
       profession: 'Front-End Developer'
      },
      shows: true,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval (() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState)  => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    const cardStyle = {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth:  '620px'
    }

    const btnStyle = {
      border: 'none',
      borderRadius: '8px',
      padding: '8px 15px',
      backgroundColor: 'blue',
      color: '#fff',
      cursor: 'pointer'
    }

    return (
      <div style={cardStyle}>
        <h2>Name: {person.fullName}</h2>
        <p style={{ fontWeight: 'bold', fontSize: '20px'}}>Bio: <span style={{ fontWeight: 'lighter', fontSize: '18px'}}>{person.bio}</span></p>
        <img src={person.imgSrc} style={{ borderRadius: '8px' }} alt="Person"/>
        <h3>Profession: {person.profession}</h3>
        <p>{shows ? 'Currently showimg' : 'Currently not showing'}</p>
        <button onClick={this.toggleShow} style= {btnStyle}>Profile</button>
        <p>Time Interval since mount: {timeInterval} seconds</p>
      </div>
    )
  }
}

export default App;
