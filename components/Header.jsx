import { useState} from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

const LoggingOut = () => {
  localStorage.removeItem('isAuthenticated'); 
  navigate('/login'); }

const Searching =(e)=> {
  const value = e.target.value;
  setSearchTerm(value);
  onSearch(value); 
}

    return (
      <div className="w-full bg-black text-white flex items-center justify-between py-4 mb-4 ">
            <div className="flex-1 flex justify-center">
          <input
          value={searchTerm}
          onChange={Searching}
            type="text"
            placeholder="Search..."
            className="w-96 p-2 rounded-full border-1 border-purple-200 text-white"
          />
        </div>
  
             <div className="flex items-center space-x-4">
             <a 
  onClick={LoggingOut} 
  className="cursor-pointer underline text-purple-300 hover:text-purple-">Logout</a>
          <span className="text-xl p-4">👤</span>
        </div>
      </div>
    );
  };

  export default Header;
  