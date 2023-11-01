import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ComposeBlog from "./ComposeBlog";
import BlogList from "./BlogList"; // Import your BlogList component
import BlogDetails from "./BlogDetails"; 
import "./App.css";

const initialBlogs = [
  {
    id: 1,
    title: "Blog 1",
    content: "This is the content of Blog 1.",
  },
  {
    id: 2,
    title: "Blog 2",
    content: "This is the content of Blog 2.",
  },
  {
    id: 3,
    title: "Blog 3",
    content: "This is the content of Blog 3.",
  },
];

function App() {
  const [blogs, setBlogs] = useState(initialBlogs);

  const handleBlogAdded = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Blog App</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BlogList blogs={blogs} />
                  <Link to="/compose">Compose New Blog</Link>
                </>
              }
            />
            <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
            <Route
              path="/compose"
              element={<ComposeBlog onBlogAdded={handleBlogAdded} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
