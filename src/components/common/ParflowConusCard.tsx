import React from "react";
import { ParflowConusCardType } from "../utils/types";

const ParflowConusCard: React.FC<{ item: ParflowConusCardType }> = ({
    item,
}) => {
    return (
        <>
            <div>
                {item.title && (
                    <div
                        className={`text-primary font-bold block lg:hidden text-2xl mb-5`}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                )}
                <div className="w-full lg:w-[50%] float-left mb-5 lg:mr-12">
                    <div className="shadow-lg">
                        <img className="w-full" src={item.image} alt="images" />
                    </div>
                    {item.caption && (
                        <div
                            className={"pt-2 text-sm"}
                            dangerouslySetInnerHTML={{ __html: item.caption }}
                        ></div>
                    )}
                </div>
                <div className="text-justify">
                    {item.title && (
                        <div
                            className={`text-primary font-bold hidden lg:block text-3xl mb-5`}
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        ></div>
                    )}
                    <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default ParflowConusCard;
