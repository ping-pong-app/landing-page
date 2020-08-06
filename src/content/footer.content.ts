export interface FooterLink {
    title: string;
    url?: string;
    external?: string;
}

export interface FooterGroup {
    title: string;
    links: FooterLink[];
}

export interface SocialLink {
    title: string;
    url: string;
    icon: string;
}

export const footerGroups: FooterGroup[] = [
    {
        title: "Products",
        links: [
            {
                title: "Pinger App"
            }
        ]
    },
    {
        title: "About",
        links: [
            {
                title: "About us",
                url: "/about"
            },
            {
                title: "Blog",
                url: "/blog"
            },
            {
                title: "Status",
                url: "/status"
            }
        ]
    }
];

export const socialLinks: SocialLink[] = [
    {
        title: "Github",
        url: "https://github.com/ping-pong-app",
        icon: "github"
    }
];

export const GITHUB_URL = "https://github.com/ping-pong-app";
