import CarouselCard from "components/common/CarouselCard";
import HeroSection from "components/common/HeroSection";
import ParflowConusCard from "components/common/ParflowConusCard";
import { ICategoryList, ParflowConusCardType } from "components/utils/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ParFlowCONUS2() {
    const [cardList1] = useState([
        {
            title: "ParFlow CONUS2.0 Model",
            image: "./images/parflow-conus-2.0/parflow-conus-2.0.png",
            caption: `<i>Steady state water table depth map for the CONUS2.0 model (<a class="text-primary" target="_blank" href="https://www.sciencedirect.com/science/article/pii/S0022169423012362?via%3Dihub">Yang et al. 2023</a>)</i>`,
            description: `The ParFlow CONUS2.0 model is the second generation national ParFLow model. It is a significant update from the CONUS1.0 model. Almost every model input field has been improved in some way from the first generation to the second generation model. The new model differs significantly from the CONUS1.0 model in the following ways.`,
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
                    title: "ParFlow CONUS2.0",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
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
                                        key={ind + "psm"}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="gap-16 md:grid-cols-1">
                            <ul className="list-disc list-outside pl-5 gap-y-5 grid">
                                <li className="">
                                    The spatial extent of the domain was
                                    expanded from the original CONUS1 box domain
                                    to cover the entire contiguous US and areas
                                    draining to it (This expanded the surface
                                    area of the domain to 7.8 million square
                                    km).
                                </li>
                                <li className="">
                                    The number of vertical layers in the model
                                    was increased from 5 to 10 and the vertical
                                    extent of the model was extended from 102m
                                    to 392m.
                                </li>
                                <li className="">
                                    The domain is aligned with the US National
                                    Water Model and the topography was
                                    re-processed match drainage basin areas,
                                    proceses local sinks and internally draining
                                    basins and to improve the spatial
                                    consistency of the stream network (Refer to{" "}
                                    <Link
                                        className="text-primary font-bold"
                                        target="blank"
                                        rel="noreferrer"
                                        to="https://essd.copernicus.org/articles/13/3263/2021/essd-13-3263-2021.html"
                                    >
                                        Zhang et al. (2021)
                                    </Link>
                                    ).
                                </li>
                                <li className="">
                                    A 3D continental hydrostratigraphic model
                                    was developed from scratch to include
                                    vertical complexity and a flow barrier was
                                    used to enable confined and unconfined
                                    aquifers. The final configuration was chosen
                                    from 80 possible domains which were tested
                                    in two watersheds (Refer to{" "}
                                    <Link
                                        className="text-primary font-bold"
                                        target="blank"
                                        rel="noreferrer"
                                        to="https://doi.org/10.1111/gwat.13357"
                                    >
                                        Tijerina-Kreuzer et al. (2023)
                                    </Link>{" "}
                                    and
                                    <Link
                                        className="text-primary font-bold"
                                        target="blank"
                                        rel="noreferrer"
                                        to="https://doi.org/10.1111/gwat.13354"
                                    >
                                        {" "}
                                        Swilley et al. (2023)
                                    </Link>
                                    ).
                                </li>
                            </ul>
                            <br />
                            For complete details of the new domain refer to{" "}
                            <a
                                className="text-primary font-bold"
                                target="blank"
                                rel="noreferrer"
                                href="https://doi.org/10.1016/j.jhydrol.2023.130294"
                            >
                                Yang et al. (2023)
                            </a>{" "}
                            documentation of the CONUS2.0 steady state
                            simulation. Transient simulations are in progress
                            for the CONUS2.0 domain and will be released here
                            when they are available.
                        </div>
                    </div>
                </div>
                <div className="grid gap-1">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        How to get access to the model
                    </div>
                    <div className="gap-16 md:grid-cols-1">
                        <div className="mt-1">
                            The complete model configuration including all input
                            files and run scripts are archived on the HydroData
                            catalog in the
                            <Link
                                className="text-primary font-bold"
                                target="blank"
                                rel="noreferrer"
                                to="https://hf-hydrodata.readthedocs.io/en/latest/gen_conus2_domain.html"
                            >
                                {" "}
                                conus2_domain dataset.
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
                        Notebooks using subset tools to build a model from
                        CONUS2:
                    </div>
                    {categoryList
                        .filter(item => {
                            return item.section === "parflow_conus2";
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
                        Model Development Publications
                    </div>
                    <div className="grid">
                        <ul className="list-disc list-outside pl-5 gap-y-5 grid">
                            <li className="">
                                Tijerina-Kreuzer, D, JS Swilley, HV Tran, J
                                Zhang, B West, C Yang, LE Condon, and RM Maxwell
                                (2023).
                                <Link
                                    className="text-primary font-bold"
                                    target="blank"
                                    rel="noreferrer"
                                    to="https://doi.org/10.1111/gwat.13357"
                                >
                                    {" "}
                                    Continental Scale Hydrostratigraphy:
                                    Basin-Scale Testing of Alternative
                                    Data-Driven Approaches.{" "}
                                </Link>
                                Groundwater. 28 September 2023.
                            </li>
                            <li className="">
                                Swilley, JS, D Tijerina-Kreuzer, HV Tran, J
                                Zhang, C Yang, LE Condon and RM Maxwell (2023).
                                <Link
                                    className="text-primary font-bold"
                                    target="blank"
                                    rel="noreferrer"
                                    to="https://doi.org/10.1111/gwat.13354"
                                >
                                    {" "}
                                    Continental Scale Hydrostratigraphy:
                                    Comparing Geologically Informed Data
                                    Products to Analytical Solutions.
                                    Groundwater.{" "}
                                </Link>
                                15 September 2023.
                            </li>
                            <li className="">
                                Zhang, J, LE Condon, H Tran and RM Maxwell
                                (2021).
                                <Link
                                    className="text-primary font-bold"
                                    target="blank"
                                    rel="noreferrer"
                                    to="https://essd.copernicus.org/articles/13/3263/2021/essd-13-3263-2021.html"
                                >
                                    {" "}
                                    A National topographic dataset for
                                    hydrological modeling over the contiguous
                                    United States, Earth System Science data.{" "}
                                </Link>
                                Earth Syst. Sci. Data. 13, 3263–3279.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-y-5">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Steady State Simulation Publications
                    </div>
                    <div className="grid">
                        <ul className="list-disc list-outside pl-5 gap-y-5 grid">
                            <li className="">
                                Yang, C, DT Tijerina-Kreuzer, HV Tran, LE
                                Condon, and RM Maxwell (2023).
                                <Link
                                    className="text-primary font-bold"
                                    target="blank"
                                    rel="noreferrer"
                                    to="https://www.sciencedirect.com/science/article/pii/S0022169423012362?via%3Dihub"
                                >
                                    {" "}
                                    A High-Resolution, 3D Groundwater-Surface
                                    Water Simulation of the Contiguous US:
                                    Advances in the Integrated ParFlow CONUS 2.0
                                    Modeling Platform.{" "}
                                </Link>
                                Journal of Hydrology. 626: 130294.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Other Publications
                    </div>
                    <div className="grid">
                        <ul className="list-disc list-outside pl-5 gap-y-5 grid">
                            <li className="">
                                Condon, LE and RM Maxwell (2019). &nbsp;
                                <a
                                    className="text-primary font-bold"
                                    target="blank"
                                    rel="noreferrer"
                                    href="https://www.sciencedirect.com/science/article/abs/pii/S0098300418307957"
                                >
                                    Modified priority flood and global slope
                                    enforcement algorithm for topographic
                                    processing in physically based hydrologic
                                    modeling applications.
                                </a>
                                &nbsp; Computers & Geosciences. 126:73-83.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParFlowCONUS2;
