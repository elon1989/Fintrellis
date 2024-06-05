import { Route, Routes } from "react-router-dom";
import BlogPosts from "./Components/BlogPosts";
import Blog from "./Components/blogPost";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import CreateBlog from "./Components/createBlogPost";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/blog" element={<BlogPosts />} />
        <Route exact path="/createBlog" element={<CreateBlog />} />
        <Route exact path="/blog/:title" element={<Blog />} />
      </Routes>
    </>
  );
}
