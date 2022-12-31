import React from "react";
import SBlog from "../styles/styled-components/SBlog";

const Blog = () => {
  const posts = [
    {
      img: "/assets/canoeride.jpg",
      txt: "Ride a canoe, feel the wind and enjoy fishing on a very beautiful lake",
    },
    {
      img: "/assets/woods.jpeg",
      txt: "Explore the woods with your family",
    },
    {
      img: "/assets/beach.jpeg",
      txt: "Enjoy the atmosphere outside, fresh air from the beach",
    },
    {
      img: "/assets/desert.webp",
      txt: "Have a walk in the desert, and watch the sun reflect on your skin",
    },
  ];
  const img = "/assets/canoeride.jpg";
  return (
    <SBlog>
      <h2>Blog Posts</h2>

      <main>
        {posts.map((post, idx) => (
          <div
            key={idx}
            style={{
              background: `linear-gradient(to left, rgba(0,0,0, .6), rgba(0,0,0, .6)), url(${post.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text">
              <p>{post.txt}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </main>
    </SBlog>
  );
};

export default Blog;
