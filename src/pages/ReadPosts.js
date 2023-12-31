import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const ReadPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(props.data);
  }, [props]);

  return (
    <div className="ReadPosts">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <Card
            key={index}
            id={post.id}
            title={post.title}
            author={post.author}
            description={post.description}
            betCount={post.betCount} // <-- only thing added in this file
          />
        ))
      ) : (
        <h2>{"No Challenges Yet 😞"}</h2>
      )}
    </div>
  );
};

export default ReadPosts;
