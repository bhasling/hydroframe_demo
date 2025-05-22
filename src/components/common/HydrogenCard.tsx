import React from "react";
import { HydrogenCardType } from "../utils/types";

const HydrogenCard: React.FC<{ item: HydrogenCardType }> = ({ item }) => {
    return (
        <>
            <div className="mt-2 flex flex-col lg:flex-row gap-5 lg:gap-12">
                {item.title && (
                    <div
                        className={`text-primary font-bold block lg:hidden text-2xl`}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                )}
                <div className="col-span-2">
                    <img
                        className="w-full lg:ml-[-50px] lg:mr-[350px]"
                        src={item.image}
                        alt="images"
                    />
                </div>
                <div className="col-span-2 lg:ml-[-120px]">
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

                    {item.buttonTitle && (
                        <div className="flex w-full lg:w-auto">
                            <a
                                href={item.buttonLink || ""}
                                className="inline-block font-medium m-auto lg:ml-0 mt-5 self-center bg-primary hover:bg-secondaryHover transition-colors text-white px-14 py-5 uppercase"
                                rel="noreferrer"
                                target="_blank"
                            >
                                {item.buttonTitle}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default HydrogenCard;
