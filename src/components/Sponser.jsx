const Sponsored = () => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-600 mb-3">Sponsored</h3>
      <div className="flex space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200" alt="Pizza" className="w-24 h-24 rounded-lg object-cover" />
        <div>
          <h4 className="font-semibold text-sm">Lebo's Pizza</h4>
          <p className="text-xs text-gray-500">Experience the trendy pizza spot in Palo Alto being called the next big thing.</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsored