import Navbar from "./Layout/Navbar"
import Header from "./Layout/Header"
import About from "./component/About"
import Services from "./component/Services"
import Portfolio from "./component/Portfolio"
import Achievements from "./component/Achievements"
import Contact from "./component/Contact"
import Footer from "./Layout/Footer"
export default function Home(){
    return(
        <>
        <Navbar />
        <Header />
        <About />
        <Services/>
        <Portfolio />
        <Achievements />
        
        <Contact />
        <Footer />
        </>
    )
};