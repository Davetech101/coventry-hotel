import styled from "styled-components";


const SHero = styled.section`
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(/assets/Hero.jpg);
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  min-height: 90vh;
  position: relative;
`

export default SHero;