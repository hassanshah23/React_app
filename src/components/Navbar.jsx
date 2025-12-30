import React from 'react';
import { Home, Play, Store, Users, Menu, Search, Plus, MessageCircle, Bell, ChevronDown } from 'lucide-react';


const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-4 py-2 flex items-center justify-between sticky top-0 z-50">

      <div className="flex items-center space-x-2">
       <div className="w-[70px] h-[70px]">
          <img 
            src="./profile.png" 
            alt="Facebook" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search Facebook" 
            className="bg-transparent outline-none text-sm w-48"
          />
        </div>
      </div>

   
      <div className="flex space-x-2">
        <button className="px-8 py-2 hover:bg-gray-100 rounded-lg border-b-4 border-blue-600">
          <Home className="w-6 h-6 text-blue-600" />
        </button>
        <button className="px-8 py-2 hover:bg-gray-100 rounded-lg">
          <Play className="w-6 h-6 text-gray-500" />
        </button>
        <button className="px-8 py-2 hover:bg-gray-100 rounded-lg">
          <Store className="w-6 h-6 text-gray-500" />
        </button>
        <button className="px-8 py-2 hover:bg-gray-100 rounded-lg">
          <Users className="w-6 h-6 text-gray-500" />
        </button>
        <button className="px-8 py-2 hover:bg-gray-100 rounded-lg">
          <Menu className="w-6 h-6 text-gray-500" />
        </button>
      </div>

  
      <div className="flex items-center space-x-2">
        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
          <Plus className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
          <MessageCircle className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
          <Bell className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Profile" className="w-full h-full object-cover" />
        </button>
        <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar