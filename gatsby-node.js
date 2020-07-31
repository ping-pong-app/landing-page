/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");


exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve(`src/templates/blog.template.tsx`);
    
    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 100
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                            author
                        }
                    }
                }
            }
        }
    `);
    
    if (result.errors) {
        console.error(result.errors);
        reporter.panicOnBuild("Error while running GraphQL query!");
        return;
    }
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: blogTemplate,
            context: {},
        });
    });
};
