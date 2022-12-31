import React from 'react'
import SBlog from '../styles/styled-components/SBlog'
import canoe from "../public/assets/canoeride.jpg"

const Blog = () => {
    const posts = [
        {
            img: "/assets/canoeride.jpg",
            txt: "Ride a canoe, feel the wind and enjoy fishing on a very beautiful lake"
        },
        {
            img: "/assets/woods.jpg",
            txt: "Explore the woods with your family"
        },
        {
            img: "/assets/beach.jpg",
            txt: "Enjoy the atmosphere outside, fresh air from the beach"
        },
        {
            img: "/assets/desert.jpg",
            txt: "Have a walk in the desert, and watch the sun reflect on your skin"
        },
    ]
const img = "/assets/canoeride.jpg"
  return (
    <SBlog>
        <h2>
            Blog Posts
        </h2>
        <div className="tst" style={{background: `url(${img})`}}>yugkyugkykuyb</div>
    </SBlog>
  )
}

export default Blog