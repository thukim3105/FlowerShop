import React from 'react'
import Header from '../layouts/Header'
import Intro from '../layouts/Intro'

function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto sm:px-6">
      <main>
        <section>
          <Intro />
        </section>
      </main>
    </div>
  )
}

export default Home