import React from "react";
import { OtherToolsEducationalCardType } from "../utils/types";

const OtherToolsEducationalCard: React.FC<{
    item: OtherToolsEducationalCardType;
}> = ({ item }) => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12">
                {item.title && (
                    <div
                        className={`col-span-1 text-primary font-bold block lg:hidden text-xl`}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                )}
                <div className="col-span-1 md:col-span-5">
                    <img className="w-full" src={item.image} alt="images" />
                </div>
                <div className="col-span-1 md:col-span-7">
                    {item.title && (
                        <div
                            className={`text-primary font-bold hidden lg:block lg:text-3xl mb-5 text-left`}
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        ></div>
                    )}
                    <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>

                    <div className="text-left">
                        {item.buttonTitle && item.buttonLink && (
                            <a
                                href={item.buttonLink}
                                className="inline-block font-medium items-center bg-primary hover:bg-secondaryHover transition-colors text-white px-10 py-3.5 uppercase mt-5"
                                rel="noreferrer"
                                target="_blank"
                            >
                                {item.buttonTitle}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtherToolsEducationalCard;
