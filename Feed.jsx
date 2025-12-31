import React, { useState, useEffect } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback dummy data agar API fail ho jaye
  const dummyPosts = [
    {
      id: 1,
      userId: 1,
      title: "Amazing Nature Photography",
      body: "Just captured this beautiful sunset at the beach. Nature never fails to amaze me! 🌅",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
      name: "John Smith",
      time: "2 hrs",
      likes: 245,
      comments: 34,
      shares: 12
    },
    {
      id: 2,
      userId: 2,
      title: "Delicious Food",
      body: "Made this homemade pizza today! Recipe in comments 🍕",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      name: "Sarah Johnson",
      time: "4 hrs",
      likes: 189,
      comments: 28,
      shares: 8
    },
    {
      id: 3,
      userId: 3,
      title: "Travel Vibes",
      body: "Exploring the mountains this weekend. Who else loves hiking? 🏔️",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      name: "Mike Chen",
      time: "6 hrs",
      likes: 312,
      comments: 45,
      shares: 15
    },
    {
      id: 4,
      userId: 4,
      title: "Fitness Goals",
      body: "Morning workout done! Consistency is key 💪",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      name: "Emily Davis",
      time: "8 hrs",
      likes: 156,
      comments: 19,
      shares: 5
    },
    {
      id: 5,
      userId: 5,
      title: "Coffee Time",
      body: "Starting the day right with a fresh cup of coffee ☕",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      name: "David Lee",
      time: "10 hrs",
      likes: 223,
      comments: 31,
      shares: 9
    }
  ];

  useEffect(() => {
    // API se data fetch karne ki koshish
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(data => {
        const formattedPosts = data.map(post => ({
          id: post.id,
          userId: post.userId,
          title: post.title,
          body: post.body,
          image: `https://picsum.photos/600/400?random=${post.id}`,
          avatar: `https://i.pravatar.cc/100?img=${post.userId}`,
          name: `User ${post.userId}`,
          time: `${Math.floor(Math.random() * 24)} hrs`,
          likes: Math.floor(Math.random() * 100) + 10,
          comments: Math.floor(Math.random() * 50) + 5,
          shares: Math.floor(Math.random() * 20) + 1
        }));
        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch(error => {
        console.log('API failed, using dummy data:', error);
        // API fail hone par dummy data use karo
        setPosts(dummyPosts);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Create Post Box */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-3">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" 
            alt="Profile" 
            className="w-10 h-10 rounded-full" 
          />
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

      {/* Dynamic Posts */}
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <img 
                  src={post.avatar} 
                  alt={post.name} 
                  className="w-10 h-10 rounded-full object-cover" 
                />
                <div>
                  <h4 className="font-semibold">{post.name}</h4>
                  <p className="text-xs text-gray-500">{post.time} · 🌍</p>
                </div>
              </div>
              <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">⋯</button>
            </div>
            <p className="mb-3">{post.body}</p>
          </div>
          
          <img 
            src={post.image} 
            alt="Post" 
            className="w-full object-cover max-h-96" 
          />
          
          <div className="p-4">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
              <span>👍❤️ {post.likes}</span>
              <span>{post.comments} comments · {post.shares} shares</span>
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
      ))}
    </div>
  );
};

export default Feed;