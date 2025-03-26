export default function Transfers({ recentTransfers }) {
    return (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide flex-1">
            {recentTransfers.map(contact => (
                <div
                    key={contact.id}
                    className="flex flex-col items-center text-center min-w-[80px]"
                >
                    <img
                        src={contact.image}
                        alt={contact.name}
                        className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div className="mt-2 text-sm font-medium text-[#2E3360]">
                        {contact.name.split(' ')[0]}
                    </div>
                    <div className="text-xs text-[#9DA2C6]">{contact.role}</div>
                </div>
            ))}
        </div>
    )
}