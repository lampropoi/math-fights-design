import React, { Component } from 'react';
import './home.css';
import XP from '../components/XP/XP';
import Hexagon from '../components/Hexagon/Hexagon';
import badge from '../assets/badge.svg';
import trophy from '../assets/trophy.svg';

class Leaderboard extends Component {
  render() {
    return (
      <div className='home-container'>
        <span className='xp'>
          <span className='text'>{14}</span>
        </span>
        <div className='full-width-div'>
          <span className='semi-circle'></span>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
