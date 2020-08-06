import React from "react";
import { BulletList, Footer, Layout, Seo } from "../components";

import "./index.page.scss";
import headerPulseImage from "../media/images/pulse_blue.png";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function getStockImages() {
    return useStaticQuery(graphql`
        query {
            stockPhotoFrustrated: file(relativePath: { eq: "stock_frustrated_call.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            stockPhotoSatisfied: file(relativePath: { eq: "stock_satisfied_phone.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
}

const IndexPage = () => {
    
    const images = getStockImages();
    
    return (
        <Layout transparentHeader={true}>
            <Seo title={"Home"}/>
            <div className="index-page">
                <div className="header-background">
                    <div className="header-content">
                        <img src={headerPulseImage} alt="Pinger Application Logo"/>
                        <h1>Pinger</h1>
                        
                        <div className="header-actions">
                            <Link to="/beta" className="btn btn-primary">Try Beta</Link>
                            <Link to="/about" className="btn btn-secondary">About</Link>
                        </div>
                    </div>
                </div>
                <div className="wrapper blue-bg" style={{ backgroundColor: "#014A7F", color: "white" }}>
                    <div className="content">
                        <div className="why-section left-section">
                            <div className="description">
                                <h2>Constantly arranging same meetups?</h2>
                                <p>Are you constantly arranging same meetups for same groups of people?</p>
                                <p>
                                    <strong>Enter Pinger!</strong> Mobile application designed to minimize
                                    amount of communication needed to schedule a meetup with a group of friends,
                                    colleagues or family members.
                                </p>
                            </div>
                            <div className="image-container">
                                <div className="image">
                                    <Img fluid={images.stockPhotoFrustrated.childImageSharp.fluid}/>
                                </div>
                            </div>
                        </div>
                        <div className="why-section right-section">
                            <div className="image-container">
                                <div className="image">
                                    <Img fluid={images.stockPhotoSatisfied.childImageSharp.fluid}/>
                                </div>
                            </div>
                            <div className="description">
                                <h2>How Pinger works?</h2>
                                
                                <BulletList items={[
                                    "Create group and invite friends",
                                    "Ping the group",
                                    "Each group member receives ping notification",
                                    "Respond to ping with either pong or reject ping",
                                    "Meet with friends"
                                ]}/>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <Footer social/>
        </Layout>
    );
};

export default IndexPage;
