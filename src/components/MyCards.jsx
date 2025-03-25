import CardItem from './CardItem'

const dummyCards = [
    {
      id: 1,
      balance: 5756,
      number: '3778123412341234',
      validThru: '12/22',
      cardHolder: 'Eddy Cusuma',
      color: 'dark', // Optional color prop
      currency: '€'  // Optional currency prop
    },
    {
      id: 2,
      balance: 3200,
      number: '4321432143214321',
      validThru: '10/25',
      cardHolder: 'Eddy Cusuma',
      color: 'light', // Different color prop
      currency: '$'   // Different currency prop
    },
  ]

export default function MyCards() {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#2E3360]">My Cards</h2>
        <button className="text-sm text-[#5F6AC4] hover:underline">See All</button>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {dummyCards.map(card => (
          <CardItem 
            key={card.id} 
            card={card}
            color={card.color}
            currency={card.currency}
          />
        ))}
      </div>
    </section>
  )
}
