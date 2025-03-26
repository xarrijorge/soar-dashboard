import { create } from 'zustand'
import transactions from '../data/transactions'

const useMainStore = create((set, get) => ({
  // USER DATA
  user: {
    name: 'Eddy Cusuma',
    email: 'eddy@example.com',
    password: '',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    notificationsEnabled: true,
    theme: 'light'
  },

  // DASHBOARD DATA
  cards: [
    {
      id: 1,
      number: '3778123412341234',
      balance: 5756,
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      currency: '€',
      color: 'dark'
    },
    {
      id: 2,
      number: '4321432143214321',
      balance: 3200,
      cardHolder: 'Eddy Cusuma',
      validThru: '10/25',
      currency: '$',
      color: 'light'
    }
  ],

  recentTransfers: [
    {
      id: 1,
      name: 'Livia Bator',
      role: 'CEO',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 2,
      name: 'Randy Press',
      role: 'Director',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Workman',
      role: 'Designer',
      image: 'https://randomuser.me/api/portraits/men/16.jpg',
    },
  ],
  balanceHistory,
  weeklyActivity,
  transactions, // imported from /data/transactions.js

  // SETTINGS ACTIONS
  updateUser: (updates) => set((state) => ({
    user: { ...state.user, ...updates }
  })),

  toggleNotifications: () => set((state) => ({
    user: { ...state.user, notificationsEnabled: !state.user.notificationsEnabled }
  })),

  setTheme: (theme) => set((state) => ({
    user: { ...state.user, theme }
  })),

  updatePassword: (newPassword) => set((state) => ({
    user: { ...state.user, password: newPassword }
  }))
}))

export default useMainStore

const balanceHistory = [
  { month: 'Jul', amount: 200 },
  { month: 'Aug', amount: 300 },
  { month: 'Sep', amount: 450 },
  { month: 'Oct', amount: 700 },
  { month: 'Nov', amount: 400 },
  { month: 'Dec', amount: 600 },
  { month: 'Jan', amount: 500 }
]
const weeklyActivity = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  deposits: [250, 130, 260, 370, 230, 240, 330],
  withdrawals: [480, 350, 320, 480, 140, 380, 390]
}