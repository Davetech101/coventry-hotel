import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import Brusque from '../components/Brusque'

export default function Home() {
  return (
    <>
     <Navbar/>
     <Booking/>
     <Services/>
     <Brusque/>
    </>
  )
}
