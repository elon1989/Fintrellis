import { Route, Routes } from "react-router-dom";
import BlogPosts from "./Components/BlogPosts";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/blog" element={<BlogPosts />} />
      </Routes>
    </>
  );
}
