import { ChevronDown } from 'lucide-react';
const Profile = () => {
  const menuItems = [
    { icon: '👤', text: 'Josephine Williams' },
    { icon: '▶️', text: 'Watch' },
    { icon: '📅', text: 'Events' },
    { icon: '👥', text: 'Friends' },
    { icon: '⏰', text: 'Memories' }
  ];

  return (
    <div className="space-y-2">
      {menuItems.map((item, index) => (
        <button key={index} className="w-full flex items-center space-x-3 px-2 py-2 hover:bg-gray-200 rounded-lg">
          <span className="text-2xl">{item.icon}</span>
          <span className="font-medium">{item.text}</span>
        </button>
      ))}
      <button className="w-full px-2 py-2 text-left hover:bg-gray-200 rounded-lg">
        <span className="font-medium">See More</span> <ChevronDown className="inline w-4 h-4" />
      </button>
    </div>
  );
};
export default Profile