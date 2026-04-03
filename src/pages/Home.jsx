import React from 'react'
import Header from '../layouts/Header'
import Intro from '../layouts/Intro'

function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6">
      <main className="py-6 sm:py-10">
        <section className="mt-4">
          <Intro />
        </section>
      </main>
    </div>
  )
}

export default Home