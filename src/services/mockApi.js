// src/services/mockApi.js
import mockBackend from '../data/mockBackend'

// Simulate async API calls with a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const mockApi = {
  getUser: async () => {
    await delay(300)
    return mockBackend.user
  },

  updateUser: async (userData) => {
    await delay(300)
    // In a real scenario, you'd validate and update the user
    return { ...mockBackend.user, ...userData }
  },

  getCards: async () => {
    await delay(300)
    return mockBackend.cards
  },

  addCard: async (newCard) => {
    await delay(300)
    const cardWithId = { ...newCard, id: Date.now() }
    mockBackend.cards.push(cardWithId)
    return cardWithId
  },

  getAccounts: async () => {
    await delay(300)
    return mockBackend.accounts
  },

  getTransactions: async () => {
    await delay(300)
    return mockBackend.transactions
  },

  getBalanceHistory: async () => {
    await delay(300)
    return mockBackend.balanceHistory
  },

  getWeeklyActivity: async () => {
    await delay(300)
    return mockBackend.weeklyActivity
  },

  getRecentTransfers: async () => {
    await delay(300)
    return mockBackend.recentTransfers
  }
}

export default mockApi