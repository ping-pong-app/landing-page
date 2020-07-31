import React from "react";
import { Footer, Layout, Seo } from "../../components";


const BetaPage = () => {
    return (
        <Layout transparentHeader={false}>
            <Seo title="Beta"/>
            <p>Beta</p>
            <Footer social/>
        </Layout>
    );
}

export default BetaPage;
