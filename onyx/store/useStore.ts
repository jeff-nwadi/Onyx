import { create } from 'zustand'

interface AppState {
  isScrolled: boolean
  setIsScrolled: (scrolled: boolean) => void
  isMounted: boolean
  setIsMounted: (mounted: boolean) => void
}

export const useStore = create<AppState>((set) => ({
  isScrolled: false,
  setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
  isMounted: false,
  setIsMounted: (mounted) => set({ isMounted: mounted }),
}))
