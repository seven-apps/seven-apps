import { useThemeStore } from './useTheme'

export const useComponentVariant = (componet, variant) => {
  const { theme } = useThemeStore()

  return theme?.components?.[componet].variants?.[variant] || {}
}
