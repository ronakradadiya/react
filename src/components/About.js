import React from 'react'

const About = () => {
  const user = null; // Simulating missing data
  
  if (!user) {
    throw new Error("User data is missing in About Page!");
  }
  
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page of our application.</p>
    </div>
  )
}

export default About