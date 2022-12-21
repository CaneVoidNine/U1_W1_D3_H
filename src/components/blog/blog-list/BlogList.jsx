import React from "react";
import { Col, Row } from "react-bootstrap";

import BlogItem from "../blog-item/BlogItem";
import { useEffect, useState } from "react";
const BlogList = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getBlogPosts() {
      try {
        let req = await fetch("http://localhost:3001/blogposts");
        if (req.ok) {
          let blogPosts = await req.json();
          setPosts(blogPosts);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getBlogPosts();
  }, []);
  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
