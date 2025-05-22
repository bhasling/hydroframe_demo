import ParFlowCard from "components/common/ParFlowCard";
import HeroSection from "components/common/HeroSection";
import { ParFlowCardType } from "components/utils/types";
import { useState } from "react";

function ShortCourses() {
    const [PFshortCourses,] = useState<ParFlowCardType[]>([
        {
            title: "Basic TCL Based",
            image: `${import.meta.env.BASE_URL}/images/parflow-resources/Notebook.png`,
            description: "",
            link: "https://github.com/hydroframe/ParFlow_Short_Course",
        },
        {
            title: "Advanced TCL Based",
            image: `${import.meta.env.BASE_URL}/images/parflow-resources/Notebook.png`,
            description: "",
            link: "https://github.com/hydroframe/ParFlow_Advanced_ShortCourse",
        },
        {
            title: "Python Based (2022)",
            image: `${import.meta.env.BASE_URL}/images/parflow-resources/Notebook.png`,
            description: "",
            link: "https://github.com/hydroframe/parflow_python_shortcourse",
        },
        {
            title: "Python Based (2024)",
            image: `${import.meta.env.BASE_URL}/images/parflow-resources/Notebook.png`,
            description: "",
            link: "https://github.com/hydroframe/parflow_short_course_updated",
        },
    ]);
    const [SubsetShortCourses,] = useState<ParFlowCardType[]>([
        {
            title: "Subsetting Using HydroFrame and HydroData",
            image: `${import.meta.env.BASE_URL}/images/parflow-resources/Notebook.png`,
            description: "",
            link: "https://github.com/hydroframe/Subsetting_ShortCourse",
        },
    ]);

    return (
        <div>
            <HeroSection
                item={{
                    title: "Short Courses",
                    description: "",
                    image: `${import.meta.env.BASE_URL}/images/three-line-swoosh.svg`,
                }}
            />
            <div className="px-4 sm:px-8 lg:px-36 grid gap-10 py-5 lg:py-10">
                <div>
                    <div className="grid gap-y-4">
                        <div className="text-primary text-2xl sm:text-4xl font-bold">
                            ParFlow Short Courses
                        </div>
                        <div className="m-auto pb-5 gap-16">
                            We teach ParFlow short courses for new users. To be
                            informed on upcoming short courses please join the
                            ParFlow mailing list. In the meantime you can get
                            started with the resources from previous short courses:
                        </div>
                        <div className="flex flex-wrap justify-center gap-10 lg:gap-10">
                            {PFshortCourses.map((item, ind) => {
                                return <ParFlowCard item={item} key={ind} />;
                            })}
                        </div>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-primary text-2xl sm:text-4xl font-bold">
                        Subsetting Short Courses
                    </div>
                    <div className="m-auto pb-5 gap-16">
                        We teach a subsetting short course for new users. To be
                        informed on upcoming short courses please join the
                        HydroFrame mailing list. In the meantime you can get
                        started with the resources from previous short courses:
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 lg:gap-10">
                        {SubsetShortCourses.map((item, ind) => {
                            return <ParFlowCard item={item} key={ind} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShortCourses;
