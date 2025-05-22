import CommonCard from "components/common/CommonCard";
import HeroSection from "components/common/HeroSection";
import ResourcesCard from "components/common/ResourcesCard";
import SandtankCard from "components/common/SandtankCard";
import { CommonCardType, ResourcesCardType } from "components/utils/types";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

function ParflowSandtankModel() {
    const [community] = useState([
        {
            title: "Community education and engagement is a priority",
            image: "./images/parFlow-sandtank-model/community-education-hydroframe.png",
            description: `<div>Our project team develops free educational tools and resources to support a variety of users who want to learn and teach about hydrology, modeling and more! Please visit all of the Educational Tools pages to discover our collection of resources.</div>
                <div class="mt-2">
                    Groundwater plays an integral role in the hydrologic cycle
                    but is difficult to see, and therefore often misunderstood
                    or ignored. The
                    <span class="font-bold">ParFlow Sandtank</span> is an
                    online simulation tool that lets users interactively
                    simulate and visualize groundwater movement through a
                    virtual slice of the subsurface. Users can adjust
                    groundwater levels, change subsurface properties, pump
                    groundwater and add pollutants then watch the system
                    respond in real time.
                </div>`,
        },
    ]);
    const [cardList] = useState([
        {
            title: "Agrosystem Template",
            image: "./images/parFlow-sandtank-model/agrosystem-template-hydroframe.png",
            description: `<div>This is an advanced ParFlow Sandtank template with enhanced capabilities to explore topics like climate change and sustainable agriculture practices.<div>
                <div class="mt-3"><i>Developed by Sara Cerasoli, Princeton University</i></div>`,
            buttonTitle: "START THE MODULE",
            buttonLink: "https://sandtank.hydroframe.org/?name=agrosystem",
        },
        {
            title: "Hillslope Template",
            image: "./images/parFlow-sandtank-model/hillslope-template-hydroframe.png",
            description: `<div>The hillslope template is a variation of the ParFlow Sandtank model that allows users to explore subsurface hydrology using a simplified hillslope model.</div>
                <div class="mt-3"><i>Developed by Abe Farley, University of Arizona</i></div>`,
            buttonTitle: "START THE MODULE",
            buttonLink: "https://sandtank.hydroframe.org/?name=hillslope",
        },
        {
            title: "Tucson-TCE Template",
            image: "./images/parFlow-sandtank-model/tucson-template-hydroframe.png",
            description: `<div>This is a location-specific template that models subsurface conditions in Tucson, AZ. Users can model real environmental scenarios that impact Tucson’s groundwater supply.</div>
                <div class="mt-3"><i>Developed by Abe Farley, University of Arizona</i></div>`,
            buttonTitle: "START THE MODULE",
            buttonLink: "https://sandtank.hydroframe.org/?name=tucson_tce",
        },
    ]);
    const [resourcesList] = useState<ResourcesCardType[]>([
        {
            image: "./images/parFlow-sandtank-model/resources-1-hydroframe.png",
            link: "https://vimeo.com/398697315",
        },
        {
            image: "./images/parFlow-sandtank-model/resources-2-hydroframe.png",
            link: "https://vimeo.com/413761989",
        },
    ]);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div>
            <HeroSection
                item={{
                    title: "ParFlow Sandtank Model",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
                }}
            />
            <div className="px-4 sm:px-8 lg:px-36 grid gap-10 lg:gap-12 py-10">
                <div>
                    <div className="m-auto gap-10 lg:gap-12 grid">
                        {community.map((item: CommonCardType, ind: number) => (
                            <CommonCard item={item} key={ind + "psm"} />
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row md:flex place-content-center gap-5 lg:gap-x-10 mt-10">
                        <div className="text-center">
                            <Link
                                to={"https://sandtank.hydroframe.org/"}
                                className="inline-block font-medium px-8 py-4 lg:px-4 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover"
                                type="submit"
                                target="_blank"
                            >
                                EXPLORE PARFLOW SANDTANK
                            </Link>
                        </div>
                        <div className="text-center">
                            <Link
                                to={
                                    "https://hydroframe.github.io/SandTank/manual/"
                                }
                                className="inline-block font-medium px-8 py-4 lg:px-4 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover"
                                type="submit"
                                target="_blank"
                            >
                                SANDTANK MANUAL
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold mb-5">
                        ParFlow Sandtank in action
                    </div>
                    <div>
                        Physical aquifer models are a highly effective teaching
                        tool, but come with inherent limitations. Our motivation
                        for developing the ParFlow Sandtank was to create an
                        educational tool that could be used to achieve the same
                        instructional goals as the physical model, while
                        reducing limitations and increasing accessibility. The
                        ParFlow Sandtank has been used in a variety of
                        educational settings with more than 32,000 users to
                        date.
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-16 mt-10 relative mb-5">
                        <img
                            className="w-full lg:w-1/2 shadow-lg"
                            src="./images/parFlow-sandtank-model/parFlow-sandtank-in-action-hydroframe.JPEG"
                            role="presentation"
                            alt=""
                        />
                        <div className="flex justify-center lg:justify-start lg:items-center">
                            <div className="parflow-tip relative bg-bgc px-12 lg:px-20 py-4 lg:py-5 rounded-xl text-center flex flex-col gap-y-2">
                                <div className="text-6xl font-bold text-primary">
                                    {">32,000"}
                                </div>
                                <div className="text-lg italic text-textFourth font-medium">
                                    Users to date
                                </div>
                                <div className="text-center">
                                    <img
                                        src="./images/parFlow-sandtank-model/users.png"
                                        className="w-20 md:w-24 m-auto"
                                        role="presentation"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold mb-5">
                        Templates
                    </div>
                    <div>
                        The ParFlow Sandtank allows users to develop customized
                        templates in addition to the available default template
                        by adjusting input files or developing new ones.
                        Features such as topography, well placements, initial
                        conditions, subsurface configuration and various visual
                        components may be altered. Detailed instructions on how
                        to develop and contribute templates can be found on our{" "}
                        <Link
                            className="text-primary font-bold"
                            to="https://hydroframe.github.io/SandTank/docs/contributing.html"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </Link>
                        . Examples of these customized templates can be found
                        below.
                    </div>
                    <div className="grid gap-14 mt-10">
                        {cardList.map((item, ind) => (
                            <SandtankCard item={item} key={ind + "tmp"} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold mb-3">
                        Resources
                    </div>
                    <div className="mt-4">
                        Please explore the available resources below and check
                        back regularly for new additions!
                    </div>
                    <div>
                        <div className="col-span-12 grid grid-cols-1 gap-x-8 justify-center relative">
                            <Carousel
                                className="w-[calc(100%)] m-auto"
                                responsive={responsive}
                                arrows={true}
                                renderButtonGroupOutside={true}
                                containerClass="carousel-container science-slider"
                                showDots
                                renderDotsOutside
                            >
                                {resourcesList.map((item, ind) => {
                                    return (
                                        <ResourcesCard item={item} key={ind} />
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold mb-5">
                        Citations
                    </div>

                    <div>
                        <ul className="list-disc list-outside pl-5 gap-y-5 grid mb-5">
                            <li>
                                Condon, LE, A Farley, S Jourdain, P O’leary, P
                                Avery, L Gallagher, C Chennault, RM Maxwell
                                (2023). &nbsp;
                                <a
                                    className="text-primary font-bold"
                                    target="blank"
                                    rel="noreferrer"
                                    href="https://jose.theoj.org/papers/10.21105/jose.00179"
                                >
                                    ParFlow Sand Tank: A tool for groundwater
                                    exploration.
                                </a>
                                &nbsp; Journal of Open Source Education. 6(61),
                                179.
                            </li>
                            <li>
                                Gallagher, LK, AJ Farley, C Chennault, S
                                Cerasoli, S Jourdain, P O’Leary, LE Condon & RM
                                Maxwell (2022). &nbsp;
                                <a
                                    className="text-primary font-bold"
                                    target="blank"
                                    rel="noreferrer"
                                    href="https://www.frontiersin.org/journals/water/articles/10.3389/frwa.2022.909918/full"
                                >
                                    The ParFlow Sandtank: An Interactive
                                    educational tool making invisible
                                    groundwater visible.
                                </a>
                                &nbsp; Frontiers in Water. 4.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParflowSandtankModel;
