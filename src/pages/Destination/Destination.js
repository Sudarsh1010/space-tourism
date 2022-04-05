import React from 'react'
import './Destination.scss'
import NavBar from '../../components/NavBar/NavBar'
import { images } from '../../constants/index'


const Destination = () => {
  return (
    <wrapper className='destination-page'>
      <NavBar />
      <main className='destination'>
        <div className="left-container">
          <h5><span>01</span>&nbsp;&nbsp;pick your Destination</h5>
          <img src={images.moon} alt="Moon" />
        </div>

        <div className="right-container">
          <nav>
            <a href="/" className='active-tab'>moon</a>
            <a href="/" className=''>mars</a>
            <a href="/" className=''>europa</a>
            <a href="/" className=''>titan</a>
          </nav>

          <h2>Moon</h2>

          <p className='moon-content'>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
          </p>

          <div className="distance-duration">
            <section className="distance">
              <p id='subheading2'>avg. distance</p>
              <h4 id='subheading1'>384,400 km</h4>
            </section>

            <section className="duration">
              <p id='subheading2'>est. travel time</p>
              <h4 id='subheading1'>3 days</h4>
            </section>
          </div>
        </div>
      </main>
    </wrapper>
  )
}

export default Destination