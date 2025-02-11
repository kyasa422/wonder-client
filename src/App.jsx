import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";

import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import PostNewArticle from "./pages/PostNewArticle";

import TravelSpots from "./pages/TravelSpots";
import TravelSpotDetail from "./pages/TravelSpotDetail";
import PostNewTravelSpot from "./pages/PostNewTravelSpot";

import Profile from "./pages/Profile";
import NotFound404 from "./pages/NotFound404";

import AsideNavbar from "./components/navbar/AsideNavbar";

function App() {
  return (
    <Router>
      <div className="container mx-auto font-poppins max-w-5xl px-4">
        <AsideNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article_detail:id" element={<ArticleDetail />} />
          <Route path="/new_article" element={<PostNewArticle />} />
          <Route path="/travelspots" element={<TravelSpots />} />
          <Route path="/travelspot_detail/:id" element={<TravelSpotDetail />} />
          <Route path="/new_travelspot" element={<PostNewTravelSpot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
