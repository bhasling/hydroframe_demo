import CommonCard from "components/common/CommonCard";
import HeroSection from "components/common/HeroSection";
import { CommonCardType } from "components/utils/types";
import { useState } from "react";

function SandtankMl() {
    const [community] = useState([
        {
            title: "Community education and engagement is a priority",
            image: "./images/sandtankMl/community-hydroframe.jpg",
            description: `<div>Our project team develops free educational tools and resources to support a variety of users who want to learn and teach about hydrology, modeling and more! Please visit all of the Educational Tools pages to discover our collection of resources.</div>
                <div class="my-5">
                    Sandtank ML builds upon an already existing educational tool
                    created by members of our research team - the ParFlow Sandtank,
                    an interactive computer simulation of a physical aquifer model.
                    Using the output of the ParFlow Sandtank as the prediction goal,
                    Sandtank ML allows users to run various machine learning (ML)
                    models and manipulate training sets and other components to
                    explore how particular decisions impact model accuracy. The goal
                    of the application is to help users gain an understanding of
                    basic ML approaches and processes, as well as understanding the
                    way ML can be leveraged in hydrology.
                </div>`,
        },
    ]);

    return (
        <div>
            <HeroSection
                item={{
                    title: "Sandtank ML",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
                }}
            />
            <div className="px-4 sm:px-8 lg:px-36 grid gap-10 lg:gap-12 py-10">
                <div className="grid gap-4">
                    <div className="">
                        <div className="">
                            <div className="m-auto gap-10 lg:gap-12 grid">
                                {community.map(
                                    (item: CommonCardType, ind: number) => (
                                        <CommonCard
                                            item={item}
                                            key={ind + "sml"}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex  justify-center">
                        <a
                            className="inline-block px-8 py-4 lg:px-8 lg:py-4 bg-primary text-white font-medium uppercase transition-colors hover:bg-secondaryHover"
                            href="https://sandtank-ml.hydroframe.org/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            EXPLORE SANDTANK ML
                        </a>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="">
                        <div className=" text-primary text-2xl sm:text-4xl font-bold pb-5">
                            Citations
                        </div>
                        <ul className="list-disc list-outside pl-5 gap-y-5 grid mb-5">
                            <li className="">
                                Gallagher, LK, JM Williams, D Lazzeri, C
                                Chennault, S Jourdain, P O’Leary, LE Condon and
                                RM Maxwell (2021). Sandtank-ML: An Educational
                                Tool at the Interface of Hydrology and Machine
                                Learning. Water. 13, 3328.{" "}
                                <a
                                    className="text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://doi.org/10.3390/w13233328"
                                >
                                    https://doi.org/10.3390/w13233328
                                </a>
                                .
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SandtankMl;
