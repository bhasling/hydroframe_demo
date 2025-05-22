import React from "react";
import { ParFlowCardType } from "../utils/types";
import { Link } from "react-router-dom";

const ParFlowCard: React.FC<{ item: ParFlowCardType }> = ({ item }) => {
    return (
        <>
            <div className="grid gap-2 text-center">
                {item.title && (
                    <div
                        className={`text-primary font-bold block md:hidden text-2xl mb-2`}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                )}
                <div className="m-auto rounded-full p-8 bg-bgf inline-block">
                    <Link to={item.link || ""} target="_blank">
                        <img className="w-28" src={item.image} alt="images" />
                    </Link>
                </div>
                <div className="w-full md:w-80 hidden md:block">
                    {item.title && (
                        <div
                            className={`text-primary font-bold text-2xl m-auto`}
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        ></div>
                    )}
                    <div
                        className={`mt-2`}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default ParFlowCard;
