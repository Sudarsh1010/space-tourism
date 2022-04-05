import React from 'react'
import './Home.scss'
import NavBar from '../../components/NavBar/NavBar'

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <main>
        <section>
          <h5>
            so, you want to travel to
          </h5>

          <h1>
            space
          </h1>

          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </section>

        <div>
          <a href="/">
            <h4>explore</h4>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home