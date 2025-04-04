import { useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";

const courses = [
  {
    id: "1",
    title: "Kids in the Bible",
    subtopics: [
      { 
        id: "1-1", 
        title: "Moses as a Child", 
        content: "Moses was found in a basket...", 
        image: "bk6.jpeg",
        quiz: [
          { question: "Who found baby Moses?", options: ["Pharaoh", "Pharaoh's daughter", "A priest"], answer: "Pharaoh's daughter" }
        ]
      },
      { 
        id: "1-2", 
        title: "Jesus' Childhood", 
        content: "Jesus grew up in Nazareth...", 
        image: "bk5.jpeg",
        quiz: [
          { question: "Where did Jesus grow up?", options: ["Bethlehem", "Jerusalem", "Nazareth"], answer: "Nazareth" }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "New Testament",
    subtopics: [
      { 
        id: "2-1", 
        title: "Gospels Overview", 
        content: "The four Gospels tell the story...", 
        image: "bk2.jpeg",
        quiz: [
          { question: "How many Gospels are there?", options: ["Three", "Four", "Five"], answer: "Four" }
        ]
      },
      { 
        id: "2-2", 
        title: "Paul's Letters", 
        content: "Paul wrote many letters to churches...", 
        image: "bk3.jpeg",
        quiz: [
          { question: "Who wrote the most letters in the New Testament?", options: ["Peter", "John", "Paul"], answer: "Paul" }
        ]
      }
    ]
  }
];

export default function ContentDetail() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  if (!course) {
    return <p className="text-center text-red-500">Course not found</p>;
  }

  return (
    <div className="flex flex-1">
      <SideBar />
      <main className="p-10 w-full">
        <h2 className="text-2xl font-bold">{course.title}</h2>
        <div className="flex mt-4">
          {/* List of Subtopics */}
          <div className="w-1/4 p-4 bg-gray-200 rounded-lg">
            <h3 className="font-semibold">Subtopics</h3>
            <ul>
              {course.subtopics.map(subtopic => (
                <li key={subtopic.id} className="mt-2">
                  <button 
                    onClick={() => {
                      setSelectedSubtopic(subtopic);
                      setShowQuiz(false); // Reset quiz when selecting a new subtopic
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    {subtopic.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Subtopic Details (Only shown when selected) */}
          {selectedSubtopic && (
            <div className="flex-1 p-6 bg-white shadow rounded-lg ml-4">
              <h3 className="text-xl font-semibold">{selectedSubtopic.title}</h3>
              {selectedSubtopic.image && (
                <img 
                  src={selectedSubtopic.image} 
                  alt={selectedSubtopic.title} 
                  className="w-full h-48 object-cover mt-2" 
                />
              )}
              <p className="mt-4 text-gray-700">{selectedSubtopic.content}</p>
              <button 
                onClick={() => setShowQuiz(true)} 
                className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-200"
              >
                Take Quiz
              </button>
            </div>
          )}
        </div>

        {/* Quiz Section (Only visible when started) */}
        {showQuiz && selectedSubtopic?.quiz && (
          <div className="mt-6 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Quiz for {selectedSubtopic.title}</h3>
            {selectedSubtopic.quiz.map((q, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-medium">{q.question}</p>
                <ul>
                  {q.options.map((option, i) => (
                    <li key={i} className="mt-2">
                      <label className="flex items-center">
                        <input type="radio" name={`question-${index}`} className="mr-2" />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Submit Quiz
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
