import React from 'react'
import Header from '../layouts/Header'
import Intro from '../layouts/Intro'
import Body from '../layouts/Body'
import Footer from '../layouts/Footer'

function Home() {
  return (
    <div className="w-full">
      <main>
        <section>
          <Intro />
        </section>
        <section>
          <Body />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  )
}

export default Home