import React, { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const initialItems = [
  {
    id: 'morning-dew',
    title: 'Morning Dew',
    variant: 'Botanical arrangement',
    price: 52,
    image: '/img/lavender.jpg',
    quantity: 1,
  },
  {
    id: 'artisan-pebble-vase',
    title: 'Artisan Pebble Vase',
    variant: 'Natural stone glaze',
    price: 19,
    image: '/img/background.jpg',
    quantity: 1,
  },
]

export function CartProvider({ children }) {
  const [items, setItems] = useState(initialItems)

  const addItem = (product) => {
    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id)
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const removeItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Number(quantity) || 1) }
          : item,
      ),
    )
  }

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )

  const shipping = useMemo(() => (items.length > 0 ? 15 : 0), [items])
  const total = subtotal + shipping
  const cartCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        subtotal,
        shipping,
        total,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
