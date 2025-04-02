import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex flex-1 p-6 bg-gray-100 items-center justify-center">
          <h2 className="text-2xl font-bold">Welcome back!</h2>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
