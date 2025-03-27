// src/data/mockBackend.js
export default {
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
      }
    ],
  
    balanceHistory: [
      { month: 'Jul', amount: 200 },
      { month: 'Aug', amount: 300 },
      { month: 'Sep', amount: 450 },
      { month: 'Oct', amount: 700 },
      { month: 'Nov', amount: 400 },
      { month: 'Dec', amount: 600 },
      { month: 'Jan', amount: 500 }
    ],
  
    weeklyActivity: {
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      deposits: [250, 130, 260, 370, 230, 240, 330],
      withdrawals: [480, 350, 320, 480, 140, 380, 390]
    },
  
    transactions:[
        { id: 1, type: 'paypal', description: 'Deposit from my Card', date: '28 January 2021', amount: -850, category: 'Bills' },
        { id: 2, type: 'card', description: 'Grocery Payment', date: '29 January 2021', amount: -125.99, category: 'Bills' },
        { id: 3, type: 'cash', description: 'Salary Deposit', date: '30 January 2021', amount: 3200, category: 'Income' },
        { id: 4, type: 'paypal', description: 'Refund from Amazon', date: '01 February 2021', amount: 150, category: 'Income' },
        { id: 5, type: 'card', description: 'Netflix Subscription', date: '02 February 2021', amount: -12.99, category: 'Entertainment' },
        { id: 6, type: 'cash', description: 'Spotify Premium', date: '03 February 2021', amount: -9.99, category: 'Entertainment' },
        { id: 7, type: 'paypal', description: 'HBO Max Subscription', date: '04 February 2021', amount: -14.99, category: 'Entertainment' },
        { id: 8, type: 'card', description: 'Movie Tickets', date: '05 February 2021', amount: -35.50, category: 'Entertainment' },
        { id: 9, type: 'paypal', description: 'Steam Game Purchase', date: '06 February 2021', amount: -59.99, category: 'Entertainment' },
        { id: 10, type: 'card', description: 'PlayStation Store', date: '07 February 2021', amount: -45.00, category: 'Entertainment' },
        { id: 11, type: 'cash', description: 'Concert Tickets', date: '08 February 2021', amount: -120.00, category: 'Entertainment' },
        { id: 12, type: 'paypal', description: 'Disney+ Subscription', date: '09 February 2021', amount: -7.99, category: 'Entertainment' },
        { id: 13, type: 'card', description: 'Board Game', date: '10 February 2021', amount: -65.00, category: 'Entertainment' },
        { id: 14, type: 'paypal', description: 'Kindle Book', date: '11 February 2021', amount: -16.99, category: 'Entertainment' },
        { id: 15, type: 'cash', description: 'Comedy Club', date: '12 February 2021', amount: -75.00, category: 'Entertainment' },
        { id: 16, type: 'card', description: 'Gym Membership', date: '14 February 2021', amount: -50, category: 'Others' },
        { id: 17, type: 'paypal', description: 'Transfer to John', date: '04 February 2021', amount: -300, category: 'Others' },
        { id: 18, type: 'card', description: 'Online Shopping', date: '05 February 2021', amount: -87.5, category: 'Others' },
        { id: 19, type: 'paypal', description: 'Deposit via Paypal', date: '06 February 2021', amount: 1100, category: 'Income' },
        { id: 20, type: 'cash', description: 'ATM Withdrawal', date: '07 February 2021', amount: -500, category: 'Others' },
        { id: 21, type: 'card', description: 'Flight Booking', date: '08 February 2021', amount: -1200, category: 'Travel' },
        { id: 22, type: 'paypal', description: 'Sold item on eBay', date: '09 February 2021', amount: 275, category: 'Income' },
        { id: 23, type: 'cash', description: 'Bonus Payout', date: '10 February 2021', amount: 600, category: 'Income' },
        { id: 24, type: 'card', description: 'Uber Ride', date: '11 February 2021', amount: -22, category: 'Others' },
        { id: 25, type: 'paypal', description: 'Freelance Payment', date: '12 February 2021', amount: 900, category: 'Income' },
        { id: 26, type: 'cash', description: 'Investment Return', date: '13 February 2021', amount: 1500, category: 'Others' },
        { id: 27, type: 'paypal', description: 'Sent to Savings', date: '15 February 2021', amount: -400, category: 'Others' },
        { id: 28, type: 'cash', description: 'Received from Family', date: '16 February 2021', amount: 800, category: 'Income' },
        { id: 29, type: 'card', description: 'Restaurant Bill', date: '17 February 2021', amount: -75.25, category: 'Others' }
      ] 
  }