import React, { useContext } from "react";
import Container from "./Component";
import styled from "styled-components";
import Modal from "styled-react-modal";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { BlogPostContext } from "../State/blogContext";

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const BlogPostsWrapper = styled.div`
  width: 100%;
`;

export const BlogPostWrapper = styled.div`
  background-color: #153448;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  width:100%;
  padding:1rem;
`;

export const RemoveBlog = styled.div`
  margin: 1rem;
  cursor: pointer;
`;

export const BlogPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BlogPostTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 1rem;
`;

export const BlogDesc = styled.p`
  font-size: 1rem;
  padding: 1rem;
  height: 100%;
`;

export const NewBlogPostBtn = styled.div`
width: 150px;
margin: 1rem;
    color: rgb(223, 208, 184);
    cursor: pointer;
    font-size: .8rem;
    font-weight: 500;
    text-transform: uppercase;
    border: 1px solid black;
    background-color: #153448;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: rgb(223, 208, 184);
      color: #153448;
    }
}
`;

const StyledLink = styled(Link)`
text-decoration: none;
color:rgb(223, 208, 184);
font-size: .8rem;
font-weight: 500;
text-transform: uppercase;
border: 1px solid black;
background-color: #153448;
padding: 5px 10px;
border-radius: 5px;
transition: 0.3s;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
&:hover {
  background-color: rgb(223, 208, 184);
  color: #153448;
}`;

function BlogPost({ blog, removeBlog }) {
  return (
    <BlogPostWrapper key={`${blog.title}_key`}>
      <BlogPostHeader>
        <BlogPostTitle>{blog.title}</BlogPostTitle>
        <RemoveBlog
          onClick={(e) => {
            e.stopPropagation();
            removeBlog(blog);
          }}
        >
          <MdDelete />
        </RemoveBlog>
      </BlogPostHeader>
      <br></br>
      <p className="text-center">
        {blog.desc.length > 100
          ? blog.desc.substring(0, 100) + "..."
          : blog.desc}
      </p>
      <br></br>
      <StyledLink to={`/blog/${blog.title}`}>Read More</StyledLink>
    </BlogPostWrapper>
  );
}

function BlogPostList({ blogPost, removeBlog }) {
  return (
    <Container>
      <BlogPostsWrapper>
        {blogPost.map((blog) => (
          <BlogPost
            key={blog.title}
            blog={blog}
            removeBlog={removeBlog}
          />
        ))}
      </BlogPostsWrapper>
    </Container>
  );
}

function BlogPosts() {
  const { blogPost, removeBlog } = useContext(BlogPostContext);

  return (
    <div>
      <BlogPostList
        blogPost={blogPost}
        removeBlog={removeBlog}
      />
    </div>
  );
}

export default BlogPosts;
