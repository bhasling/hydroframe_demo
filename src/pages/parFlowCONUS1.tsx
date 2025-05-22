import CarouselCard from "components/common/CarouselCard";
import HeroSection from "components/common/HeroSection";
import ParflowConusCard from "components/common/ParflowConusCard";
import { ICategoryList, ParflowConusCardType } from "components/utils/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ParFlowCONUS1() {
    const [cardList1,] = useState([
        {
            title: "ParFlow CONUS1.0 Model",
            image: "./images/parflow-conus-1.0/parflow-conus-1.0.png",
            caption: `<i>Steady state groundwater depth simulated by the ParFlow CONUS1.0 model (Figure from <a class="text-primary" href="https://gmd.copernicus.org/articles/8/923/2015/gmd-8-923-2015.html" target="_blank">Maxwell et al (2015)</a>)</i>`,
            description: `<div>The ParFlow CONUS1.0 model is the first version of the national ParFlow-CLM model. It was developed to model groundwater, surface water and land energy fluxes across the contiguous US, and at the time it was the first national model of the US to incorporate lateral groundwater flow.The model covers 6.2 million square kilometers encompassing the majority of the contiguous United States.</div>
                <div class="mt-5">The model extends from the bedrock to the treetops and is unique from other large scale modeling approaches because ParFlow simulates 3D variably saturated flow in the subsurface. You can <a class="text-primary font-bold" href="/parflow-resources">learn more about the ParFlow model here.</a></div>`,
        },
    ]);

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
                    title: "ParFlow CONUS1.0",
                    description: "",
                    image: "",
                }}
            />
            <div className="px-4 sm:px-8 lg:px-36 grid gap-y-5 lg:gap-y-12 my-10">
                <div>
                    <div className="">
                        <div className="m-auto gap-10 lg:gap-12 grid">
                            {cardList1.map(
                                (item: ParflowConusCardType, ind: number) => (
                                    <ParflowConusCard
                                        item={item}
                                        key={ind + "conus1"}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="gap-16 md:grid-cols-1">
                            The CONUS1 model has been used in a number of
                            studies to quantify groundwater-surface water
                            interactions and watershed behaviors across the
                            country. Initial work with the model focused on a
                            steady state groundwater configuration. This is
                            essentially our best estimate of modern undeveloped
                            groundwater levels based on long term average
                            recharge rates (Refer to the steady state
                            publication list for more information).
                        </div>
                        <div className="gap-16 md:grid-cols-1 mt-5">
                            Building from this work, we completed a series of
                            transient simulations that use hourly meteorological
                            forcing data to drive dynamic hydrologic conditions.
                            We completed a series of transient simulations using
                            water year 1985 as a baseline and considering the
                            impact of both groundwater pumping and climate
                            warming. In addition we completed a modern
                            simulation of water years 2002-2005 (Refer to the
                            transient publication list for more information).
                        </div>
                    </div>
                </div>
                <div className="grid gap-1">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        How to get access to the model
                    </div>
                    <div className="gap-16 md:grid-cols-1 mt-5">
                        <div>
                            The complete model configuration including all input
                            files and run scripts as well as many of the
                            national outputs for the baseline simulations are
                            archived on the HydroData catalog.
                        </div>
                        <div style={{ marginLeft: 20 }}>
                            <Link
                                className="text-primary font-bold"
                                rel="noreferrer"
                                target="_blank"
                                to="https://hf-hydrodata.readthedocs.io/en/latest/gen_conus1_domain.html"
                            >
                                conus1_domain dataset
                            </Link>
                        </div>
                        <div style={{ marginLeft: 20 }}>
                            <Link
                                className="text-primary font-bold"
                                rel="noreferrer"
                                target="_blank"
                                to="https://hf-hydrodata.readthedocs.io/en/latest/gen_conus1_baseline_85.html"
                            >
                                conus1_baseline_85 dataset
                            </Link>
                        </div>
                        <div style={{ marginLeft: 20 }}>
                            <Link
                                className="text-primary font-bold"
                                rel="noreferrer"
                                target="_blank"
                                to="https://hf-hydrodata.readthedocs.io/en/latest/gen_conus1_baseline_mod.html"
                            >
                                conus1_baseline_mod dataset
                            </Link>
                        </div>
                        <div className="mt-5">
                            To access all datasets using the gridded data tools{" "}
                            <Link
                                className="text-primary font-bold"
                                to="https://hf-hydrodata.readthedocs.io/en/latest/gen_conus1_domain.html"
                                target="_blank"
                            >
                                explore the HydroData Catalog
                            </Link>
                            .
                        </div>
                        <div className="mt-5">
                            <Link
                                className="text-primary font-bold"
                                to="/subsettools"
                            >
                                Use the Subset Tools Package
                            </Link>
                            &nbsp;to create your own ParFlow model using the
                            national model as a starting point.
                        </div>
                    </div>
                </div>
                <div className="grid gap-3">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Notebooks
                    </div>
                    {categoryList
                        .filter(item => {
                            return item.section === "parflow_conus1";
                        })
                        .map((item, ind) => {
                            return (
                                <div className="mt-2" key={item.title}>
                                    <div className="text-primary text-xl lg:text-2xl mb-2 font-semibold">
                                        {item.title}
                                    </div>
                                    <div className="col-span-12 grid grid-cols-1 gap-x-8 justify-center relative">
                                        <CarouselCard itemList={item.list} />
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Steady State Simulation Publications
                    </div>
                    <div className="grid">
                        <ul className="list-disc list-outside pl-5 gap-y-5 grid">
                            <li>
                                Condon, LE, AS Hering and RM Maxwell (2015).
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.sciencedirect.com/science/article/abs/pii/S0309170815000822"
                                >
                                    {
                                        " Quantitative assessment of groundwater controls across major US river basins using a multi-model regression algorithm. "
                                    }
                                </a>
                                Advances in Water Resources. 82, 106-123.
                            </li>
                            <li>
                                Condon, LE and RM Maxwell (2015).
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014WR016774"
                                >
                                    {
                                        " Evaluating the relationship between topography and groundwater using outputs from a continental-scale integrated hydrology model. "
                                    }
                                </a>
                                Water Resources Research. (51)8: 6602-6621.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-y-5">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Transient Simulation Publications
                    </div>
                    <div className="grid">
                        <ul className="list-disc list-outside pl-5 gap-y-5 grid">
                            <li>
                                O’Neill, MMF, DT Tijerina, LE Condon, and RM
                                Maxwell (2021). &nbsp;
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://gmd.copernicus.org/articles/14/7223/2021/"
                                >
                                    Assessment of the ParFlow–CLM CONUS 1.0
                                    Integrated Hydrologic Model: Evaluation of
                                    Hyper-Resolution Water Balance Components
                                    across the Contiguous United States.
                                </a>
                                &nbsp; Geoscientific Model Development 14, no.
                                12: 7223–54.
                            </li>
                            <li>
                                Tijerina, D, LE Condon, K FitzGerald, A Dugger,
                                MM O’Neil, K Sampson, D Gochis and RM Maxwell
                                (2021). &nbsp;
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020WR028931"
                                >
                                    Continental Hydrologic Intercomparison
                                    Project, Phase 1: A Large-Scale Hydrologic
                                    Model Comparison Over the Continental United
                                    States.
                                </a>
                                &nbsp; Water Resources Research. 57,
                                e2020WR028931
                            </li>
                            <li>
                                Condon, LE, AL Atchley and RM Maxwell (2020).
                                &nbsp;
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.nature.com/articles/s41467-020-14688-0"
                                >
                                    Evapotranspiration depletes groundwater
                                    under warming over the contiguous United
                                    States.
                                </a>
                                &nbsp; Nature Communications, 11(873).
                            </li>
                            <li>
                                Condon, LE and RM Maxwell (2019). &nbsp;
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.science.org/doi/10.1126/sciadv.aav4574"
                                >
                                    Simulating the sensitivity of
                                    evapotranspiration and streamflow to
                                    large-scale groundwater depletion.
                                </a>
                                &nbsp; Science Advances, 5(6): eaav4574.
                            </li>
                            <li>
                                Condon, LE and RM Maxwell (2017). &nbsp;
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://hess.copernicus.org/articles/21/1117/2017/"
                                >
                                    Systematic shifts in Budyko relationships
                                    caused by groundwater storage changes.
                                    Hydrology and Earth.
                                </a>
                                &nbsp; System Sciences. 21(2): p. 1117-1135,
                                doi:10.5194/hess-21-1117-2017
                            </li>
                            <li>
                                Maxwell, RM and LE Condon (2016). &nbsp;
                                <a
                                    className="break-word text-primary font-bold"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.science.org/doi/10.1126/science.aaf7891"
                                >
                                    Connections between groundwater flow and
                                    transpiration partitioning.
                                </a>
                                &nbsp; Science, 353(6297):377-380
                                doi:10.1126/science.aaf7891.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParFlowCONUS1;
