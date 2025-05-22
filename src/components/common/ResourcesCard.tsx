import React from "react";
import { ResourcesCardType } from "../utils/types";
import { Link } from "react-router-dom";

const ResourcesCard: React.FC<{ item: ResourcesCardType }> = ({ item }) => {
    return (
        <>
            <div className="mt-5   pb-5 grid gap-y-">
                <div className="col-span-2">
                    <Link to={item.link || ""} target="_blank">
                        <img className="w-full" src={item.image} alt="images" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ResourcesCard;
