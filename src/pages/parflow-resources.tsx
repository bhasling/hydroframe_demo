import HeroSection from "components/common/HeroSection";
import ParFlowCard from "components/common/ParFlowCard";
import ParflowConusCard from "components/common/ParflowConusCard";
import { ParFlowCardType, ParflowConusCardType } from "components/utils/types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ParflowResources() {
    const [cardList1,] = useState([
        {
            title: "About ParFlow",
            image: "./images/parflow-resources/parflow-hydroframe.png",
            caption: `<i>Conceptual illustration of the ParFlow-CLM model (Figure from <a href="https://www.science.org/doi/10.1126/science.aaf7891" class="text-primary" target="_blank">Maxwell and Condon (2016)</a> supplementary information)</i>`,
            description: `<div>ParFlow is a numerical model that simulates the hydrologic cycle from the bedrock to the top of the plant canopy. It integrates three-dimensional groundwater flow with overland flow and plant processes using physically-based equations to rigorously simulate fluxes of water and energy in complex real-world systems. You can <a class="text-primary font-bold" rel="noreferrer" target="_blank" href="https://parflow.org/"> learn more about the ParFlow model and how it works here</a>.</div>
                <div class="mt-5">ParFlow is a computationally advanced model that can run on laptops and supercomputers and has been used in hundreds of studies evaluating hydrologic processes from the hillslope to the continental scale.</div>`,
        },
    ]);

    const [toolsList,] = useState<ParFlowCardType[]>([
        {
            title: "PF Tools",
            image: "/images/parflow-resources/Screwdriver.png",
            description:
                "A set of tools for pre and post processing ParFlow model results",
            link: "https://parflow.readthedocs.io/en/latest/python/getting_started.html",
        },
        {
            title: "SubsetTools",
            image: "/images/parflow-resources/Gears.png",
            description:
                "Tools for building watershed models from the National Framework",
            link: "https://hydroframesubsettools.readthedocs.io/en/latest/",
        },
    ]);
    const [shortCourses,] = useState<ParFlowCardType[]>([
        {
            title: "Basic TCL Based",
            image: "/images/parflow-resources/Notebook.png",
            description: "",
            link: "https://github.com/hydroframe/ParFlow_Short_Course",
        },
        {
            title: "Advanced TCL Based",
            image: "/images/parflow-resources/Notebook.png",
            description: "",
            link: "https://github.com/hydroframe/ParFlow_Advanced_ShortCourse",
        },
        {
            title: "Python Based (2022)",
            image: "/images/parflow-resources/Notebook.png",
            description: "",
            link: "https://github.com/hydroframe/parflow_python_shortcourse",
        },
        {
            title: "Python Based (2024)",
            image: "/images/parflow-resources/Notebook.png",
            description: "",
            link: "https://github.com/hydroframe/parflow_short_course_updated",
        },
    ]);
    return (
        <div className="w-full">
            <HeroSection
                item={{
                    title: "ParFlow Resources",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
                }}
            />
            <div className="px-4 sm:px-8 lg:px-36 grid gap-8 lg:gap-14 py-10">
                <div>
                    <div className="">
                        <div className="m-auto gap-10 lg:gap-12 grid">
                            {cardList1.map(
                                (item: ParflowConusCardType, ind: number) => (
                                    <ParflowConusCard
                                        item={item}
                                        key={ind + "pr"}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className="mt-5 gap-16 md:grid-cols-1">
                        This page provides a centralized set of tools for
                        interacting with and learning more about ParFlow.
                        ParFlow is an open source model. The source code and and
                        user manual (linked below) provide the most complete
                        documentation for the code. In addition we provide links
                        here for tools that can make it easier to build and
                        evaluate ParFlow models as well as short course teaching
                        materials.
                    </div>
                    <div className="flex flex-col md:flex-row md:flex place-content-center gap-5 lg:gap-x-10 mt-5">
                        <div className="text-center">
                            <Link
                                to={"https://github.com/parflow/parflow"}
                                className="inline-block font-medium px-8 py-4 lg:px-4 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover"
                                type="submit"
                                target="_blank"
                            >
                                SOURCE CODE
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link
                                to={
                                    "https://parflow.readthedocs.io/en/latest/index.html"
                                }
                                className="inline-block font-medium px-8 py-4 lg:px-16 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover"
                                type="submit"
                                target="_blank"
                            >
                                USER MANUAL
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="text-primary text-2xl sm:text-4xl font-bold mb-5">
                        Tools for interacting with ParFlow
                    </div>

                    <div className="flex flex-col gap-10 lg:gap-20 md:flex-row justify-center">
                        {toolsList.map((item, ind) => {
                            return (
                                <ParFlowCard item={item} key={ind + "tip"} />
                            );
                        })}
                    </div>
                </div>

                <div className="grid gap-y-4">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Short Courses
                    </div>
                    <div className="m-auto pb-5 gap-16">
                        We teach ParFlow short courses for new users. To be
                        informed on upcoming short courses please join the
                        ParFlow mailing list. In the meantime you can get
                        started with the resources from previous short courses:
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 lg:gap-10">
                        {shortCourses.map((item, ind) => {
                            return <ParFlowCard item={item} key={ind} />;
                        })}
                    </div>
                </div>

                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold mb-5">
                        Mailing List
                    </div>
                    <div className="m-auto gap-16 ">
                        Become a part of our mailing list to stay up to date on
                        the most recent version of ParFlow, and to receive
                        regular updates on resources!
                        <div className="font-medium">
                            Send an email to&nbsp;
                            <a
                                href="mailto:parflow@googlegroups.com"
                                className="text-primary"
                            >
                                parflow@googlegroups.com
                            </a>
                            &nbsp; with the subject “Subscribe” to join!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParflowResources;
