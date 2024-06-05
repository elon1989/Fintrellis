import { useParams } from 'react-router-dom';
import { BlogPostHeader, BlogPostTitle, BlogPostWrapper, RemoveBlog } from './BlogPosts';
import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { BlogPostContext } from '../State/blogContext';
import Container from './Component';

function Blog() {
    const { title } = useParams();
    const { blogPost } = useContext(BlogPostContext);
  
    const blog = blogPost.find((blog) => blog.title === title);
  
    if (!blog) {
      return <div>Blog post not found</div>;
    }
  
    return (
        <Container>
      <BlogPostWrapper key={`${blog.title}_key`}>
        <BlogPostHeader>
          <BlogPostTitle>{blog.title}</BlogPostTitle>
          <RemoveBlog
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <MdDelete />
          </RemoveBlog>
        </BlogPostHeader>
        <br></br>
        <p className="text-center">
          {blog.desc}
        </p>
        <br></br>
      </BlogPostWrapper>
      </Container>
    );
}

export default Blog;