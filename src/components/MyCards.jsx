import React from 'react'
import CardItem from './CardItem'
import useMainStore from '../store/mainStore'


export default function MyCards() {
const cards = useMainStore(state => state.cards)
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