import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.svg'
import schedule from '../Images/schedule.png'
import leaderboard from '../Images/leaderboard.png'


function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="" />
      <div className="d-flex align-items-center wrap">
        <div className="d-flex">
          <img src={schedule} alt="" height="25px" />
          <Link to={{ pathname: "/schedule" }} className="link">
            Schedule
          </Link>
        </div>

        <div className="d-flex" style={{ marginLeft: "40px" }}>
          <img src={leaderboard} alt="" height="25px" />
          <Link to={{ pathname: "/leaderboard" }} className="link">
            Leaderboard
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header