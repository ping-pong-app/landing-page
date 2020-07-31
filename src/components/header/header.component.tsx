import React, { useState } from "react";

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
        <header>
            Title
        </header>
    );
};

export const Header = HeaderComponent;
