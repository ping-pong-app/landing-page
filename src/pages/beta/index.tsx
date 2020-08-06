import React from "react";
import { Footer, Layout, Seo } from "../../components";

import "./beta.page.scss";
import { Link } from "gatsby";

const BetaPage = () => {
    return (
        <Layout transparentHeader={false}>
            <Seo title="Beta"/>
            <div className="beta-page">
                <div className="title-header">
                    <h1 className="text-center">Public BETA preview</h1>
                </div>
                <div className="wrapper">
                    <section className="content">
                        <p className="text-center">
                            Public BETA preview of application is currently not yet available for download.<br/>
                            Follow news at&#160;<Link to="/blog">our blog</Link>, to get notified of public beta release.
                        </p>
    
                        <div className="download-button">
                            <button disabled={true}>Download APK</button>
                        </div>
                    </section>
                </div>
            </div>
            <Footer social/>
        </Layout>
    );
}

export default BetaPage;
