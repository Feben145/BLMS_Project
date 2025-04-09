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

  const courses = [
    { id: "1", title: "Kids in the Bible", description: "Learn about children in the Bible. Know God......." },
    { id: "2", title: "New Testament", description: "Explore the New Testament scriptures." },
    { id: "3", title: "Universe", description: "Understand the creation and the universe." },
    { id: "2", title: "New Testament", description: "Explore the New Testament scriptures. Know God......." },
    { id: "3", title: "Universe", description: "Understand the creation and the universe." }
  ];

return (
  
  <div className="flex flex-1"> 
      <SideBar />
    <div className="flex-col flex-1 p-6 bg-gray-100 ">
      <h2 className="text-2xl font-bold space-y-5">Welcome back!</h2>

      <section className="flex-col flex-1 p-4 bg-gray-100 gap-8">
               
               <div className="mt-6 p-6 bg-gray-200 rounded-md">
               <h2 className="text-xl font-bold mb-4">Course Progress</h2>
               <div className="grid grid-cols-3 gap-6">
                 <div>
                   <p>Kids in the Bible</p>
                   <div className="w-full bg-gray-300 rounded-lg h-4">
                     <div className="bg-green-400 h-4 w-4/5 rounded-lg " ></div>
                   </div>
                   <p>81%</p>
                   <button
                        onClick={() => navigate(`/courses`)} // Navigate to Courses page
                        className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                          Continue
                      </button>
                  </div>
                 <div>
                   <p>New Testament</p>
                   <div className="w-full bg-gray-300 rounded-lg  h-4">
                     <div className="bg-blue-400 h-4 w-2/3 rounded-lg "></div>
                   </div>
                   <p>76%</p>
                   <button
                        onClick={() => navigate(`/courses`)} // Navigate to Courses page
                        className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                          Continue
                      </button>
                 </div>
                 <div>
                   <p>Univers</p>
                   <div className="w-full bg-gray-300 rounded-lg h-4">
                     <div className="bg-red-500 h-4 w-6/12 rounded-lg "></div>
                   </div>
                   <p>50%</p>
                   <button
                        onClick={() => navigate(`/courses`)} // Navigate to Courses page
                        className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                          Continue
                      </button>
                 </div>
                 <div>
                   <p>Kids in the Bible</p>
                   <div className="w-full bg-gray-300 rounded-lg  h-4">
                     <div className="bg-blue-400 h-4 w-4/5 rounded-lg "></div>
                   </div>
                   <p>81%</p>
                   <button
                        onClick={() => navigate(`/courses`)} // Navigate to Courses page
                        className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                          Continue
                      </button>
                 </div>
                 <div>
                   <p>New Testament</p>
                   <div className="w-full bg-gray-300 rounded-lg h-4">
                     <div className="bg-bg-red-500 h-4 w-1/3 rounded-lg "></div>
                   </div>
                   <p>76%</p>
                      <button
                        onClick={() => navigate(`/courses`)} // Navigate to Courses page
                        className="mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded hover:bg-gray-300">
                          Continue
                      </button>
                 </div>
               </div>
             </div>

             
                  <div className="mt-6 p-6 bg-white rounded-md shadow">
               <h2 className="text-xl font-bold mb-4">Popular Courses</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

               {
               courses.map((courses) => (
       <div key={courses.id} className="p-4 bg-white shadow rounded-md">
        <h3 className="font-bold">{courses.title}</h3>
       <p>{courses.description}</p>
        <button   onClick={() => navigate(`/courses`)}className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-200">Start</button>
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
