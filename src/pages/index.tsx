import React from "react"
import { Layout, Seo } from "../components";

const IndexPage = () => {
    return (
        <Layout>
            <Seo title={"Home"}/>
            <div>
                <h1>First page!</h1>
            </div>
        </Layout>
    );
}

export default IndexPage;
