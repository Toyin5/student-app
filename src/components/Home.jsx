import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"
import Footer from './layouts/Footer';
import Navbar from './layouts/NavBar';


function Home() {
  const user = localStorage.getItem("name");


  const contentStyle = {
    "paddingTop": "50px"
  }

  const footerStyle = {
    "paddingTop": "70px"
  }


  return (
    <>
      <Navbar />
      <div style={contentStyle} className='content has-text-centered'>

        <h1>Welcome, {user}</h1>
        <p>
          Welcome to the Attendance Management System(AMS) student App
          <br />Click the button below to register an attendance
        </p>
        <Link to='/scan'><button className='button is-large is-focus is-primary is-inverted'>Scan Code</button></Link>
      </div>
      <Footer style={footerStyle} />
    </>
  )
}

export default Home