import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function CoursesPage({ searchTerm = ""}) 
 {
   const navigate= useNavigate();
    const courses = [
        { id: "1", title: "Kids in the Bible", description: "Learn about children in the Bible." },
        { id: "2", title: "New Testament", description: "Explore the New Testament scriptures." },
        { id: "3", title: "Universe", description: "Understand the creation and the universe." }
      ];
      const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-1">
            <SideBar />
            <main className="p-10">
              <h2 className="text-2xl font-bold">All Courses</h2>
              <p className="text-gray-500">Start learning</p>
    
              <div className="grid grid-cols-3 gap-6 mt-6">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <div key={course.id} className="p-4 bg-white shadow rounded-lg">
                      <h3 className="font-bold">{course.title}</h3>
                      <p className="text-sm text-gray-600">{course.description}</p>
                      <button
                        onClick={() => navigate(`/detail/${course.id}`)} // Navigate to ContentDetail
                        className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
                      >
                        Enroll
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">No courses found.</p>
                )}
              </div>
            </main>
          </div>
        </div>
      );
    }