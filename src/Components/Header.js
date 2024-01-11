import React from 'react';
import banner from '../Assets/banner.png';

const Header = () => {
  return (
    <div>
      <h1 className='title'>Epic Games: An American video game and software developer and publisher based in Cary, North Carolina.</h1>
      <div className='banner'>
        <img src={banner} alt="Banner" />
      </div>
      <div className='banner-text'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you 
        can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
      </div>
      <div className='Header-button'>
        <button className='visit-button' >Visit Website</button>
      </div>
    </div>
  );
}

export default Header;
