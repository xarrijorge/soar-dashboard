import React from 'react'
import Transfers from './Transfers'
import NewTransfer from './NewTransfer'
import useMainStore from '../store/mainStore'



export default function QuickTransfer() {
  const recentTransfers = useMainStore(state => state.recentTransfers)
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 w-full h-60 flex flex-col justify-evenly">
            {/* Scrollable Transfers */}
            <div className="relative flex items-center">
                <Transfers recentTransfers={recentTransfers} />
                <div className="ml-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="#9DA2C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Transfer Input */}
            <NewTransfer />
        </div>
    )
}
