import { useNavigate } from 'react-router'
import './NavBar.css'
import NavItem from './NavItem'
import { FaBars } from 'react-icons/fa'
const NavBar = ({logo , navItems , btn}) => {

    const Navigate = useNavigate()
    const goToSignInPage = () =>{
        console.log("test")
        Navigate("/SignIn")
    }

    const hreflogo = () =>{
        Navigate("/")
    }
    return (
    <>
        <nav>
            <div className="navBar">
                <h1 className='logo' onClick={()=>hreflogo()}>{logo}</h1>
                <div className="items">
                    <ul>
                        {navItems?.map((item , index) =>{
                            return(
                                <li key={index}>
                                    <NavItem 
                                        href={item.href}
                                        content={item.content}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="sidebar">
                <button onClick={()=>goToSignInPage()}>{btn}</button>
                <i><FaBars /></i>
                
            </div>
        </nav>
    </>
    )
}

export default NavBar
