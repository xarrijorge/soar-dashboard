import { create } from 'zustand'
import transactions from '../data/transactions'

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

const useMainStore = create((set, get) => ({
  // USER DATA
  user: {
    fullName: 'Eddy Cusuma',
    username: 'eddy.cusuma',
    email: 'eddy@example.com',
    password: '',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    dob: '1990-01-25',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
    notificationsEnabled: true,
    theme: 'light'
  },

  // DASHBOARD DATA
  cards: [
    {
      id: 1,
      accountID: 1,
      number: '3778123412341234',
      balance: 5756,
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      currency: '€',
      color: 'dark'
    },
    {
      id: 2,
      accountID: 2,
      number: '4321432143214321',
      balance: 3200,
      cardHolder: 'Eddy Cusuma',
      validThru: '10/25',
      currency: '$',
      color: 'light'
    }
  ],
  accounts: [
    {
      id: 1,
      name: 'Personal Account',
      type: 'Checking',
      currency: 'Euro',
      balance: 8200,
      accountNumber: '621384920134'
    },
    {
      id: 2,
      name: 'Savings Account',
      type: 'Savings',
      currency: 'USD',
      balance: 15300,
      accountNumber: '894720193842'
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
  addCard: (newCard) =>
    set((state) => ({
      cards: [...state.cards, newCard]
    })),

  updateUser: (updates) => set((state) => ({
    user: { ...state.user, ...updates }
  })),

  toggleNotifications: () => set((state) => ({
    user: { ...state.user, notificationsEnabled: !state.user.notificationsEnabled }
  })),

  setTheme: (theme) => set((state) => ({
    user: { ...state.user, theme }
  })),

  toggleTheme: () => set((state) => {
    const newTheme = state.user.theme === 'dark' ? 'light' : 'dark'
    return {
      user: { ...state.user, theme: newTheme }
    }
  }),

  updatePassword: (newPassword) => set((state) => ({
    user: { ...state.user, password: newPassword }
  })),

  // VALIDATION METHODS
  validateUserData: (formData) => {
    const errors = {};

    // Full Name validation
    if (!formData.fullName || formData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters long';
    }

    // Username validation
    if (!formData.username || formData.username.trim().length < 3) {
      errors.username = 'Username must be at least 3 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Password validation (only if provided)
    if (formData.password) {
      if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }
    }

    // Date of Birth validation
    if (!formData.dob) {
      errors.dob = 'Date of Birth is required';
    } else {
      const selectedDate = new Date(formData.dob);
      const today = new Date();
      const age = today.getFullYear() - selectedDate.getFullYear();
      if (age < 18) {
        errors.dob = 'You must be at least 18 years old';
      }
    }

    // Address validations
    if (!formData.presentAddress || formData.presentAddress.trim().length < 5) {
      errors.presentAddress = 'Present address is required';
    }

    if (!formData.city || formData.city.trim().length < 2) {
      errors.city = 'City is required';
    }

    if (!formData.postalCode || !/^\d{5}$/.test(formData.postalCode)) {
      errors.postalCode = 'Invalid postal code';
    }

    if (!formData.country || formData.country.trim().length < 2) {
      errors.country = 'Country is required';
    }

    return errors;
  },

  // Save user changes method
  saveUserChanges: (formData) => {
    set((state) => {
      // Only update fields that have changed and are valid
      const updatedUser = { ...state.user };

      Object.keys(formData).forEach(key => {
        if (formData[key] && formData[key] !== state.user[key]) {
          updatedUser[key] = formData[key];
        }
      });

      return { user: updatedUser };
    });
  },

  // Added method to update individual user field
  updateUserField: (fieldName, value) => {
    set((state) => ({
      user: { ...state.user, [fieldName]: value }
    }))
  }
}))

export default useMainStore