import HeroSection from "components/common/HeroSection";
import { ICategoryList, ParFlowCardType } from "components/utils/types";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "components/common/CarouselCard";
import ParFlowCard from "components/common/ParFlowCard";

function SubsettingPythonTools() {
    const [categoryList, setCategoryList] = useState<ICategoryList[]>([]);
    const fetchCategory = () => {
        fetch("./json/website-notebooks.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCategoryList(data);
            })
            .catch((e: Error) => {
                console.log(e.message);
            });
    };
    useEffect(() => {
        fetchCategory();
    }, []);
    const [shortCourses,] = useState<ParFlowCardType[]>([
        {
            title: "Subsetting Using HydroFrame and HydroData",
            image: "/images/parflow-resources/Notebook.png",
            description: "",
            link: "https://github.com/hydroframe/Subsetting_ShortCourse",
        },
    ]);

    return (
        <div>
            <HeroSection
                item={{
                    title: "SubsetTools",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
                }}
            />
            <div className="px-4 sm:px-8 lg:px-36 grid gap-10 py-14">
                <div className="">
                    The SubsetTools python package is a set of tools to help
                    users subset inputs and outputs from the national ParFlow
                    simulations (PFCONUS1.0 and PFCONUS2.0) and build their own
                    watershed models. You can use SubsetTools to clip any inputs
                    from the national framework for a domain of interest. There
                    are also functions to adapt run scripts from the national
                    simulation to a smaller domain, and example workflows show
                    you how to develop a full steady state or transient
                    simulation from the national framework. Example workflows
                    are provided for both CONUS1 and CONUS2 model frameworks.
                </div>
                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold pb-5 ">
                        Usage and Installation
                    </div>
                    <div>
                        The SubsetTools package relies on datasets in the
                        HydroData catalog. Before using the SubsetTools you will
                        first need to
                        <a
                            className="text-primary font-bold"
                            rel="noreferrer"
                            target="_blank"
                            href="https://hydrogen.princeton.edu/signup?origin=hydroframe"
                        >
                            {" "}
                            sign up for an account{" "}
                        </a>
                        with the HydroFrame project and
                        <a
                            className="text-primary font-bold"
                            rel="noreferrer"
                            target="_blank"
                            href="https://hydrogen.princeton.edu/pin?origin=hydroframe"
                        >
                            {" "}
                            get a pin
                        </a>
                        .
                        <a
                            className="text-primary font-bold"
                            rel="noreferrer"
                            target="_blank"
                            href="https://hydroframesubsettools.readthedocs.io/en/latest/getting_started.html"
                        >
                            {" "}
                            View the quick start guide{" "}
                        </a>
                        Instructions for getting signed up can be found.
                    </div>
                </div>
                <div className="grid gap-3">
                    <div>
                        SubsetTools can be installed in a python virtual
                        environment with pip:
                    </div>
                    <div className="border border-gray-400 py-2 px-3 inline-block overflow-auto w-full">
                        <span className="text-gray-800 whitespace-pre-line break-word inline-block w-full">
                            <code className="whitespace-nowrap">
                                $ pip install subsettools
                            </code>
                        </span>
                    </div>
                    <div className="mt-0 lg:mt-10 grid gap-3">
                        <div className="flex w-full justify-center lg:justify-start">
                            <a
                                className="inline-block font-medium px-8 py-4 lg:px-8 lg:py-4 bg-primary text-white uppercase"
                                href="https://hydroframesubsettools.readthedocs.io/en/latest/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                READ THE DOCUMENTATION
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="text-primary text-2xl sm:text-4xl font-bold mb-2">
                        Notebooks
                    </div>
                    <div className="grid gap-5 lg:gap-7">
                        {categoryList
                            .filter(item => {
                                return item.section === "subsettools";
                            })
                            .map(item => {
                                return (
                                    <div className="mt-2" key={item.title}>
                                        <div className="text-primary text-xl lg:text-2xl mb-2 font-semibold">
                                            {item.title}
                                        </div>
                                        <div className="col-span-12 grid grid-cols-1 gap-x-8 justify-center relative">
                                            <CarouselCard
                                                itemList={item.list}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Publications
                    </div>
                    <div className="grid">
                        <ul className="list-disc list-outside pl-5 gap-y-5 grid">
                            <li>
                                Triplett et al., (2024). &nbsp;
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://doi.org/10.21105/joss.06752"
                                >
                                    SubsetTools: A Python package to subset data
                                    to build and run ParFlow hydrologic models.
                                </a>
                                &nbsp; Journal of Open Source Software, 9(99),
                                6752.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Short Courses
                    </div>
                    <div className="m-auto pb-5 gap-16">
                        We teach a subsetting short course for new users. To be
                        informed on upcoming short courses please join the
                        HydroFrame mailing list. In the meantime you can get
                        started with the resources from previous short courses:
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 lg:gap-10">
                        {shortCourses.map((item, ind) => {
                            return <ParFlowCard item={item} key={ind} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubsettingPythonTools;
