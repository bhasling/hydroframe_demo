import React from "react";
import { AboutCardType } from "../utils/types";

const AboutCard: React.FC<{ item: AboutCardType }> = ({ item }) => {
    return (
        <>
            <div className={``}>
                {item.title && (
                    <div
                        className={`text-primary font-bold block xl:hidden text-2xl mb-5`}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                )}
                <div
                    className={`w-full lg:w-[48%] mb-5 ${item.imageLeft ? "float-right lg:ml-12" : "float-left lg:mr-12"}`}
                >
                    <img className="w-full" src={item.image} alt="images" />
                </div>
                <div className="text-justify">
                    {item.title && (
                        <div
                            className={`text-primary font-bold hidden xl:block text-3xl mb-5`}
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

export default AboutCard;
