import { useState } from "react";

import SideBar from "../components/SideBar";

export default function ProgressBar() {
    
        const [sidebarOpen, setSidebarOpen] = useState(false);
      
        const courseData = [
          { title: "React Basics", studentsEnrolled: 120, completionRate: 65 },
          { title: "Data Analysis with Python", studentsEnrolled: 95, completionRate: 80 },
          { title: "Advanced JavaScript", studentsEnrolled: 75, completionRate: 50 }
        ];
      
  return (
    <div className="flex min-h-screen bg-gray-200">
     
      <SideBar />
      <main className="flex-1 p-6 bg-red-200">
               
        {/* Progress Section */}
        <section className="mt-6 p-6 bg-gray-200 rounded-md">
          <h2 className="text-xl font-bold mb-4">Course Progress</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p>Kids in the Bible</p>
              <div className="w-full bg-gray-300 rounded h-4">
                <div className="bg-red-500 h-4 w-3/5"></div>
              </div>
              <p>81%</p>
            </div>
            <div>
              <p>New Testament</p>
              <div className="w-full bg-gray-300 rounded h-4">
                <div className="bg-red-500 h-4 w-2/3"></div>
              </div>
              <p>76%</p>
            </div>
            <div>
              <p>Univers</p>
              <div className="w-full bg-gray-300 rounded h-4">
                <div className="bg-red-500 h-4 w-11/12"></div>
              </div>
              <p>95%</p>
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="mt-6 p-6 bg-white rounded-md shadow">
          <h2 className="text-xl font-bold mb-4">Popular Courses</h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="p-4 border rounded-md">
                <h3 className="font-bold">Title</h3>
                <p className="text-sm">Brief description of the course.</p>
                <button className="mt-2 bg-black text-white px-4 py-2 rounded">Enroll</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
