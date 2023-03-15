import styled from "styled-components";
interface Props {
  bgImg: string;
}


const SHero = styled.section<Props>`
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  min-height: 90vh;
  position: relative;
  background-image: ${(p: Props) => `linear-gradient(
    to left,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
  ),
  url(/assets/${p.bgImg}.jpg)`};

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width:100%;
    margin: 0rem auto;
    position: absolute;
    padding: 2rem;
    z-index: 0;
  }

  main h2 {
    color: #d2d2d2;
    text-align: center;
    font-size: 4rem;
    max-width: 49rem;
  }

  main p {
    color: #bcbcbc;
    text-align: center;
    font-size: 2rem;
    max-width: 49rem;
  }
  
  main button {
    margin-top: 2.5rem;
    transition: all 0.4s;
  }

  .button {
    --offset: 10px;
    --border-size: 2px;
    display: block;
    position: relative;
    padding: 1.5em 3em;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    border: 0;
    background: transparent;
    color:#d2d2d2;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0;
    box-shadow: inset 0 0 0 var(--border-size) currentcolor;
    transition: background 0.8s ease;
    text-align:center;
  }
  .button:hover {
    background: rgba(100, 0, 0, 0.03);
  }
  .button__horizontal, .button__vertical {
    position: absolute;
    top: var(--horizontal-offset, 0);
    right: var(--vertical-offset, 0);
    bottom: var(--horizontal-offset, 0);
    left: var(--vertical-offset, 0);
    transition: transform 0.8s ease;
    will-change: transform;
  }
  .button__horizontal::before, .button__vertical::before {
    content: "";
    position: absolute;
    border: inherit;
  }
  .button__horizontal {
    --vertical-offset: calc(var(--offset) * -1);
    border-top: var(--border-size) solid currentcolor;
    border-bottom: var(--border-size) solid currentcolor;
  }
  .button__horizontal::before {
    top: calc(var(--vertical-offset) - var(--border-size));
    bottom: calc(var(--vertical-offset) - var(--border-size));
    left: calc(var(--vertical-offset) * -1);
    right: calc(var(--vertical-offset) * -1);
  }
  .button:hover .button__horizontal {
    transform: scaleX(0);
  }
  .button__vertical {
    --horizontal-offset: calc(var(--offset) * -1);
    border-left: var(--border-size) solid currentcolor;
    border-right: var(--border-size) solid currentcolor;
  }
  .button__vertical::before {
    top: calc(var(--horizontal-offset) * -1);
    bottom: calc(var(--horizontal-offset) * -1);
    left: calc(var(--horizontal-offset) - var(--border-size));
    right: calc(var(--horizontal-offset) - var(--border-size));
  }
  .button:hover .button__vertical {
    transform: scaleY(0);
  }

  @media only screen and (min-width: 800px) {
    main{
      align-items: unset;
    }

    main h2 {
      color: #d2d2d2;
      text-align: left;
      font-size: 4rem;
    }

    main p {
      text-align: left;
      font-size: 3rem;
      margin-top:2rem;
      max-width: 60rem;
    }

    main button {
      max-width:13rem;
    }
  }
  

  @media only screen and (min-width: 1200px) {
    padding: 1rem 13rem;

    main {
      height: 100%;
      max-width: 60rem;
      margin: 0rem auto;
      align-items: unset;
      display: block;
      margin-top: 23rem;
    }

    main h2 {
      color: #d2d2d2;
      text-align: unset;
      margin-top:-4rem;
      width: 100%;
      font-size: 6rem;
    }

    main p {
      font-size: 4rem;
      max-width: 80rem;
    }
  }
`

export default SHero;