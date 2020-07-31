import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { socialLinks } from "../../../content/footer.content";

import "./social.component.scss";

export const Social = () => {
    return (
        <div className="social-component">
            {socialLinks.map((link, index) => (
                <div key={index} className="social-link">
                    <a href={link.url} target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={["fab", link.icon] as IconProp} title={link.title}/>
                    </a>
                </div>
            ))}
        </div>
    );
};
