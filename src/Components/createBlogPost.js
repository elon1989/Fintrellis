import { useContext } from "react";
import { BlogPostContext } from "../State/blogContext";
import Container from "./Component";
import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  border-radius: 5px;
  width: 100%;
`

export const StyledLabel = styled.label`
margin: .5rem 1rem;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledButton = styled.button`
margin-top: 1rem;
text-decoration: none;
color:rgb(223, 208, 184);
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
}`;

function CreateBlog() {

    const  {addBlogPost } = useContext(BlogPostContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newBlog = {
          title: e.target.elements[0].value,
          desc: e.target.elements[1].value
        };
        addBlogPost(newBlog);
      };
    
  
    return (
        <Container>
          <StyledForm onSubmit={handleSubmit}>
            <div>
              <StyledLabel>Title</StyledLabel>
              <StyledInput
                className="rounded-lg w-full"
                type="text"
                name="title"
                pattern="{3}"
                placeholder="Title"
                required
              />
            </div>
            <div>
              <StyledLabel>Description</StyledLabel>
              <StyledInput
                className="rounded-lg w-full"
                type="text"
                name="desc"
                pattern="{3}"
                placeholder="Description"
                required
              />
            </div>
            <StyledButton type="submit">Send message</StyledButton>
          </StyledForm>
          </Container>
    );
  }

export default CreateBlog;