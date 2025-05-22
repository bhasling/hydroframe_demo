import React from "react";
import { HeroSectionType } from "../utils/types";

const HeroSection: React.FC<{ item: HeroSectionType }> = ({ item }) => {
    return (
        <div
            className="bg-contain lg:bg-cover h-full px-4 sm:px-8 lg:px-36 pt-4 pb-10 lg:pt-10 lg:pb-40  sm:min-h-60 lg:min-h-96 flex max-w-full"
            style={{
                backgroundImage:
                    'url("' +
                    (item.image || "./images/three-line-swoosh.svg") +
                    '")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom",
            }}
        >
            <div className="flex gap-x-10 z-10  max-w-5xl my-auto">
                <div className=" text-primary">
                    <div className=" py-2 lg:py-5 px-5 lg:px-0">
                        <h1 className="text-3xl lg:text-5xl font-bold break-words w-full !sticky !top-20">
                            {item.title}
                        </h1>
                        {item.description && (
                            <p className="mt-6 max-w-[400px]">
                                {item.description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
