import React from "react";
import { menuData } from "../../constants/menu-data";
import MenuList from "./../MenuList/MenuList.jsx";


export class HamburgerMenu extends React.Component {

    state = {
        isSidebarOpen: false
    };

    handleMenuClick = () => {
        this.setState({isSidebarOpen: !this.state.isSidebarOpen})
    };

    render() {

        const { isSidebarOpen } = this.state;
        const show = isSidebarOpen ? "show" : "";

        return (
            <div className="container">
                <div className="menu-button" onClick={this.handleMenuClick}>
                    <i className="fas fa-bars" />
                </div>

                { menuData.length && (
                    <nav className={`nav ${show}`}>
                        <div className="close" onClick={this.handleMenuClick}>
                            <i className="fas fa-times" />
                        </div>

                        <MenuList />
                    </nav>
                ) }
            </div>
        )
    }
}