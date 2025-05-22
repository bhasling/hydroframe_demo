import React from "react";
import { OtherToolsandPartnersCardType } from "../utils/types";
import { Link } from "react-router-dom";

const OtherToolsandPartnersCard: React.FC<{
    item: OtherToolsandPartnersCardType;
}> = ({ item }) => {
    return (
        <>
            <div className="text-primary text-4xl font-bold mb-4">
                {item.title && (
                    <div
                        className={`text-primary font-bold lg:text-3xl mb-5`}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                )}
            </div>
            <div className="">
                <div className="w-full lg:w-5/12 float-left mb-5 lg:mr-12">
                    <img className="w-full" src={item.image} alt="images" />
                </div>

                <div className="text-justify">
                    <div
                        className={``}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>

                    {item.buttonTitle && (
                        <div className="text-center">
                            <Link
                                to={item.buttonLink || ""}
                                className="inline-block mt-5 font-medium items-center bg-primary hover:bg-secondaryHover transition-colors text-white px-4 lg:px-14 py-3 lg:py-3.5 uppercase"
                                type="submit"
                            >
                                {item.buttonTitle}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default OtherToolsandPartnersCard;
