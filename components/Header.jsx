import { useState} from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

const LoggingOut = () => {
  localStorage.removeItem('isAuthenticated'); 
  navigate('/login'); 
}

  const Searching = (e) => {
    if (e.key === "Enter") {
      navigate(`/courses`); // Navigate only when Enter is pressed
    } else {
      setSearchTerm(e.target.value);
    }   };

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    } 


    return (
      <div className="w-full bg-black text-white flex flex-wrap items-center justify-between py-4 mb-4 overflow-hidden break-words">
            <div className="flex-1 flex flex-wrap justify-center max-w-full h-auto">
          <input
          value= {searchTerm}
          onChange= {handleSearchChange}
          onKeyDown= {Searching} // Navigate when pressing Enter
          type="text"
          placeholder="Search..."
          className="w-96 p-2 rounded-full border-1 border-purple-200 text-white"
          />
        </div>
  
             <div className="flex items-center space-x-3">
             <a 
  onClick={LoggingOut} 
  className="cursor-pointer underline text-purple-300 hover:text-purple-">Logout</a>
          <span className="text-xl p-4">👤</span>
        </div>
      </div>
    );
  };

  export default Header;
  