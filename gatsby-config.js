module.exports = {
    siteMetadata: {
        title: `Pinger`,
        description: `Landing page for Pinger project`,
        author: `mJamsek`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog-posts",
                path: `${__dirname}/blog/posts`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog-images",
                path: `${__dirname}/blog/media`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/media/images`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 750
                        }
                    }
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Pinger Landing Page`,
                short_name: `landing-page`,
                start_url: `/`,
                background_color: `#014A7F`,
                theme_color: `#014A7F`,
                display: `minimal-ui`,
                // icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-typescript`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
}
