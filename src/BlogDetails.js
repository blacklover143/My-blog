import React from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blogId = parseInt(id);
  const blog = blogs.find((blog) => blog.id === blogId);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default BlogDetails;
