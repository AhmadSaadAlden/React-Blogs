import { NavLink } from 'react-router'
import './NavItem.css'


const NavItem = ({href , content}) => {
    return (
        <>
            <NavLink to={href}  className={({isActive}) => isActive && 'active'}>
                {content}
            </NavLink>
        </>
    )
}

export default NavItem
