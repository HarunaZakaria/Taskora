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
      <h1>{greet}</h1>
    </div>
  );
};

export default Header;
