import React from "react";
import { BlogAuthor, Footer, Layout, Seo } from "../components";
import { graphql } from "gatsby";

import "./blog.template.scss";
import { AuthorService } from "../services/author.service";


interface BlogQueryResult {
    data: {
        markdownRemark: {
            html: string;
            frontmatter: {
                date: string;
                path: string;
                title: string;
                author: string;
            }
        }
    }
}

const BlogTemplate = ({ data }: BlogQueryResult) => {
    const { markdownRemark } = data;
    const author = AuthorService.getAuthor(markdownRemark.frontmatter.author);
    
    return (
        <Layout transparentHeader={false}>
            <Seo title={markdownRemark.frontmatter.title} lang="en"/>
            <div className="blog-template">
                <div className="blog-template-header">
                    <h1 className="text-center">{markdownRemark.frontmatter.title}</h1>
                    <div className="text-center post-meta">
                        <small className="with-separator">{markdownRemark.frontmatter.date}</small>
                        <small>{author.name}</small>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="content">
                        <div className="blog-template-post"
                            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                        />
                        <hr/>
                        <div className="blog-author">
                            <BlogAuthor author={author}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer social/>
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
                date(formatString: "DD.MM.YYYY")
                author
            }
        }
    }
`;

export default BlogTemplate;
