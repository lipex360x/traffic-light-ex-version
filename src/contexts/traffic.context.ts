import { create } from 'zustand'

const contextDefault = {
  light: '',
  setLight: (light: string) => {},
}

export const useTrafficLight = create<typeof contextDefault>((set) => ({
  ...contextDefault,

  setLight: (light: string) => set(() => ({ light })),
}))
