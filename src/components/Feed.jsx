const Feed = () => {
  return (
    <div className="space-y-4">
      {/* Create Post */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-3">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Profile" className="w-10 h-10 rounded-full" />
          <input 
            type="text" 
            placeholder="What's on your mind, Josephine?" 
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none"
          />
        </div>
        <hr className="mb-3" />
        <div className="flex justify-around">
          <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
            <span className="text-green-500">🖼️</span>
            <span className="text-sm font-medium">Photo/Video</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
            <span className="text-blue-500">👥</span>
            <span className="text-sm font-medium">Tag Friends</span>
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg">
            <span className="text-yellow-500">😊</span>
            <span className="text-sm font-medium">Feeling/Activity</span>
          </button>
        </div>
      </div>

      {/* Post */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Fiona" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="font-semibold">Fiona Ozeri</h4>
                <p className="text-xs text-gray-500">5 hrs · 🌍</p>
              </div>
            </div>
            <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">⋯</button>
          </div>
          <p className="mb-3">This has some great healthy recipes</p>
        </div>
        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600" alt="Vegetables" className="w-full" />
        <div className="p-4">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
            <span>👍❤️ 42</span>
            <span>8 comments · 3 shares</span>
          </div>
          <hr className="mb-3" />
          <div className="flex justify-around">
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1 justify-center">
              <span>👍</span>
              <span className="text-sm font-medium">Like</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1 justify-center">
              <span>💬</span>
              <span className="text-sm font-medium">Comment</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1 justify-center">
              <span>↗️</span>
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed