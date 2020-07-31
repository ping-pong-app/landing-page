import React, { ReactNode } from "react"
import { Footer, Header } from ".."


export interface LayoutProps {
    children: ReactNode;
    transparentHeader: boolean;
}

const LayoutComponent = (props: LayoutProps) => {
    
    const { children, transparentHeader } = props
    
    return (
        <>
            <Header transparent={transparentHeader}/>
            <div>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    );
    
}

LayoutComponent.defaultProps = {
    transparentHeader: true
}

export const Layout = LayoutComponent;
