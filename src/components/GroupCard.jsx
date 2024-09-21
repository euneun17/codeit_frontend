import React from 'react';
import '../style/GroupCard.css';
import myImage from '../assets/cardImage1.png';

const GroupCard = () => {
  return (
    <div className="GroupCardBoard">
      <img src={myImage} alt="Group" className='GroupCardImage' />
      <div className='GroupCardContent'>
        <p className='Day'>sample</p>
        <p className='userName'>sample</p>
        <p className='award'>sample</p>
      </div>
    </div>
  );
};

export default GroupCard;