import styled from 'styled-components'


const SNavbar = styled.main`
background-image:linear-gradient(to left, rgba(0,0,0, .6), rgba(0,0,0, .6)), url(/assets/Hero.jpg);
background-size:cover;
background-position:center;
background-repeat:no-repeat;
padding:2rem;
min-height:90vh;

   .head{
      display:flex;
      justify-content:space-between;
      align-items:center;
   }

   .head a{
      color:#fff;
      font-size:2rem;
      font-family: 'Poppins', sans-serif;
   }

   .close{
      color:#fff;

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
      transform:translate(-30rem, -30rem);
      opacity:0;
      visibility:hidden;
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

   .tel{
      font-size:2rem;
   }
`

export default SNavbar