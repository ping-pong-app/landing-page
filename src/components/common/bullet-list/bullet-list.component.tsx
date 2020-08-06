import React from "react";
import "./bullet-list.component.scss";

interface BulletListProps {
    items: string[];
}

export const BulletList = (props: BulletListProps) => {
    const { items = [] } = props;
    return (
        <div className="bullet-list-component">
            {items.map((item, index) => (
                <div className="bullet-list-item" key={index}>
                    <span className="bullet"/>
                    <span className="bullet-text">{item}</span>
                </div>
            ))}
        </div>
    );
};
