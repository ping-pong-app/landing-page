export interface HeaderItem {
    title: string;
    url: string;
    external?: boolean;
}

export const headerItems: HeaderItem[] = [
    {
        title: "Beta",
        url: "/beta"
    },
    {
        title: "Blog",
        url: "/blog"
    },
    {
        title: "Status",
        url: "/status"
    },
    {
        title: "About",
        url: "/about"
    }
];
