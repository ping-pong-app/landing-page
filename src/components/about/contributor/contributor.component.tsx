import React from "react";
import { Contributor as ContributorModel } from "../../../config/about.config";

import "./contributor.component.scss";
import placeholderImage from "../../../media/images/undef-contributor-image.png";

interface ContributorProps {
    contributor: ContributorModel;
}


export const Contributor = (props: ContributorProps) => {
    const { contributor } = props;
    return (
        <div className="contributor-component">
            <div className="contributor-image">
                <img src={contributor.image ? contributor.image : placeholderImage}
                    alt={contributor.name}/>
            </div>
            <div className="contributor-name">
                {contributor.name}
            </div>
            <div className="contributor-title">
                {contributor.title}
            </div>
        </div>
    );
};
