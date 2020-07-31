import React, { ReactNode } from "react";
import { Footer, Header } from "../../index";


export interface LayoutProps {
    children: ReactNode;
    transparentHeader: boolean;
}

const LayoutComponent = (props: LayoutProps) => {
    
    const { children, transparentHeader } = props;
    
    return (
        <>
            <Header transparent={transparentHeader}/>
            <div className="layout-component">
                <main className="layout-main">{children}</main>
            </div>
        </>
    );
    
};

LayoutComponent.defaultProps = {
    transparentHeader: true
};

export const Layout = LayoutComponent;
