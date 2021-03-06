import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../../../media/favicon.ico";

export interface SeoProps {
    description?: string;
    lang?: string;
    meta?: any[];
    title: string;
}

const SeoComponent = (props: SeoProps) => {
    const { lang, meta, title, description } = props;
    let fullMeta = [
        {
            name: "description",
            content: description
        }
    ];
    if (meta) {
        fullMeta = fullMeta.concat(meta);
    }
    
    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={"%s | Pinger"}
            meta={fullMeta}
        >
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            <link rel="icon" href={favicon} type="image/x-icon" />
        </Helmet>
    );
};

SeoComponent.defaultProps = {
    lang: "en",
    meta: [],
    description: ""
};

export const Seo = SeoComponent;
