import styled from 'styled-components'


const SNavbar = styled.main`
background-image:linear-gradient(to left, rgba(0,0,0, .6), rgba(0,0,0, .6)), url(/assets/Hero.jpg);
background-size:cover;
background-position:left;
background-repeat:no-repeat;
padding:2rem;
min-height:90vh;
position:relative;

   header{
      display:flex;
      justify-content:space-between;
      align-items:center;
   }

   header a{
      color:#fff;
      font-size:2rem;
      font-family: 'Poppins', sans-serif;
   }

   .toggle{
      z-index:10;
      position:relative;
   }

   .modal{
      position:fixed;
      top:0;
      left:0;
      height:100vh;
      width:100vw;
      background:rgba(0,0,0,.5);
      opacity:0;
      visibility:hidden;
      transition:all .5s;
   }

   .modal.show{
      opacity:1;
      visibility:visible;
      z-index:3;
   }

   nav{
      background:#fff;
      position:fixed;
      top:0;
      left:0;
      height:40vh;
      width:75vw;
      padding:2rem;
      box-shadow:1px 1px 18px black;
      transition:all .5s;
      transform:translate(-30rem);
      opacity:0;
      visibility:hidden;
      z-index:10;
   }

   nav.show{
      transform:translate(0);
      opacity:1;
      visibility:visible;
   }

   nav li{
      margin:2rem 0;
   }

   nav a{
      padding:1rem;
      font-size:2rem;
      color:black;
   }

   main{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      height:100%;
      position:absolute;
      top:50%;
      transform:translate(0%, -50%);
      z-index:0;
   }

   main p{
      color:#d2d2d2;
      text-align:center;
      font-size:4rem;
   }

   main button{
      background:green;
      color:#fff;
      border-radius:2rem;
      padding:1.5rem 3rem;
      margin-top:2.5rem;
   }
`

export default SNavbar