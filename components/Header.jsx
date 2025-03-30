const Header= () => {
    return (
      <div className="w-full bg-black text-white flex items-center justify-between py-4 mb-4 ">
            <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-96 p-2 rounded-full border-1 border-purple-200 text-white"
          />
        </div>
  
             <div className="flex items-center space-x-4">
          <button>Logout</button>
          <span className="text-xl">👤</span>
        </div>
      </div>
    );
  };
  
  export default Header;
  