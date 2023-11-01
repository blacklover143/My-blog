import React, { useState } from "react";

const ComposeBlog = ({ onBlogAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a unique ID for the new blog
    const newBlogId = Date.now();

    // Create the new blog object
    const newBlog = {
      id: newBlogId,
      title: title,
      content: content,
    };

    // Call the onBlogAdded function to add the new blog to the list
    onBlogAdded(newBlog);

    // Reset form fields
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Compose New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={handleContentChange}></textarea>
        </div>
        <button type="submit">Compose</button>
      </form>
    </div>
  );
};

export default ComposeBlog;
