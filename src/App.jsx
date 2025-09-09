import Area from "./components/Area/Area"
import Banner from "./components/Banner/Banner"
import Blog from "./components/Blog/Blog"
import Company from "./components/Company/Company"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Map from "./components/Map/Map"
import Navbar from "./components/Navbar/Navbar"
import Service from "./components/Service/Service"
import Slider from "./components/Slider/Slider"
import Sponsor from "./components/Sponsor/Sponsor"
import Supplier from "./components/Supplier/Supplier"


function App() {
  

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <Supplier></Supplier>
      <Slider></Slider>
      <Service></Service>
      <Company></Company>
      <Sponsor></Sponsor>
      <Blog></Blog>
      <Map></Map>
      <Area></Area>
      <Footer></Footer>
     
    </>
  )
}

export default App
