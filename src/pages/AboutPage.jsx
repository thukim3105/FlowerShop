import React from 'react'
import { Link } from 'react-router-dom'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import Button from '../components/ui/Button'
import Footer from '../layouts/Footer'

const aboutSections = [
    {
        title: 'Cultivated with care for every season',
        description:
            'From studio-grown stems to bespoke bouquet styling, our florists bring a gentle, mindful approach to every arrangement. We keep our palette soft, our process thoughtful, and our delivery warm.',
        image: '/img/rose.jpg',
        ctaText: 'Explore our florals',
    },
    {
        title: 'Designed around your story',
        description:
            'Whether it is a quiet thank-you, a festive gathering, or a seasonal gift, each composition is crafted to feel personal, elegant, and effortless.',
        image: '/img/lavender.jpg',
        reverse: true,
        ctaText: 'Discover the ritual',
    },
    {
        title: 'A calm destination for thoughtful gifting',
        description:
            'We believe every bouquet should arrive with the same attention as a treasured letter. Beautiful packaging, attentive timing, and a gentle presentation are part of every order.',
        image: '/img/hydrangea.jpg',
        ctaText: 'Learn more about us',
    },
]

function AboutPage() {
    return (
        <>
            <main className="min-h-screen bg-[#fbf9f5] text-[#1b1c1a] pt-32 px-6 lg:px-24 pb-16">
                <section className="mx-auto max-w-5xl text-center ">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#7c7a72]">About Us</p>
                    <h1 className="mt-6 font-serif text-5xl sm:text-6xl leading-tight">
                        Flowers for quiet moments and joyful milestones.
                    </h1>
                    <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#5b6c57]">
                        We blend timeless floral craft with soft, modern details so each delivery feels elegant, effortless, and deeply personal.
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button className="rounded-full px-10 py-3" onClick={() => window.location.assign('/product')}>
                            Shop bouquets
                        </Button>
                        {/* <Link to="/product" className="inline-flex items-center rounded-full border border-[#d3c8be] bg-white px-8 py-3 text-sm font-semibold text-[#1b1c1a] transition hover:border-[#2b6954] hover:text-[#2b6954]">
                            See our collection
                        </Link> */}
                        <Button className="rounded-full px-10 py-3" onClick={() => window.location.assign('/product')} variant="secondary">
                            See our collection
                        </Button>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl space-y-20 pb-12 pt-20">
                    {aboutSections.map((section) => (
                        <AboutSection
                            key={section.title}
                            title={section.title}
                            description={section.description}
                            image={section.image}
                            reverse={section.reverse}
                            ctaText={section.ctaText}
                        />
                    ))}
                </section>

                <section className="mx-auto max-w-7xl py-12">
                    <ContactSection />
                </section>



            </main>
            <Footer />
        </>
    )
}

export default AboutPage
