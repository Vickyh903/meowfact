import React from 'react';
import '../App.css';
import images from "../images";
import HomeSection1 from "../components/HomeSection1";
import '../pages/Home.css';

function Home() {
  
  return (
    <div>

    <HomeSection1 />

      <section className="section2">
        <img className="home-section2" 
          src={images.homeSet2} />
      </section>
    </div>
  )
}

export default Home
