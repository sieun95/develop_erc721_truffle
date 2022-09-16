import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
         <div className='links'>
            <Link to="/">MainPage</Link>
            <Link to="/pre-mintingpage">Minting</Link>
            <Link to="/mypage">MyPage</Link>
            <Link to="/market">Market</Link>
            <Link to="/stakingpage">Staking</Link>
         </div>
    </div>
  )
}

export default Navbar