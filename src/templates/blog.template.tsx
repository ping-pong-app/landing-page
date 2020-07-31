import React from "react";
import { Layout, Seo } from "../components";
import { graphql } from "gatsby";


interface BlogQueryResult {
    data: {
        markdownRemark: {
            html: string;
            frontmatter: {
                date: string;
                path: string;
                title: string;
            }
        }
    }
}

const BlogTemplate = ({ data }: BlogQueryResult) => {
    const { markdownRemark } = data;
    
    return (
        <Layout transparentHeader={false}>
            <Seo title={markdownRemark.frontmatter.title} lang="en"/>
            <div>
                <div className="blog-template-content">
                    <div className="blog-template-header">
                        <h1>{markdownRemark.frontmatter.title}</h1>
                        <small>{markdownRemark.frontmatter.date}</small>
                    </div>
                    <div className="blog-template-post"
                        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                    />
                </div>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html,
            frontmatter {
                path
                title
                date
            }
        }
    }
`;

export default BlogTemplate;
