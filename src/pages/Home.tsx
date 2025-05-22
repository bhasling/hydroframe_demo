import HomePageCard from "components/common/HomePageCard";

function Home() {
    const cardList = [
        {
            image: "hydroGEN-hydroframe.jpeg",
            url: "/hydrogen",
            title: "HydroGEN",
            group: "APPLICATIONS",
            description:
                "Explore current and future watershed conditions across the US with HydroGEN",
        },
        {
            image: "hydroData-hydroframe.jpeg",
            url: "/hydrodata",
            title: "HydroData",
            group: "DATA AND SIMULATIONS",
            description: "Access hydrologic datasets and model results",
        },
        {
            image: "parFlow-conus1.0-model-hydroframe.jpeg",
            url: "/parflow-conus1",
            title: "ParFlow CONUS1.0",
            group: "DATA AND SIMULATIONS",
            description:
                "Learn more about the first generation national ParFlow model",
        },
        {
            image: "parFlow-conus2.0-model-hydroframe.jpeg",
            url: "/parflow-conus2",
            title: "ParFlow CONUS2.0",
            group: "DATA AND SIMULATIONS",
            description:
                "Learn more about the second generation national ParFlow model",
        },
        {
            image: "parFlow-resources-hydroframe.jpeg",
            url: "/parflow-resources",
            title: "ParFlow Resources",
            group: "MODELING TOOLS",
            description:
                "Find training resources and tools for working with ParFlow models",
        },
        {
            image: "subsetting-python-tools-hydroframe.jpeg",
            url: "/subsettools",
            title: "SubsetTools",
            group: "MODELING TOOLS",
            description:
                "Build your own watershed model from the national ParFlow platform",
        },
        {
            image: "sandtank-ML-hydroframe.jpeg",
            url: "/sandtank-ml",
            title: "ParFlow Sandtank ML",
            group: "EDUCATIONAL TOOLS",
            description:
                "Use our machine learning educational application to explore how ML emulators are used in hydrology",
        },
        {
            image: "parFlow-sandtank-model-hydroframe.jpeg",
            url: "/parflow-sandtank-model",
            title: "ParFlow Sandtank Model",
            group: "EDUCATIONAL TOOLS",
            description:
                "Use our sandtank educational application to learn about groundwater hydrology",
        },
        {
            image: "other-tools-and-partners-hydroframe.jpeg",
            url: "/other-tools-and-partners",
            title: "Other Tools and Partners",
            group: "EDUCATIONAL TOOLS",
            description: "Educational tools and outreach partners",
        },
    ];
    return (
        <div className="px-4 sm:px-8 lg:px-36 grid grid-cols-12 gap-y-5 py-5">
            <div className="col-span-12">
                <div className="lg:grid lg:grid-cols-12 lg:divide-x-[3px] divide-gray-200 items-center ">
                    <div className="col-span-6">
                        <img
                            className="w-full m-auto lg:m-0"
                            src="./images/Logo-Blue-hydroframe.png"
                            alt=""
                        />
                    </div>
                    <div className="col-span-6 text-primary md:pl-10 lg:max-w-full max-w-full lg:py-3  lg:m-0">
                        <div className="text-2xl font-bold">
                            A national framework for hydrologic modeling and
                            scientific discovery
                        </div>
                        <div className="text-black mt-2">
                            Our goal is to make national hydrologic simulations
                            and datasets more accessible. We have a variety of
                            tools available to access data, build models and
                            learn more about our national watersheds and
                            hydrology.
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-12 m-auto pb-30 gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {cardList.map((item, ind) => {
                    return (
                        <HomePageCard
                            item={item}
                            key={"hc_" + ind}
                            index={ind}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
