import styled from "styled-components";

const SBrusque = styled.section`
.top {
    width: 100vw;
    height: 30rem;
    display: flex;
    position:relative;
    margin-bottom:1rem;
  }

  .left {
    background: #1b361b;
    width: 50%;
    height: 100%;
  }

  .right {
    background: #fff;
    width: 50%;
    height: 100%;
  }

  .bg {
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      url(/assets/Hero.jpg);
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    width:85%;
    min-height:20rem;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
  }

  p{
    color:rgba(0, 0, 0, 0.7);
    font-size:1.5rem;
    padding:0 3rem;
  }

  @media only screen and (min-width: 800px) {
    .bg {
      width:55%;
      min-height:25rem;
    }
  }

  @media only screen and (min-width: 1000px) {
    p{
      font-size:1.8rem;
    }
  }
`;
export default SBrusque;
