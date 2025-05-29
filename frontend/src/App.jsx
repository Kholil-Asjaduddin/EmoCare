import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import SignupPage from "./components/SignupPage/SignupPage";
import SelectRolePage from "./components/SelectRolePage/SelectRolePage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ContentPage from "./components/ContentPage/ContentPage";
import CommunityPage from "./components/CommunityPage/CommunityPage";
import CommunityConvoPage from "./components/CommunityConvoPage/CommunityConvoPage";
import ChatbotPage from "./components/ChatbotPage/ChatbotPage";
import ConsultationPage from "./components/ConsultationPage/PsychologistPage";
import ConsultationChatPage from "./components/ConsultationChatPage/ConsultationChatPage";
import PsychologistSessionPage from "./components/PsychologistSessionPage/PsychologistSessionPage";
import PsychologistProfilePage from "./components/PsychologistProfilePage/PsychologistProfilePage";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
//import ContentPage from "./pages/ContentPage";
import VideoPage from "./components/ContentPage/VideoPage/VideoPage";
import PodcastPage from "./components/ContentPage/PodcastPage/PodcastPage";
import ArticlePage from "./components/ContentPage/ArticlePage/ArticlePage";


import Navbar from "./components/Navbar";

// Used for testing
// import Test from "./test/Test";



function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex flex-col items-center w-screen h-full">
        <Routes>
          {/* route to landing */}
          <Route path="/" element={<LandingPage />} />
          {/* route to home */}
          <Route path="/home" element={<HomePage />} />
          {/* route to /signup */}
          <Route path="/signup" element={<SignupPage />} />
          {/* route to /selectrole */}
          <Route path="/selectrole" element={<SelectRolePage />} />
          {/* route to /psychologistprofile */}
          <Route path="/psychologistprofile" element={<PsychologistProfilePage />} />
          {/* route to /userprofile */}
          <Route path="/userprofile" element={<UserProfilePage />} />
          {/* route to /login */}
          <Route path="/login" element={<LoginPage />} />
          {/* route to /profile */}
          <Route path="/profile" element={<ProfilePage />} />
          {/* route to /video */}
          <Route path="/video" element={<VideoPage />} />
          {/* route to /podcast */}
          <Route path="/podcast" element={<PodcastPage />} />
          {/* route to /article */}
          <Route path="/article" element={<ArticlePage />} />
          {/* route to /content */}
          <Route path="/content" element={<ContentPage />} />
          {/* route to /community */}
          <Route path="/community" element={<CommunityPage />} />
          {/* route to /communityconvo */}
          {/* <Route path="/communityconvo" element={<CommunityConvoPage />} /> */}
          {/* route to /chatbot */}
          <Route path="/chatbot" element={<ChatbotPage />} />
          {/* route to /consultation */}
          <Route path="/consultation" element={<ConsultationPage />} />
          {/* route to /consultationchat */}
          {/* <Route path="/consultationchat" element={<ConsultationChatPage />} /> */}
          {/* route to /psychologistsession */}
          <Route path="/psychologistsession" element={<PsychologistSessionPage />} />

          {/* route to /test */}
          {/* <Route path="/" element={<Test />} /> */}

          <Route path="/consultationchat/:sessionId" element={<ConsultationChatPage />} />
          <Route path="/communityconvo/:chatId" element={<CommunityConvoPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
