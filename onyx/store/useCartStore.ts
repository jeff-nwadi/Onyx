import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  cartItemId: string // Unique identifier for the item in the cart
  productId: string
  slug: string
  name: string
  price: number
  image: string | any
  size?: { id: string; name: string }
  finish?: { id: string; name: string }
  plan?: { id: string; name: string; price: number }
  quantity: number
}

interface CartState {
  items: CartItem[]
  isCartOpen: boolean
  addItem: (item: Omit<CartItem, 'cartItemId'>) => void
  removeItem: (cartItemId: string) => void
  updateQuantity: (cartItemId: string, quantity: number) => void
  setIsCartOpen: (isOpen: boolean) => void
  toggleCart: () => void
  clearCart: () => void
  cartTotal: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      addItem: (item) => {
        set((state) => {
          // Create a unique ID based on product and its variant selections
          // This allows us to group identical variant configurations
          const variantKey = `${item.productId}-${item.size?.id || ''}-${item.finish?.id || ''}-${item.plan?.id || ''}`
          
          const existingItemIndex = state.items.findIndex((i) => {
            const iKey = `${i.productId}-${i.size?.id || ''}-${i.finish?.id || ''}-${i.plan?.id || ''}`
            return iKey === variantKey
          })

          if (existingItemIndex > -1) {
            // If exact matching variant exists, increase quantity
            const newItems = [...state.items]
            newItems[existingItemIndex].quantity += item.quantity
            return { items: newItems, isCartOpen: true } // Auto-open cart on add
          }

          // Otherwise, add as new line item
          return {
            items: [...state.items, { ...item, cartItemId: crypto.randomUUID() }],
            isCartOpen: true // Auto-open cart on add
          }
        })
      },

      removeItem: (cartItemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.cartItemId !== cartItemId)
        }))
      },

      updateQuantity: (cartItemId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.cartItemId === cartItemId ? { ...item, quantity: Math.max(1, quantity) } : item
          )
        }))
      },

      setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
      
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      
      clearCart: () => set({ items: [] }),

      cartTotal: () => {
        const { items } = get()
        return items.reduce((total, item) => {
          const itemBasePrice = item.price
          const planPrice = item.plan?.price || 0
          return total + ((itemBasePrice + planPrice) * item.quantity)
        }, 0)
      }
    }),
    {
      name: 'onyx-cart-storage',
      partialize: (state) => ({ items: state.items }), // Only persist items, not UI state like isCartOpen
    }
  )
)
