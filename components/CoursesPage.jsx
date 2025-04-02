import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";


export default function CoursesPage({ searchTerm = ""}) 
 {
    
    const courses = [
      { title: "Kids in the Bible", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "New testament", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "Universe", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" }
    ];
  
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return (
    <div className="flex flex-col min-h-screen">
      
      <Header />
  
      <div className="flex flex-1">
        
     <SideBar />
     <main className="p-10">
        <h2 className="text-2xl font-bold">All Courses</h2>
        <p className="text-gray-500">Start learning</p>
  
        <div className="grid grid-cols-3 gap-6 mt-6">
        {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <div key={index} className="p-4 bg-white shadow rounded-lg">
                  <h3 className="font-bold">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-300">
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
      <Footer />
    </div>
  );
};