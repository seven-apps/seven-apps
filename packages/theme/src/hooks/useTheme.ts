import React from 'react'
import create from 'zustand'
import createVanila from 'zustand/vanilla'

interface ThemeProps {
  theme: any
  setTheme: (theme: any) => void
}

const store = createVanila<ThemeProps>((set) => ({
  theme: {
    colors: {},
    sizes: {},
    fontSizes: {},
    components: {},
  },
  setTheme: (theme) => set((state) => ({ theme: { ...state.theme, theme } })),
}))

export const useThemeStore = create(store)

export const useTheme = useThemeStore

export const configTheme = (custonTheme) => {
  store.setState((state) => ({ ...state, theme: custonTheme }))
}

export const getTheme = () => store.getState()?.theme
