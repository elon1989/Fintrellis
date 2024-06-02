import React from "react";
import Container from "./Component";

function BlogPosts() {
  const BlogPost = () => {
    return <>
      blog post
    </>
  }
  console.log('BlogPosts')
  const BlogPostList = () => {
    let posts = [];
    for (let i = 0; i < 10; i++) {
      posts.push(<BlogPost key={i} />);
    }
    return posts;
  }

  return <Container><div>{BlogPostList()}</div></Container>;
}

export default BlogPosts;
