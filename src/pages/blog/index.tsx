import React from "react";
import { graphql, Link } from "gatsby";
import { BlogExcerpt, Footer, Layout, Seo } from "../../components";

import "./blog.page.scss";
import authors from "../../../blog/authors.json";
import { Author } from "../../config/blog-author.config";


interface BlogItem {
    excerpt: string;
    frontmatter: {
        date: string;
        path: string;
        title: string;
        author: string;
    }
}

interface BlogQueryResult {
    data: {
        allMarkdownRemark: {
            nodes: BlogItem[];
        }
    }
}

const BlogPage = ({ data }: BlogQueryResult) => {
    const { nodes } = data.allMarkdownRemark;
    return (
        <Layout transparentHeader={false}>
            <Seo title="Blog"/>
            <div className="blog-page">
                <div className="title-header">
                    <h1 className="text-center">Blog</h1>
                </div>
                <div className="wrapper">
                    <section className="content">
                        {nodes.map((post, index) => (
                            <BlogExcerpt key={index}
                                title={post.frontmatter.title}
                                date={post.frontmatter.date}
                                excerpt={post.excerpt}
                                authorId={post.frontmatter.author}
                                path={post.frontmatter.path}/>
                        ))}
                    </section>
                </div>
            </div>
            <Footer social/>
        </Layout>
    );
};

export const blogPageQuery = graphql`
    query blogPageQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "DD.MM.YYYY")
                    title
                    path
                    author
                }
                excerpt(pruneLength: 600)
            }
        }
    }
`;

export default BlogPage;
