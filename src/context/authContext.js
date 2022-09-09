import create from "zustand"

const initialState = {
  user: null,
  isLoading: false,
  error: null,
}

const authMethods = (set) => ({
  loginUser: async (username) => {
    set({ isLoading: true })
    try {
      localStorage.setItem("user", { username: username })
      set({ user: { username: username } })
      set({ isLoading: false })
    } catch (error) {
      set({ error: error })
    }
  },
  logout: () => {
    localStorage.removeItem("user")
    set(initialState)
  },
})

export const authStore = create((set) => ({
  ...initialState,
  ...authMethods(set),
}))
