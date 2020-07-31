import React from "react";
import { graphql, Link } from "gatsby";
import { Layout, Seo } from "../../components";


interface BlogItem {
    excerpt: string;
    frontmatter: {
        date: string;
        path: string;
        title: string;
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
            <div>
                <div>
                    <h1>Blog</h1>
                </div>
                <div>
                    {nodes.map((post, index) => (
                        <div key={index}>
                            <h3>{post.frontmatter.title}</h3>
                            <small>{post.frontmatter.date}</small>
                            <p>{post.excerpt}</p>
                            <div>
                                <Link to={post.frontmatter.path}>Read</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const blogPageQuery = graphql`
    query blogPageQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                frontmatter {
                    date
                    title
                    path
                }
                excerpt(pruneLength: 800)
            }
        }
    }
`;

export default BlogPage;
