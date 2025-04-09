import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from "react"; 
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentDetail from './components/ContentDetail';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (

   <Router>
    <div className="flex flex-col min-h-screen bg-gray-100 ">
           <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
       <Routes>
       <Route path="/login" element={<LoginForm />} /> 
       <Route path="/" element={<HomePage />} /> 
       <Route path="/courses" element={<CoursesPage />} />
    
       <Route path="/detail/:courseId" element={<ContentDetail />} />
       </Routes>
       <Footer /> </div>
   </Router>
    
  )
}