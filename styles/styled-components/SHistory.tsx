import styled from "styled-components";

const SHistory = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  position: relative;

  .green {
    background: #1b361b;
    width: 30%;
    height: 40rem;
  }

  .bg {
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.2)
      ),
      url(/assets/why.jpg);
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    width: 35%;
    min-height: 35rem;
    position: absolute;
    top: 50%;
    right: 15rem;
    transform: translate(-0, -50%);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  .text {
    width: 50%;
    padding-left: 15rem;
  }

  h2 {
    font-size: 3rem;
    color: #1b361b;
    margin-bottom: 2rem;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 1200px) {
    .bg {
      right: 3rem;
      min-height: 25rem;
    }

    .text {
      width: 55%;
      padding-left: 3rem;
    }

    .green {
      background: #1b361b;
      width: 20%;
      height: 30rem;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0 3rem;

    .bg {
      width: 90%;
      min-height: 35rem;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -10%);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      border-top-right-radius: 10rem;
      border-bottom-left-radius: 10rem;
    }

    .green {
      margin-bottom: 4rem;
      background:transparent;
    }

    .text {
      padding: 0;
      width: 100%;
      z-index:100;
      padding:2rem;
      margin-top:6rem;
    }
    
    p, h2{
        color:#fff;
    }
  }
`;

export default SHistory;
