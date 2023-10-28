import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import { supabase } from "../client";

const EditPost = ({ data }) => {
  const { id } = useParams();
  const post = data.find((item) => String(item.id) === String(id));

  const [editedPost, setEditedPost] = useState({
    title: "",
    author: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updatePost = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("Posts")
      .update({
        title: editedPost.title,
        author: editedPost.author,
        description: editedPost.description,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label> <br />
        <input
          type="text"
          id="title"
          name="title"
          value={editedPost.title}
          onChange={handleChange}
          placeholder={post.title}
        />
        <br />
        <br />
        <label htmlFor="author">Author</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          value={editedPost.author}
          onChange={handleChange}
          placeholder={post.author}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={editedPost.description}
          placeholder={post.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton">Delete</button>
      </form>
    </div>
  );
};

export default EditPost;
