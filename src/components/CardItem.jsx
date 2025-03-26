import React from 'react'
import ChipDark from '../assets/Chip_Card_dark.png'
import ChipLight from '../assets/Chip_Card_light.png'
import MCardDark from '../assets/mcard_dark.png'
import MCardLight from '../assets/mcard_light.png'

export default function CardItem({ 
  card, 
  color = 'dark',
  currency = '$' 
}) {
    const maskedNumber = `${card.number.slice(0, 4)} **** **** ${card.number.slice(-4)}`

    const bgVariants = {
        dark: 'bg-[#1E2131]',
        light: 'bg-white border'
    }

    const textVariants = {
        dark: 'text-white',
        light: 'text-[#2E3360]'
    }

    const gradientVariants = {
        dark: 'from-[#2A2E3F] to-[#1E2130]',
        light: 'from-[#F5F7FA] to-[#E0E4F0]'
    }

    const chipImage = color === 'dark' ? ChipDark : ChipLight
    const cardLogoImage = color === 'dark' ? MCardDark : MCardLight

    return (
        <div className={`
            w-[320px] sm:w-[320px] h-64 rounded-2xl md:w-full
            ${bgVariants[color]} 
            ${textVariants[color]}
            shadow-lg relative flex flex-col justify-between overflow-hidden border border-gray-100`}> 
            {/* Header */}
            <div className="flex justify-between items-start p-5">
                <div>
                    <div className="text-xs opacity-70">Balance</div>
                    <div className="text-xl mt-1">{currency}{card.balance.toLocaleString()}</div>
                </div>
                <img 
                    src={chipImage} 
                    alt="Chip" 
                    className="w-12 h-8 object-contain"
                />
            </div>

            {/* Cardholder Info */}
            <div className="mt-auto p-5">
                <div className="flex text-xs">
                    <div className="mr-8">
                        <div className="opacity-70">CARD HOLDER</div>
                        <div>{card.cardHolder}</div>
                    </div>
                    <div>
                        <div className="opacity-70">VALID THRU</div>
                        <div>{card.validThru}</div>
                    </div>
                </div>
            </div>

            {/* Footer with border and centered items */}
            <div className={`
                cardFooter p-5 flex justify-between items-center 
                bg-gradient-to-r ${gradientVariants[color]}
            `}> 
                <div className="tracking-wider">{maskedNumber}</div>
                <img 
                    src={cardLogoImage} 
                    alt="Card Logo" 
                    className="w-12 h-8 object-contain"
                />
            </div>
        </div>
    )
}