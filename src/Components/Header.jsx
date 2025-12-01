import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  const hours = new Date().getHours();
  let greet;
  if (hours < 12) {
    greet = 'Good Morning';
  } else if (hours >= 12 && hours < 18) {
    greet = 'Good Afternoon';
  } else {
    greet = 'Good Evening';
  }
  return (
    <div>
      <Navbar />
      <div className="header">
        <h1 className="heading">{greet}</h1>
        <p>
          Continue to grow and learn. <span>🚴‍♂️</span>
        </p>
        <div className="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p>0% completed</p>
        <p>Points: 0 | Streak: 0🔥</p>
        <button className='btn btn-primary add-btn'>Add Tasks</button>
        <button className='btn btn-primary add-btn'>View Tasks</button>
      </div>
    </div>
  );
};

export default Header;
