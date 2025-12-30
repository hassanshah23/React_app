import { Plus } from "lucide-react";
const Stories = () => {
  const stories = [
    { name: 'Add to Story', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200', isAdd: true },
    { name: 'Tom Russo', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
    { name: 'Betty Chen', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
    { name: 'Dennis Han', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' },
    { name: 'Cynthia Lopez', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200' }
  ];

  return (
    <div className="flex space-x-2 mb-4">
      {stories.map((story, index) => (
        <div key={index} className="relative flex-shrink-0">
          <div className="w-28 h-48 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition">
            <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
            {story.isAdd && (
              <div className="absolute top-2 left-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </div>
            )}
            {!story.isAdd && (
              <div className="absolute top-2 left-2 w-10 h-10 border-4 border-blue-600 rounded-full overflow-hidden">
                <img src={story.img} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
              {story.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Stories