import React, { useState } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'

const contactItems = [
  {
    label: 'Address',
    value: '741 Bloom Lane, Willow City, CA',
    icon: (
      <svg className="w-5 h-5 text-[#2b6954]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 21c4-3.5 7-6.5 7-10a7 7 0 1 0-14 0c0 3.5 3 6.5 7 10Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (555) 832-4190',
    icon: (
      <svg className="w-5 h-5 text-[#2b6954]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.47 12.47 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.47 12.47 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'hello@flowershop.com',
    icon: (
      <svg className="w-5 h-5 text-[#2b6954]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M22 6.5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-11A2 2 0 0 1 4 4.5h16a2 2 0 0 1 2 2Z" />
        <path d="m22 6.5-10 7-10-7" />
      </svg>
    ),
  },
]

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="rounded-[2rem] bg-[#fffdfa] px-6 py-12 shadow-sm sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-[#7d796e]">Get in Touch</p>
            <h2 className="font-serif text-4xl text-[#1b1c1a]">Feel the fragrance of thoughtful service</h2>
            <p className="max-w-2xl text-base leading-8 text-[#5b6c57]">
              Our studio is here to help with every request, from bouquet design to delivery details. Send us a note and we’ll respond promptly.
            </p>

            
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-3xl bg-[#e8f0ea]">{item.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-[#1b1c1a]">{item.label}</p>
                    <p className="text-sm text-[#5b6c57]">{item.value}</p>
                  </div>
                </div>
              ))}
          </div>

          <Card className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#1b1c1a]">
                  Name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange('name')}
                  required
                  className="w-full rounded-[1.5rem] border border-[#d8d2c5] bg-[#fbf8f4] px-4 py-3 text-sm text-[#1b1c1a] placeholder:text-[#9b9c96] focus:border-[#2b6954] focus:outline-none focus:ring-2 focus:ring-[#d5e5d9]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1b1c1a]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  required
                  className="w-full rounded-[1.5rem] border border-[#d8d2c5] bg-[#fbf8f4] px-4 py-3 text-sm text-[#1b1c1a] placeholder:text-[#9b9c96] focus:border-[#2b6954] focus:outline-none focus:ring-2 focus:ring-[#d5e5d9]"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#1b1c1a]">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange('message')}
                  required
                  rows="5"
                  className="w-full rounded-[1.5rem] border border-[#d8d2c5] bg-[#fbf8f4] px-4 py-3 text-sm text-[#1b1c1a] placeholder:text-[#9b9c96] focus:border-[#2b6954] focus:outline-none focus:ring-2 focus:ring-[#d5e5d9]"
                  placeholder="Tell us how we can help"
                />
              </div>

              <Button type="submit" className="w-full rounded-full px-8 py-3">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
