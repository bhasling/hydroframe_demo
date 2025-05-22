import React from "react";
import { HomePageCardType } from "../utils/types";
import { Link } from "react-router-dom";

const HomePageCard: React.FC<{ item: HomePageCardType; index: number }> = ({
    item,
    index,
}) => {
    return (
        <div className={`grid grid-cols-1`}>
            <div className={`col-span-1`}>
                <div>
                    <Link
                        to={item.url}
                        aria-describedby={`home-page-card-${index}`}
                    >
                        <img
                            role="presentation"
                            alt=""
                            className={`w-full cursor-pointer `}
                            src={`${import.meta.env.BASE_URL}/images/lending/` + item.image}
                        />
                        <div className="text-center mt-2">
                            <div className={`font-bold text-2xl mb-1`}>
                                {item.title}
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="text-center mt-2">
                    <div className="mb-1 text-primary italic">{item.group}</div>
                    <div id={`home-page-card-${index}`} className="font-base">
                        {item.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageCard;
