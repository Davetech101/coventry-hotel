import styled from "styled-components";

const SWhyUs = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  position:relative;

  .green {
    background: #1b361b;
    width: 30%;
    height: 40rem;
  }

  .bg{
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.2)
      ),
      url(/assets/why.jpg);
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    width:35%;
    min-height:35rem;
    position:absolute;
    top:50%;
    left:15rem;
    transform:translate(-0, -50%);
    box-shadow:5px 5px 10px rgba(0,0,0,.2);
  }

  .text{
    width:50%;
    padding-right:16rem;
  }

  h2{
    font-size: 3rem;
    color: #1b361b;
    margin-bottom:2rem;
  }

  p{
    color:rgba(0, 0, 0, 0.7);
    font-size:1.5rem;
  }
`;

export default SWhyUs;
