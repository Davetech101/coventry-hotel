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
            img: "",
            txt: ""
        },
        {
            img: "",
            txt: ""
        },
        {
            img: "",
            txt: ""
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