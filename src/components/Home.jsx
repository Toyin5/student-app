import React from 'react'

function Home() {
  const user = localStorage.getItem("name")
  return (
    <div className='container'>
        
        <h1>Welcome {user}</h1>
    </div>
  )
}

export default Home