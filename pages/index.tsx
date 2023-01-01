import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import Brusque from '../components/Brusque'
import Blog from '../components/Blog'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
     <Navbar/>
     <Booking/>
     <Services/>
     <Brusque/>
     <Blog/>
     <Faq/>
     <Footer/>
    </>
  )
}
