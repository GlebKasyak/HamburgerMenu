import React from "react";
import {menuData} from "../../constants/menu-data";

const MenuList = () => (
    <ul className="menu-items">
        { menuData.map((item, i) => (
            <li key={i} className="menu-list">
                <a href={item.url} className="menu-link">{item.label}</a>
            </li>
        )) }
    </ul>
);


export default MenuList;