export default function CoursesPage() {
    const courses = [
      { title: "Kids in the Bible", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "New testament", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "Universe", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" },
      { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very" }
    ];
  
    return (
      <main className="p-10">
        <h2 className="text-2xl font-bold">All courses</h2>
        <p className="text-gray-500">Subheading</p>
  
        <div className="grid grid-cols-3 gap-6 mt-6">
          {courses.map((course, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg">
              <h3 className="font-bold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.description}</p>
              <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded">Enroll</button>
            </div>
          ))}
        </div>
      </main>
    );
  }
  