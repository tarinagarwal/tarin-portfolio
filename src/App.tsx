import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Gallery from "./pages/Gallery/Gallery";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Blogs from "./pages/Blogs/Blogs";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
