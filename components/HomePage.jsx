import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";


const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const courseData = [
  { title: "React Basics", studentsEnrolled: 120, completionRate: 65 },
  { title: "Data Analysis with Python", studentsEnrolled: 95, completionRate: 80 },
  { title: "Advanced JavaScript", studentsEnrolled: 75, completionRate: 50 }
];

return (
  
  <div className="flex flex-1"> 
      <SideBar />
    <div className="flex-col flex-1 p-6 bg-gray-100 ">
      <h2 className="text-2xl font-bold space-y-5">Welcome back!</h2>

      <section className="flex-1 p-10 bg-gray-100">
               
               <div className="mt-6 p-6 bg-gray-200 rounded-md">
               <h2 className="text-xl font-bold mb-4">Course Progress</h2>
               <div className="grid grid-cols-3 gap-6">
                 <div>
                   <p>Kids in the Bible</p>
                   <div className="w-full bg-gray-300 rounded h-4">
                     <div className="bg-red-500 h-4 w-4/5"></div>
                   </div>
                   <p>81%</p>
                   <button className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                    Continue
                  </button>
                  </div>
                 <div>
                   <p>New Testament</p>
                   <div className="w-full bg-gray-300 rounded h-4">
                     <div className="bg-red-500 h-4 w-2/3"></div>
                   </div>
                   <p>76%</p>
                   <button className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                    Continue
                  </button>
                 </div>
                 <div>
                   <p>Univers</p>
                   <div className="w-full bg-gray-300 rounded h-4">
                     <div className="bg-red-500 h-4 w-11/12"></div>
                   </div>
                   <p>95%</p>
                   <button className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                    Continue
                  </button>
                 </div>
                 <div>
                   <p>Kids in the Bible</p>
                   <div className="w-full bg-gray-300 rounded h-4">
                     <div className="bg-red-500 h-4 w-4/5"></div>
                   </div>
                   <p>81%</p>
                   <button className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                    Continue
                  </button>
                 </div>
                 <div>
                   <p>New Testament</p>
                   <div className="w-full bg-gray-300 rounded h-4">
                     <div className="bg-red-500 h-4 w-2/3"></div>
                   </div>
                   <p>76%</p>
                   <button className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                    Continue
                  </button>
                 </div>
               </div>
             </div>
                  <div className="mt-6 p-6 bg-white rounded-md shadow">
               <h2 className="text-xl font-bold mb-4">Popular Courses</h2>
               <div className="grid grid-cols-4 gap-4">
                 {[1, 2, 3, 4, 5].map((_, index) => (
                   <div key={index} className="p-4 bg-white shadow rounded-md">
                     <h3 className="font-bold">Title</h3>
                     <p className="text-sm">Brief description of the course.</p>
                     <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-200">Start</button>
                   </div>
                 ))}
               </div>
             </div>
           </section>
</div>
      </div>

);
         
  };

export default HomePage;
