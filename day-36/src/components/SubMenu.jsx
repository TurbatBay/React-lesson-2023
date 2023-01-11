import React from "react"
import {Nav, NavDropdown, NavLink} from "react-bootstrap"

const SubMenu = (props) => {
    const subMenu = 
    props.children.length > 0 ?(
        <NavDropdown title={props.title} id="basic-nav-dropdown">

        </NavDropdown>
    ) : (
        <NavLink>{props.children}</NavLink>
    )
    return(
        <div>
            <Nav className="me-auto">{subMenu}</Nav>
        </div>
    );
};

export default SubMenu








/* 
import React from "react"
import SubMenu from "./SubMenu"
import {Navbar} from "react-bootstrap"
import menus from '../data/menus'

 function MainMenu () {

    const subMenus = menus.map(menu => {
        console.log(menu)
        return(
            <SubMenu title={menu.title} position={menu.position} />
        )
    })

    return (
        <div>
            
            <div>Here is main menu</div>
            <Navbar bg="light" expand="lg">
                {subMenus}
            </Navbar>
           
        </div>
    )
}

export default MainMenu

*/