import React from "react";
import { Footer, Layout, Seo } from "../../components";


const AboutPage = () => {
    return (
        <Layout transparentHeader={false}>
            <Seo title="About"/>
            <p>About</p>
            <Footer social/>
        </Layout>
    );
}

export default AboutPage;
