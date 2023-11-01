import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => (
  <div>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <Link to={`/blog/${blog.id}`}>
          <h3>{blog.title}</h3>
        </Link>
      </div>
    ))}
  </div>
);

export default BlogList;
