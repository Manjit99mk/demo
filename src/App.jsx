import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePages"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
// import './styles/Pages.css'
import Footer from "./components/Footer/Footer"
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
//c:/ojt/DAY 4/VCK firstproject/vck-ojt-app/src/Components/Chatbot/ChatbotComponents
import AdmissionPage from "./pages/AdmissionPage"
import { useState } from "react"
import DeveloperInfoPopup from "./components/Developerinfo/DeveloperInfoPopup"
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Jitt Kakatkar"
          studentPhotoUrl="/Images/jitt2.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/cours" element={<CoursesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/addmission" element={<AdmissionPage/>}/>
          
        </Routes>
         <ChatbotComponent/>
      
         
      </Router>
    </>
  )
}

export default App