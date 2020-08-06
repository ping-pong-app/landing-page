import React from "react";
import { footerGroups, FooterLink } from "../../../content/footer.content";
import { Link } from "gatsby";

import "./footer.component.scss";
import { Social } from "../..";

interface FooterProps {
    social?: boolean;
}

const FooterComponent = () => {
    
    const renderLink = (link: FooterLink) => {
        if (!link.url || link.url === "#") {
            return (<span>{link.title}</span>);
        } else if (link.external) {
            return (<a href={link.url} title={link.title} target="_blank" rel="noreferrer noopener">{link.title}</a>)
        }
        return (<Link to={link.url} title={link.title}>{link.title}</Link>);
    }
    
    return (
        <div className="footer-component">
            <footer>
                <Social/>
                <div className="footer-groups">
                    {footerGroups.map((group, index) => (
                        <div key={index} className="footer-group">
                            <div className="group-title">
                                <span>{group.title}</span>
                            </div>
                            <div className="group-links">
                                {group.links.map((link, linkIndex) => (
                                    <div className="group-link" key={linkIndex}>
                                        {renderLink(link)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="trademark">
                    Pinger © {new Date().getFullYear()}
                </div>
            </footer>
        </div>
    )
}

FooterComponent.defaultProps = {
    social: false
}

export const Footer = FooterComponent;
