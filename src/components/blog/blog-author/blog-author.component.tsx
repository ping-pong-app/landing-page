import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Author } from "../../../config/blog-author.config";

import "./blog-author.component.scss";
import placeholderImage from "../../../media/images/undef-contributor-image.png";


interface BlogAuthorProps {
    author: Author;
}

export const BlogAuthor = (props: BlogAuthorProps) => {
    const { author } = props;
    return (
        <div className="blog-author-component">
            <div className="author-image">
                <img src={author.avatar || placeholderImage} alt={author.name}/>
            </div>
            <div className="author-meta">
                <div className="author-name">{author.name}</div>
                <div className="author-links">
                    <a href={"https://github.com/" + author.github} target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={["fab", "github"]} size={"2x"}/>
                    </a>
                </div>
            </div>
        </div>
    );
};
