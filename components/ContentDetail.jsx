import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function ContentDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);


  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((c) => c.id === courseId);
        setCourse(found);
        setSelectedSubtopic(found?.subtopics[0] || null);
      });
  }, [courseId]);

  useEffect(() => {
    if (selectedSubtopic) {
      fetch("/data/quizzes.json")
        .then((res) => res.json())
        .then((data) => {
          const foundQuiz = data.find((q) => q.subtopicId === selectedSubtopic.id);
          setQuiz(foundQuiz);
          setSelectedAnswers({});
          setSubmitted(false);
        });
    }
  }, [selectedSubtopic]);

  if (!course) return <p className="text-center text-red-500">Course not found</p>;

  const handleSelect = (qIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = quiz
    ? quiz.questions.reduce((total, q, idx) => total + (selectedAnswers[idx] === q.answer ? 1 : 0), 0)
    : 0;

  return (
    <div className="flex flex-1">
      <SideBar />
      <main>
        <h2 className="text-base md:text-lg lg:text-xl font-bold ml-4 ">{course.title}</h2>
        <div className="flex flex-wrap mt-4 mr-4 ml-4 break-words">
         
          <div className="w-1/4 p-4 bg-gray-200 rounded-lg">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Subtopics</h3>
             {/* Subtopics List */}
            <ul>
              {course.subtopics.map((subtopic) => (
                <li key={subtopic.id} className="mt-2">
                  <button 
                    onClick={() => setSelectedSubtopic(subtopic)}
                    className="text-blue-600 hover:underline text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    {subtopic.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content & Quiz */}


          <div className="flex-1 p-6 bg-white shadow rounded-lg ml-4">
            {selectedSubtopic && (
              <>
                <h3 className="text-xl font-semibold">{selectedSubtopic.title}</h3>
                {selectedSubtopic.image && (
                  <img
                    src={selectedSubtopic.image}
                    alt={selectedSubtopic.title}
                    className="w-full h-auto object-contain rounded shadow mt-4"
                                     
                  />
                )}
                <p className="mt-4 text-gray-700">{selectedSubtopic.content}</p>

                {quiz && !showQuiz && (
         <button
           className="mt-6 px-4 py-2 bg-gray-900 text-white block rounded-md hover:bg-gray-200"
           onClick={() => setShowQuiz(true)} >
    Take Quiz
          </button>
        )}
                {quiz && showQuiz && (
  <div className="mt-6 p-4 border-t">
    <h3 className="text-lg font-semibold mb-2">Quiz</h3>
    {quiz.questions.map((q, idx) => (
      <div key={idx} className="mb-4">
        <p className="font-medium">{q.question}</p>
        {q.options.map((opt) => (
          <label key={opt} className="block mt-1">
            <input
              type="radio"
              name={`q-${idx}`}
              value={opt}
              disabled={submitted}
              checked={selectedAnswers[idx] === opt}
              onChange={() => handleSelect(idx, opt)}
            />
            <span className="ml-2">{opt}</span>
          </label>
        ))}
        {submitted && (
          <p className={`mt-1 ${selectedAnswers[idx] === q.answer ? "text-green-600" : "text-red-600"}`}>
            {selectedAnswers[idx] === q.answer ? "Correct" : `Wrong. Correct: ${q.answer}`}
          </p>
        )}
      </div>
    ))}
    {!submitted ? (
      <button
        className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md  hover:bg-gray-200"
        onClick={handleSubmit}
      >
    Submmit Quiz
      </button>
    ) : (
      <p className="mt-4 font-bold text-lg">Your Score: {score}/{quiz.questions.length}</p>
    )}
  </div>
)}

              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
