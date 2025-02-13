import {Route, Routes } from 'react-router'
import './App.css'
import NavBar from './assets/components/Sections/NavBar/NavBar'
import Home from './assets/pages/Home'
import Footer from './assets/components/Sections/Footer/Footer'
import About from './assets/pages/About'
import SignIn from './assets/pages/SignIn'
import SignUp from './assets/pages/SignUp'

function App() {

  const navItem = [
    {
      href : "/",
      content : "Home"
    },
    {
      href : "/about",
      content : "About"
    }
  ]

  return (
    <>
      <NavBar logo = "Your Name" navItems = {navItem} btn = "Sign in" />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/about' element = {<About />} />
          <Route path='/SignIn' element = {<SignIn />} />
          <Route path='/SignUp' element = {<SignUp />} />
        </Routes>
      <Footer footer = "© 2025 Blogs , vica web solutions" />
    </> 
  )
}

export default App
