import React from 'react'
import CardItem from './CardItem'

const cards = [
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
]

export default function MyCards() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[#2E3360] ">My Cards</h2>
        <button className="text-sm text-[#5F6AC4]">See all</button>
      </div>
    <div className="
      flex md:grid md:grid-cols-2 gap-4 
      overflow-x-auto md:overflow-visible 
      scrollbar-hide w-full 
      justify-between
      snap-x snap-mandatory scroll-smooth
    ">
      {cards.map((card) => (
        <div key={card.id} className="snap-start">
          <CardItem 
            card={card} 
            color={card.color} 
            currency={card.currency} 
          />
        </div>
      ))}
    </div>
    </section>
  )
}