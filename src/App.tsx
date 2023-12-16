import { Routes, Route } from "react-router-dom";
import RecommendPage from "./pages/RecommendPage";
import WritePage from "./pages/WritePostPage";
import PostPage from "./pages/PostPage";
import MyPostPage from "./pages/MyPostPage";
import StorePage from "./pages/StorePage";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import IntroPage from "./pages/IntroPage";

function App() {
  return (
    <Routes>
      <Route path="/recommends" element={<RecommendPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/post/:reviewId" element={<PostPage />} />
      <Route path="/mypost" element={<MyPostPage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<IntroPage />} />
    </Routes>
  );
}

export default App;
