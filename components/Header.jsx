const TopBar = () => {
    return (
      <div className="w-full bg-black text-white flex items-center justify-between p-4">
        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-96 p-2 rounded-full text-black"
          />
        </div>
  
        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <button>Logout</button>
          <span className="text-xl">👤</span>
        </div>
      </div>
    );
  };
  
  export default TopBar;
  