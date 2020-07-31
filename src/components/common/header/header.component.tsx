import React, { useState } from "react";
import { Link } from "gatsby";

import { headerItems } from "../../../content/navbar.content";

import "./header.component.scss";

interface HeaderProps {
    transparent: boolean;
}


const HeaderComponent = (props: HeaderProps) => {
    const { transparent } = props;
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <header className={transparent ? "transparent-header header-component" : "header-component"}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link to="/" className="navbar-brand">Ping App</Link>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbar-links"
                    aria-controls="navbar-links" aria-expanded="false"
                    aria-label="Toggle navigation" onClick={toggle}>
                    <span className="navbar-toggler-icon"/>
                </button>
                
                <div className={`${isOpen ? "" : "collapse"} navbar-collapse`}>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {headerItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link to={item.url} className="nav-link">{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export const Header = HeaderComponent;
