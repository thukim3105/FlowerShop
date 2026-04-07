import React from 'react'
import Header from '../layouts/Header'
import Hero from '../components/landing/Hero'
import Body from '../layouts/Body'
import Footer from '../layouts/Footer'

function Home() {
  return (
    <div className="w-full bg-[#fbf9f5]">
      <Header />
      <main className="pt-27">
        <section>
          <Hero />
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