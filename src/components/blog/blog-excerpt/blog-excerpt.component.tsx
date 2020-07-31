import React from "react";
import { Link } from "gatsby";
import { AuthorService } from "../../../services/author.service";

import "./blog-excerpt.component.scss";

interface BlogExcerptProps {
    title: string;
    date: string;
    excerpt: string;
    authorId: string;
    path: string;
}

export const BlogExcerpt = (props: BlogExcerptProps) => {
    const {authorId, date, excerpt, path, title} = props;
    const author = AuthorService.getAuthor(authorId);
    
    return (
        <article className="blog-excerpt-component">
            <h3>{title}</h3>
            <small className="with-separator">{date}</small>
            <small>{author.name}</small>
            <p>
                {excerpt}
                <span className="read-more-link">
                    <Link to={path}>
                        Read more
                        &rarr;
                    </Link>
                </span>
            </p>
        </article>
    );
};
