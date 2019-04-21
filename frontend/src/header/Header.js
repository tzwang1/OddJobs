import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ul className="menu_items">
                    <li><HeaderMenu menu_name={"Home"}/></li>
                    <li><HeaderMenu menu_name={"Browse"}/></li>
                    <li><HeaderMenu menu_name={"Post"}/></li>
                    <li><HeaderMenu menu_name={"Login"}/></li>
                    <li><HeaderMenu menu_name={"Signup"}/></li>
                </ul>
            </div>
        );
    }
}

export default Header;