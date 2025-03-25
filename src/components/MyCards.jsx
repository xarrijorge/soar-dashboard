import CardItem from './CardItem'

const dummyCards = [
    {
      id: 1,
      balance: 5756,
      number: '3778123412341234',
      validThru: '12/22',
      cardHolder: 'Eddy Cusuma',
      color: 'dark',
      currency: '€'
    },
    {
      id: 2,
      balance: 3200,
      number: '4321432143214321',
      validThru: '10/25',
      cardHolder: 'Eddy Cusuma',
      color: 'light',
      currency: '$'
    },
  ]

export default function MyCards() {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#2E3360]">My Cards</h2>
        <button className="text-sm text-[#5F6AC4] hover:underline">See All</button>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {dummyCards.map(card => (
          <div key={card.id} className="w-full min-w-[380px]">
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