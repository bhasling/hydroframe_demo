import { useState } from "react";
import { AboutCardType } from "components/utils/types";
import HeroSection from "components/common/HeroSection";
import AboutCard from "components/common/AboutCard";

function AboutUs() {
    const [cardList,] = useState([
        {
            imageLeft: false,
            title: "What is HydroFrame?",
            image: "./images/about-us/what-is-hydroframe.png",
            description: `<div>HydroFrame is a platform to facilitate easy interaction with large computationally intensive hydrologic models and massive simulated outputs.</div>
                <div class="mt-5">Our tools enable users to subset model inputs and outputs for any watershed in the US and to develop their own models.</div>
                <div class="mt-5">We also develop free interactive educational tools and lesson plans to teach students of all ages about groundwater and the hydrologic cycle.</div>`,
        },
        {
            imageLeft: true,
            title: "Why HydroFrame?",
            image: `${import.meta.env.BASE_URL}/images/about-us/seeks-hydroframe.png`,
            description: `<div>Hydrologic simulations have advanced greatly in
                recent years. We now have models spanning the entire
                US that capture groundwater, surface water and plant
                processes at high spatial resolution. Despite these
                developments the community of people who use and
                develop national models remains small due to
                multiple barriers to entry:</div>
                <ul class="list-disc list-inside">
                    <li class="mt-5">
                        Developing hydrologic input datasets and
                        validating the behavior of national models
                        is challenging and our current platforms
                        have taken years to develop.
                    </li>
                    <li class="mt-5">
                        The computer models that we use can be
                        difficult for new users to pick up without
                        some training and computer science
                        background.
                    </li>
                    <li class="mt-5">
                        National simulations rely on high
                        performance computing and generate very
                        large outputs that can be difficult to
                        manage.
                    </li>
                </ul>
                <div class="mt-5">HydroFrame seeks to remove these barriers. We build tools to make existing national models community resources that anyone can interact with.</div>`,
        },
    ]);
    return (
        <div>
            <HeroSection
                item={{
                    title: "About us",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
                }}
            />

            <div className="px-4 sm:px-8 lg:px-36 grid gap-10 py-5 lg:py-10">
                <div>
                    <div className="">
                        <div className="m-auto gap-10 lg:gap-12 grid">
                            {cardList.map((item: AboutCardType) => (
                                <AboutCard item={item} key={item.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
