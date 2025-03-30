
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
    <div className="flex flex-col min-h-screen">
      
      <Header />

      {/* Main content area with Sidebar + Page Content */}
      <div className="flex flex-1">
        
        {/* Sidebar with fixed width and auto height */}
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <h2 className="text-2xl font-bold">Welcome back!</h2>
        </main>
      </div>

      {/* Footer spans full width */}
      <Footer />
    </div>
  );
};

export default HomePage;
