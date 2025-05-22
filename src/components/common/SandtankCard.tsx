import React from "react";
import { SandtankCardType } from "../utils/types";
import { Link } from "react-router-dom";

const SandtankCard: React.FC<{ item: SandtankCardType }> = ({ item }) => {
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
                    <img className="w-full" src={item.image} alt="images" />
                </div>
                <div className="text-justify">
                    {item.title && (
                        <div
                            className={`text-primary font-bold hidden lg:block lg:text-3xl mb-5 text-left`}
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        ></div>
                    )}
                    <div
                        className={`mb-2`}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>

                    <div className="text-left">
                        {item.buttonTitle && (
                            <Link
                                to={item.buttonLink || ""}
                                className="inline-block font-medium items-center bg-primary hover:bg-secondaryHover transition-colors text-white px-10 py-3.5 uppercase mt-5"
                                type="submit"
                            >
                                {item.buttonTitle}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SandtankCard;
