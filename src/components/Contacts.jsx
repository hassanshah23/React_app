const Contacts= () => {
  const contacts = [
    { name: 'Dennis Han', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', online: true },
    { name: 'Eric Jones', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', online: true },
    { name: 'Cynthia Lopez', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100', online: true },
    { name: 'Betty Chen', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', online: false },
    { name: 'Tina Lim', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', online: true },
    { name: 'Molly Carter', img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100', online: false }
  ];

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Birthdays</h3>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-2xl">🎁</span>
          <p><span className="font-semibold">Jessica, Erica</span> and <span className="font-semibold">2 others</span> have birthdays today</p>
        </div>
      </div>
      
      <hr className="my-4" />
      
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-600">Contacts</h3>
      </div>
      <div className="space-y-2">
        {contacts.map((contact, index) => (
          <button key={index} className="w-full flex items-center space-x-3 px-2 py-2 hover:bg-gray-200 rounded-lg">
            <div className="relative">
              <img src={contact.img} alt={contact.name} className="w-9 h-9 rounded-full" />
              {contact.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <span className="text-sm">{contact.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Contacts