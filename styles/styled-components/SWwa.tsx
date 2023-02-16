import styled from "styled-components";

const SWwa = styled.section`
  padding: 5rem 0 5rem 15rem ;
  background: #f8f9fa;
  margin-top:6rem;

  h2 {
    font-size: 3rem;
    color: #1b361b;
  }

  > p{
    font-size: 1.8rem;
    margin:2rem 0;
    max-width:70rem;
  }

  main{
    display:flex;
    gap:2rem;
    overflow-x:scroll;
    margin-top:3rem;
  }

  main > div {
    background: #fff;
    padding:4rem 2rem;
    box-shadow:1px 1px 10px rgba(0,0,0,.2);
    flex-shrink:0;
    width:30%;
    min-width:30rem;
    margin-bottom:3rem;
  } 

  main > div > div {
    width:10rem;
    height:10rem;
  } 
  
  main h4{
    font-size: 1.8rem;
  }

  main small{
    font-size: 1.2rem;
    margin-bottom:1rem;
    display:block;
  }

  main p{
    font-size: 1.4rem;
    line-height:2rem;
    color: #9c9c9c;
    letter-spacing:1px;
  }

  main button{
    font-size: 1.2rem;
    margin:2rem 0;
    color: #9c9c9c;
  }

  main button:hover{
    color: #000;
  }

  main .img{
    border-radius:50%;
  }

  @media only screen and (max-width: 1200px) {
    padding: 4rem 0 4rem 2rem;
  }
`;

export default SWwa;
