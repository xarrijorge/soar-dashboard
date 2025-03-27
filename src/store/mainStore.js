import { create } from 'zustand'
import mockApi from '../services/mockApi'

const useMainStore = create((set, get) => ({
  // Initial state
  user: {theme: 'light'},
  cards: [],
  accounts: [],
  transactions: [],
  balanceHistory: [],
  weeklyActivity: null,
  recentTransfers: [],
  isLoading: true,
  error: null,

  // Fetch initial data
  fetchInitialData: async () => {
    set({ isLoading: true })
    try {
      const [
        user,
        cards,
        accounts,
        transactions,
        balanceHistory,
        weeklyActivity,
        recentTransfers
      ] = await Promise.all([
        mockApi.getUser(),
        mockApi.getCards(),
        mockApi.getAccounts(),
        mockApi.getTransactions(),
        mockApi.getBalanceHistory(),
        mockApi.getWeeklyActivity(),
        mockApi.getRecentTransfers()
      ])

      set({
        user,
        cards,
        accounts,
        transactions,
        balanceHistory,
        weeklyActivity,
        recentTransfers,
        isLoading: false
      })
    } catch (error) {
      console.error(error)
      set({
        error: 'Failed to fetch initial data',
        isLoading: false
      })
    }
  },

  // Add a new card
  addCard: async (newCard) => {
    try {
      const addedCard = await mockApi.addCard(newCard)
      set((state) => ({
        cards: [...state.cards, addedCard]
      }))
    } catch (error) {
      console.error('Failed to add card', error)
    }
  },

  // Update user
  updateUser: async (updates) => {
    try {
      const updatedUser = await mockApi.updateUser(updates)
      set((state) => ({
        user: { ...state.user, ...updatedUser }
      }))
    } catch (error) {
      console.error('Failed to update user', error)
    }
  },

  // Save user changes from a form
  saveUserChanges: async (formData) => {
    try {
      const updatedUser = await mockApi.updateUser(formData)
      set({ user: updatedUser })
    } catch (error) {
      console.error('Failed to save user changes', error)
    }
  },

  // Update one field
  updateUserField: (fieldName, value) =>
    set((state) => ({
      user: {
        ...state.user,
        [fieldName]: value
      }
    })),

  // Validation function
  validateUserData: (formData) => {
    const errors = {}

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters'
    }

    if (!formData.username || formData.username.trim().length < 3) {
      errors.username = 'Username must be at least 3 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address'
    }

    if (formData.password && formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    }

    if (!formData.dob) {
      errors.dob = 'Date of birth is required'
    } else {
      const dobDate = new Date(formData.dob)
      const today = new Date()
      const age = today.getFullYear() - dobDate.getFullYear()
      if (age < 18) errors.dob = 'You must be at least 18 years old'
    }

    if (!formData.presentAddress || formData.presentAddress.length < 5) {
      errors.presentAddress = 'Present address is required'
    }

    if (!formData.city || formData.city.length < 2) {
      errors.city = 'City is required'
    }

    if (!formData.postalCode || !/^\d{5}$/.test(formData.postalCode)) {
      errors.postalCode = 'Postal code must be 5 digits'
    }

    if (!formData.country || formData.country.length < 2) {
      errors.country = 'Country is required'
    }

    return errors
  },

  // Toggle notifications
  toggleNotifications: () =>
    set((state) => ({
      user: {
        ...state.user,
        notificationsEnabled: !state.user.notificationsEnabled
      }
    })),

  // Set light/dark theme
  setTheme: (theme) =>
    set((state) => ({
      user: {
        ...state.user,
        theme
      }
    })),

  // Update password directly
  updatePassword: (newPassword) =>
    set((state) => ({
      user: {
        ...state.user,
        password: newPassword
      }
    }))
}))

export default useMainStore