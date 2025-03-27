import { useState } from 'react'
import Layout from '../layout/Layout'
import CardItem from '../components/CardItem'
import useMainStore from '../store/mainStore'
import AddCardModal from '../components/AddCardModal'

export default function Cards() {
  const cards = useMainStore(state => state.cards)
  const addCard = useMainStore(state => state.addCard)
  const [showModal, setShowModal] = useState(false)

  const handleAddCard = (newCard) => {
    addCard(newCard)
    setShowModal(false)
  }

  return (
    <Layout title="My Cards">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map(card => (
          <CardItem
            key={card.id}
            card={card}
            color={card.color}
            currency={card.currency}
          />
        ))}
      </div>

      {/* Apply Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-4 right-4 bg-[#5F6AC4] hover:bg-[#4e5bc0] transition text-white rounded-full px-6 py-3 shadow-xl dark:bg-[#4e5bc0] dark:hover:bg-[#3b4aa1]"
      >
        Add a new card
      </button>

      {/* Modal */}
      <AddCardModal open={showModal} onClose={() => setShowModal(false)} onSubmit={handleAddCard} />
    </Layout>
  )
}