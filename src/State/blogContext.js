import React, { useState } from "react";

export const BlogPostContext = React.createContext();

export function BlogPostProvider({ children }) {
    const [blogPost, setBlogPost] = useState([
        {
            title: 'First Blog Post',
            desc: 'This is the description for the first blog post.',
          },
          {
            title: 'Second Blog Post',
            desc: 'This is the description for the second blog post.',
          },
          {
            title: 'Third Blog Post',
            desc: 'This is the description for the third blog post.',
          },
    ]);
  
    const addBlogPost = (newBlog) => {
      setBlogPost([...blogPost, newBlog]);
    };
  
    const removeBlog = (blogToRemove) => {
      setBlogPost(blogPost.filter((blog) => blog.title !== blogToRemove.title));
    };
  
    return (
      <BlogPostContext.Provider value={{ blogPost, addBlogPost, removeBlog }}>
        {children}
      </BlogPostContext.Provider>
    );
  }