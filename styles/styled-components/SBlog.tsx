import styled from "styled-components";
import img from "../../public/assets/canoeride.jpg"

const SBlog = styled.section`
  margin:4rem 0;
  padding:0 3rem 0 0;

  h2{
    font-size: 3rem;
    color: #1b361b;
    margin-bottom: 3rem;
    padding:0 ;
    text-align:right;
  }

  main{
    display:flex;
    overflow-x:scroll;
    box-shadow:2px 2px 10px rgba(0,0,0,.3);
  }

  main div {
    padding: 2rem;
    flex-shrink:0;
    width:100%;
    min-height:20rem;
  }

`;
export default SBlog;
