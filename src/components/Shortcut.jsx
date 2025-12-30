import { ChevronDown } from 'lucide-react';
const ShortcutsSection = () => {
  const shortcuts = [
    { img: '🍕', text: 'Undiscovered Eats' },
    { img: '🏔️', text: 'Weekend Trips' },
    { img: '🛒', text: "Jasper's Market" },
    { img: '💬', text: 'Red Table Talk Group' },
    { img: '🥾', text: 'Best Hidden Hiking Trails' }
  ];

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-600">Shortcuts</h3>
      </div>
      <div className="space-y-2">
        {shortcuts.map((item, index) => (
          <button key={index} className="w-full flex items-center space-x-3 px-2 py-2 hover:bg-gray-200 rounded-lg">
            <span className="text-2xl">{item.img}</span>
            <span className="text-sm">{item.text}</span>
          </button>
        ))}
        <button className="w-full px-2 py-2 text-left hover:bg-gray-200 rounded-lg">
          <span className="text-sm">See More</span> <ChevronDown className="inline w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ShortcutsSection