import React from "react";
import { Footer, Layout, Seo } from "../components";

import "./index.page.scss";
import headerPulseImage from "../media/images/pulse_blue.png";
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <Layout transparentHeader={true}>
            <Seo title={"Home"}/>
            <div className="index-page">
                <div className="header-background">
                    <div className="header-content">
                        <img src={headerPulseImage} alt="Ping Application Logo"/>
                        <h1>Ping App</h1>
                        
                        <div className="header-actions">
                            <Link to="/beta" className="btn btn-primary">Try Beta</Link>
                            <Link to="/about" className="btn btn-secondary">About</Link>
                        </div>
                    </div>
                </div>
                <div className="content">
                
                </div>
            </div>
            <Footer social/>
        </Layout>
    );
};

export default IndexPage;
