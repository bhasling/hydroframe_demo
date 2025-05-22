import CarouselCard from "components/common/CarouselCard";
import HeroSection from "components/common/HeroSection";
import { ICategoryList } from "components/utils/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hydrodata() {
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

    return (
        <div>
            <HeroSection
                item={{
                    title: "HydroData",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
                }}
            />
            <div className="px-4 sm:px-8 lg:px-36 grid gap-10 py-5 lg:py-10">
                <div>
                    <div className="grid mb-5 ">
                        <ul className="list-inside">
                            <li className="mt-5 text-primary text-2xl sm:text-4xl font-bold">
                                HydroData is a repository of hydrologic
                                observations, watershed characteristics and
                                model simulations for the contiguous US.
                            </li>
                            <li className="mt-5">
                                Our repository includes well data, stream gages
                                and flux towers from national observation
                                networks. All observation data is updated weekly
                                and pre-processed for consistency.
                                <br />
                                <br />
                                The model inputs and outputs from the ParFlow
                                CONUS model include a complete geospatial
                                watershed fabric (e.g. hydrogeology, topography,
                                river networks and land cover) as well as
                                simulation outputs of groundwater, surface water
                                and land energy fluxes. To learn more about the
                                ParFlow CONUS models refer to the pages on
                                <Link
                                    className="text-primary font-bold"
                                    to="/parflow-conus1"
                                >
                                    {" "}
                                    ParFlow CONUS1
                                </Link>{" "}
                                and
                                <Link
                                    className="text-primary font-bold"
                                    to="/parflow-conus2"
                                >
                                    {" "}
                                    ParFlow CONUS2
                                </Link>
                                .
                            </li>
                        </ul>
                    </div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold pb-5 mt-10">
                        Usage and Installation
                    </div>
                    <div className="">
                        Access to all datasets in the HydroData catalog is
                        available via API. Users can download up to 10GB per
                        month of data from the catalog. Please refer to our data
                        policy for additional details on appropriate data usage
                        and limitations.
                        <br />
                        <br />
                        To use the API you will first need to
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
                            href="https://hf-hydrodata.readthedocs.io/en/latest/getting_started.html#creating-a-hydrogen-api-account"
                        >
                            {" "}
                            View the quick start guide{" "}
                        </a>
                        to access instructions to assist you with the sign up
                        process.
                        <br />
                        <br />
                        <a
                            className="text-primary font-bold"
                            rel="noreferrer"
                            target="_blank"
                            href="https://hf-hydrodata.readthedocs.io/en/latest/available_data.html"
                        >
                            Access the documentation page
                        </a>{" "}
                        to browse all available datasets and variables in the
                        data catalog. We have also created a python package to
                        make it easy to interact with and subset both gridded
                        and point datasets.
                    </div>
                    <div className="mt-10 mb-5 lg:mb-10 grid gap-4">
                        <div className="border lg:border-0 border-gray-400 inline-block overflow-auto w-full">
                            <span className="border-0 lg:border border-gray-400 text-gray-800 whitespace-pre-line break-word inline-block py-2 px-3 w-full lg:w-auto">
                                <code className="whitespace-nowrap">
                                    $ pip install hf_hydrodata
                                </code>
                            </span>
                        </div>
                    </div>
                    <div className="mt-0 lg:mt-10 grid gap-3">
                        <div className="flex w-full justify-center lg:justify-start">
                            <a
                                className="inline-block px-8 py-4 lg:px-8 lg:py-4 bg-primary font-medium text-white uppercase"
                                href={
                                    "https://hf-hydrodata.readthedocs.io/en/latest"
                                }
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
                                return item.section === "hf_hydrodata";
                            })
                            .map((item, ind) => {
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
                <div className="grid gap-3">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Recommended Citations
                    </div>
                    <div className=" ">
                        Please acknowledge the HydroFrame project if you use our
                        tools and make sure to cite any of the datasets that you
                        use. Citations are included in the metadata of all
                        datasets, please refer to the example scripts for
                        details on how to access the citations.
                    </div>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Publications
                    </div>
                    <div className="grid">
                        <ul className="list-disc list-outside pl-5 gap-y-5 grid">
                            <li>
                                Defnet et al., (2024). &nbsp;
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://joss.theoj.org/papers/10.21105/joss.06623"
                                >
                                    hf_hydrodata: A Python package for accessing hydrologic 
                                    simulations and observations across the United States
                                </a>
                                &nbsp; Journal of Open Source Software, 9(99), 
                                6623
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hydrodata;
