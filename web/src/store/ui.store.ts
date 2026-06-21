import { create } from 'zustand'

interface UIStore {
  mobileMenuOpen: boolean
  noriaOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  setNoriaOpen: (open: boolean) => void
  toggleMobileMenu: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  mobileMenuOpen: false,
  noriaOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  setNoriaOpen: (open) => set({ noriaOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
}))
