import React, { useMemo, useState } from 'react'
import { useCart } from '../context/CartContext'

const timeOptions = ['Morning (8am - 11am)', 'Midday (11am - 2pm)', 'Afternoon (2pm - 5pm)']

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
const formatCurrency = (value) => formatter.format(value)

function Cart() {
    const { items, cartCount, subtotal, shipping, total, updateQuantity, removeItem } = useCart()
    const [form, setForm] = useState({
        email: '',
        fullName: '',
        phone: '',
        countryCode: '+84',
        address: '',
        date: '',
        time: timeOptions[0],
        message: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
    })
    const [paymentMethod, setPaymentMethod] = useState('card')
    const [promoCode, setPromoCode] = useState('')
    const [discount, setDiscount] = useState(0)
    const [promoStatus, setPromoStatus] = useState('')

    const effectiveTotal = useMemo(() => subtotal + shipping - discount, [subtotal, shipping, discount])

    const isFormComplete =
        form.email &&
        form.fullName &&
        form.phone &&
        form.address &&
        form.date &&
        form.time &&
        items.length > 0 &&
        (paymentMethod !== 'card' || (form.cardNumber && form.expiry && form.cvc))

    const handlePromoSubmit = (event) => {
        event.preventDefault()
        const normalized = promoCode.trim().toLowerCase()

        if (normalized === 'botanic10' && subtotal > 0) {
            const amount = Math.round(subtotal * 0.1)
            setDiscount(amount)
            setPromoStatus('Promo code applied — 10% off')
        } else {
            setDiscount(0)
            setPromoStatus('Enter BOTANIC10 to save 10%')
        }
    }

    const handleFieldChange = (field) => (event) => {
        setForm((current) => ({ ...current, [field]: event.target.value }))
    }

    return (
        <main className="min-h-screen bg-[#f7f2ec] pt-[8rem] pb-16 px-6 lg:px-24">
            <div className="mx-auto max-w-7xl space-y-10">
                <section className="rounded-[2rem] bg-white/90 p-10 shadow-[0_30px_80px_rgba(27,28,26,0.12)] backdrop-blur-sm">
                    <div className="max-w-3xl">
                        <p className="text-sm font-manrope uppercase tracking-[0.24em] text-[#6c796d]">Checkout</p>
                        <h1 className="mt-3 font-serif text-5xl tracking-[-0.04em] text-[#1b1c1a]">Finish your botanical order</h1>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5b6c57]">
                            Review your botanical selections and finalize delivery details for a calm, premium planting experience.
                        </p>
                    </div>
                </section>

                <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
                    <div className="space-y-8">
                        <section className="rounded-[2rem] bg-white p-8 shadow-[0_24px_56px_rgba(27,28,26,0.08)]">
                            <div className="flex items-center justify-between gap-4 border-b border-[#dcd3c8] pb-6">
                                <div>
                                    <h2 className="font-serif text-3xl text-[#1b1c1a]">Delivery Information</h2>
                                    <p className="mt-2 text-sm text-[#6c796d]">
                                        Provide the details needed to deliver your botanical order with care.
                                    </p>
                                </div>
                                <span className="rounded-full bg-[#eef2ed] px-4 py-2 text-sm text-[#2b6954]">{cartCount} items</span>
                            </div>

                            <div className="mt-8 grid gap-6">
                                <label className="grid gap-2 text-sm text-[#5b6c57]">
                                    Email Address
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={handleFieldChange('email')}
                                        placeholder="hello@botanical.com"
                                        className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                    />
                                </label>

                                <label className="grid gap-2 text-sm text-[#5b6c57]">
                                    Full Name
                                    <input
                                        type="text"
                                        value={form.fullName}
                                        onChange={handleFieldChange('fullName')}
                                        placeholder="Mai Nguyen"
                                        className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                    />
                                </label>

                                <div className="grid gap-3 md:grid-cols-[150px_1fr]">
                                    <label className="grid gap-2 text-sm text-[#5b6c57]">
                                        Country code
                                        <select
                                            value={form.countryCode}
                                            onChange={handleFieldChange('countryCode')}
                                            className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-4 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                        >
                                            <option>+84</option>
                                            <option>+1</option>
                                            <option>+44</option>
                                        </select>
                                    </label>

                                    <label className="grid gap-2 text-sm text-[#5b6c57]">
                                        Phone Number
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleFieldChange('phone')}
                                            placeholder="123 456 789"
                                            className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                        />
                                    </label>
                                </div>

                                <label className="grid gap-2 text-sm text-[#5b6c57]">
                                    Shipping Address
                                    <textarea
                                        value={form.address}
                                        onChange={handleFieldChange('address')}
                                        rows="4"
                                        placeholder="123 Leaf Street, District 1, Ho Chi Minh City"
                                        className="w-full resize-none rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                    />
                                </label>

                                <div className="grid gap-3 md:grid-cols-2">
                                    <label className="grid gap-2 text-sm text-[#5b6c57]">
                                        Delivery Date
                                        <input
                                            type="date"
                                            value={form.date}
                                            onChange={handleFieldChange('date')}
                                            className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                        />
                                    </label>

                                    <label className="grid gap-2 text-sm text-[#5b6c57]">
                                        Preferred Time
                                        <select
                                            value={form.time}
                                            onChange={handleFieldChange('time')}
                                            className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-4 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                        >
                                            {timeOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>

                                <label className="grid gap-2 text-sm text-[#5b6c57]">
                                    Gift Message (Optional)
                                    <textarea
                                        value={form.message}
                                        onChange={handleFieldChange('message')}
                                        rows="3"
                                        placeholder="Add a short note for the recipient"
                                        className="w-full resize-none rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                    />
                                </label>
                            </div>
                        </section>

                        <section className="rounded-[2rem] bg-white p-8 shadow-[0_24px_56px_rgba(27,28,26,0.08)]">
                            <div className="flex items-center justify-between gap-4 border-b border-[#dcd3c8] pb-6">
                                <div>
                                    <h2 className="font-serif text-3xl text-[#1b1c1a]">Payment Method</h2>
                                    <p className="mt-2 text-sm text-[#6c796d]">
                                        Select the payment option that best fits your order.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-4">
                                {[
                                    { value: 'card', label: 'Credit / Debit Card' },
                                    { value: 'bank', label: 'Bank Transfer' },
                                    { value: 'cash', label: 'Cash on Delivery' },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setPaymentMethod(option.value)}
                                        className={`rounded-[1.75rem] border px-5 py-5 text-left transition ${paymentMethod === option.value
                                                ? 'border-[#2b6954] bg-[#eef4ec] shadow-[0_12px_36px_rgba(43,105,84,0.08)]'
                                                : 'border-[#e6ded4] bg-[#fbf8f3] hover:border-[#2b6954]'
                                            }`}
                                    >
                                        <span className="block text-base font-semibold text-[#1b1c1a]">{option.label}</span>
                                        {option.value === 'card' && (
                                            <span className="mt-1 text-sm text-[#6c796d]">Visa, Mastercard, Amex</span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {paymentMethod === 'card' && (
                                <div className="mt-8 grid gap-4">
                                    <div className="grid gap-2 text-sm text-[#5b6c57]">
                                        <span>Card Number</span>
                                        <input
                                            type="text"
                                            value={form.cardNumber}
                                            onChange={handleFieldChange('cardNumber')}
                                            placeholder="1234 5678 9012 3456"
                                            className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                        />
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-2">
                                        <label className="grid gap-2 text-sm text-[#5b6c57]">
                                            MM/YY
                                            <input
                                                type="text"
                                                value={form.expiry}
                                                onChange={handleFieldChange('expiry')}
                                                placeholder="09/28"
                                                className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                            />
                                        </label>
                                        <label className="grid gap-2 text-sm text-[#5b6c57]">
                                            CVC
                                            <input
                                                type="text"
                                                value={form.cvc}
                                                onChange={handleFieldChange('cvc')}
                                                placeholder="123"
                                                className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                            />
                                        </label>
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    <aside className="space-y-6">
                        <section className="rounded-[2rem] bg-white p-8 shadow-[0_24px_56px_rgba(27,28,26,0.08)]">
                            <div className="flex items-center justify-between gap-4 border-b border-[#dcd3c8] pb-6">
                                <div>
                                    <h2 className="font-serif text-3xl text-[#1b1c1a]">Order Summary</h2>
                                    <p className="mt-2 text-sm text-[#6c796d]">
                                        Confirm each selection before placing your order.
                                    </p>
                                </div>
                                <span className="rounded-full bg-[#eef4ec] px-4 py-2 text-sm text-[#2b6954] whitespace-nowrap">{cartCount} items</span>
                            </div>

                            <div className="mt-8 space-y-5">
                                {items.length === 0 ? (
                                    <div className="rounded-[1.75rem] border border-[#e6ded4] bg-[#fbf8f3] p-6 text-sm text-[#5b6c57]">
                                        Your cart is empty. Add a few botanical favorites to continue.
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <div key={item.id} className="grid gap-4 rounded-[1.75rem] border border-[#e6ded4] bg-[#fbf8f3] p-4 sm:grid-cols-[auto_1fr]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-24 w-24 rounded-[1.5rem] object-cover"
                                            />
                                            <div className="grid gap-3">
                                                <div>
                                                    <p className="font-semibold text-[#1b1c1a]">{item.title}</p>
                                                    <p className="text-sm text-[#6c796d]">{item.variant}</p>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-[#1b1c1a] shadow-[0_10px_20px_rgba(27,28,26,0.06)]">
                                                        <button
                                                            type="button"
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="rounded-full bg-[#eef4ec] px-2 py-1 text-[#2b6954] transition hover:bg-[#d6e4d8]"
                                                        >
                                                            -
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="rounded-full bg-[#eef4ec] px-2 py-1 text-[#2b6954] transition hover:bg-[#d6e4d8]"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-sm text-[#8a7e75] transition hover:text-[#2b6954]"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                                <p className="font-semibold text-[#2b6954]">{formatCurrency(item.price * item.quantity)}</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <form onSubmit={handlePromoSubmit} className="mt-8 grid gap-3">
                                <div className="grid gap-2 text-sm text-[#5b6c57]">
                                    <label htmlFor="promo">Promo Code</label>
                                    <div className="flex gap-3">
                                        <input
                                            id="promo"
                                            value={promoCode}
                                            onChange={(event) => setPromoCode(event.target.value)}
                                            placeholder="BOTANIC10"
                                            className="w-full rounded-[1.5rem] border border-[#e6ded4] bg-[#fbf8f3] px-5 py-4 text-sm text-[#1b1c1a] outline-none transition focus:border-[#2b6954]"
                                        />
                                        <button
                                            type="submit"
                                            className="rounded-[1.5rem] bg-[#2b6954] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#244f3c]"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                                {promoStatus && <p className="text-sm text-[#6c796d]">{promoStatus}</p>}
                            </form>

                            <div className="mt-8 space-y-3 rounded-[1.75rem] bg-[#fbf8f3] p-6 text-sm text-[#5b6c57]">
                                <div className="flex items-center justify-between">
                                    <span>Subtotal</span>
                                    <span>{formatCurrency(subtotal)}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Shipping</span>
                                    <span>{formatCurrency(shipping)}</span>
                                </div>
                                {discount > 0 && (
                                    <div className="flex items-center justify-between text-[#2b6954]">
                                        <span>Discount</span>
                                        <span>-{formatCurrency(discount)}</span>
                                    </div>
                                )}
                                <div className="flex items-center justify-between border-t border-[#dcd3c8] pt-4 text-base font-semibold text-[#1b1c1a]">
                                    <span>Total</span>
                                    <span>{formatCurrency(effectiveTotal)}</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                disabled={!isFormComplete}
                                className={`mt-6 w-full rounded-[1.75rem] px-6 py-4 text-sm font-semibold text-white transition ${isFormComplete
                                        ? 'bg-[#2b6954] hover:bg-[#244f3c]'
                                        : 'bg-[#d7cec5] cursor-not-allowed'
                                    }`}
                            >
                                Place Order
                            </button>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default Cart
