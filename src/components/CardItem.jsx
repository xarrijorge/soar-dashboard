export default function CardItem({ card }) {
    return (
      <div className="min-w-[300px] w-[300px] h-48 rounded-2xl text-white p-5 flex flex-col justify-between bg-gradient-to-br from-[#5F6AC4] to-[#3640A2] shadow-lg">
        <div className="text-sm">Balance</div>
        <div className="text-2xl font-bold">${card.balance.toLocaleString()}</div>
  
        <div className="text-sm tracking-wider">{card.number}</div>
  
        <div className="flex justify-between text-xs mt-2">
          <div>
            <div className="opacity-70">VALID THRU</div>
            <div>{card.validThru}</div>
          </div>
          <div>
            <div className="opacity-70">CARD HOLDER</div>
            <div>{card.cardHolder}</div>
          </div>
        </div>
      </div>
    )
  }
  