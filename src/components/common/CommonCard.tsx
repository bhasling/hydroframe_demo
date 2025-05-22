import React from "react";
import { CommonCardType } from "../utils/types";

const CommonCard: React.FC<{ item: CommonCardType }> = ({ item }) => {
    return (
        <>
            <div className="">
                {item.title && (
                    <div
                        className={`text-primary font-bold block lg:hidden text-2xl mb-5`}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                )}
                <div className="w-full lg:w-[50%] float-left mb-5 lg:mr-12">
                    <img className="w-full " src={item.image} alt="images" />
                </div>
                <div className="text-justify">
                    {item.title && (
                        <div
                            className={`text-primary font-bold hidden lg:block text-3xl mb-5`}
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        ></div>
                    )}
                    <div
                        className={``}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default CommonCard;
