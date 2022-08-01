import { useThemeStore } from './useTheme'

export const useComponentConfig = (componet) => {
  const { theme } = useThemeStore()

  return theme?.components?.[componet]?.configProps || {}
}
