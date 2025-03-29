import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/login'); 
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen">
         <SideBar />
      <div className="flex-1 flex flex-col">
               <Header />
               <div className="flex-1 flex items-center justify-center bg-gray-200">
          <h2 className="text-2xl font-bold">Welcome back!</h2>
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default HomePage;



