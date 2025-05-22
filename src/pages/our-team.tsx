import HeroSection from "components/common/HeroSection";
import UserCard from "components/common/UserCard";

function OurTeam() {
    const leaderList = [
        {
            image: "reed-maxwell-hydroframe.jpg",
            name: "REED MAXWELL",
            position: "Project PI<br/>Professor",
            universityName: "Princeton University",
        },
        {
            image: "laura-condon-hydroframe.jpg",
            name: "LAURA CONDON",
            position: "Co-PI<br/>Associate Professor",
            universityName: "University of Arizona",
        },
        {
            image: "ilkay-atlintas-hydroframe.jpg",
            name: "ILKAY ALTINTAS",
            position: "Co-PI<br/>Chief Data Science Officer",
            universityName: "San Diego<br/>Supercomputer Center",
        },
        {
            image: "tony-castronova-hydroframe.jpg",
            name: "TONY CASTRONOVA",
            position: "Co-PI<br/>Senior Research Hydrologist",
            universityName: "CUAHSI",
        },
        {
            image: "alejandro-flores-hydroframe.jpg",
            name: "ALEJANDRO FLORES",
            position: "Co-PI<br/>Associate Professor",
            universityName: "Boise State University",
        },

        {
            image: "david-tarboton-hydroframe.jpg",
            name: "DAVID TARBOTON",
            position: "Co-PI<br/>Director, Utah Water<br />Research Laboratory",
            universityName: "Utah State University",
        },
    ];
    const teamList = [
        {
            image: "george-artavanis-hydroframe.jpg",
            name: "GEORGE ARTAVANIS",
            position: "Research Software Engineer",
            universityName: "Princeton University",
        },
        {
            image: "amy-defnet-hydroframe.jpg",
            name: "AMY DEFNET",
            position: "Research Software Engineer",
            universityName: "Princeton University",
        },
        {
            image: "lisa-gallaghere-hydroframe.jpg",
            name: "LISA GALLAGHER",
            position: "Education and Outreach Specialist",
            universityName: "Princeton University",
        },
        {
            image: "david-gochis-hydroframe.jpg",
            name: "DAVID GOCHIS",
            position: "Senior Scientist",
            universityName: "National Center for<br />Atmospheric Research",
        },
        {
            image: "bill-hasling-hydroframe.jpg",
            name: "BILL HASLING",
            position: "Senior Research Software Engineer",
            universityName: "Princeton University",
        },
        {
            image: "amy-johnson-hydroframe.jpg",
            name: "AMY JOHNSON",
            position: "Research Software Engineer",
            universityName: "University of Arizona",
        },
        {
            image: "will-lytle-hydroframe.jpg",
            name: "WILL LYTLE",
            position: "Research Software Engineer",
            universityName: "University of Arizona",
        },
        {
            image: "yueling-ma-hydroframe.jpg",
            name: "YUELING MA",
            position: "Postdoctoral Scholar",
            universityName: "Princeton University",
        },
        {
            image: "cathie-olchanowsky-hydroframe.jpg",
            name: "CATHIE OLCHANOWSKY",
            position: "Software System Design Engineer",
            universityName: "AMD",
        },
        {
            image: "michelle-strout-hydroframe.jpg",
            name: "MICHELLE STROUT",
            position: "Software Developer",
            universityName: "University of Arizona",
        },
        {
            image: "amanda-triplett-hydroframe.jpg",
            name: "AMANDA TRIPLETT",
            position: "Graduate Student",
            universityName: "University of Arizona",
        },
        {
            image: "danielle-tijerina-hydroframe.jpg",
            name: "DANIELLE TIJERINA",
            position: "Graduate Student",
            universityName: "Princeton University",
        },
        {
            image: "chen-yang-hydroframe.jpg",
            name: "CHEN YANG",
            position: "Postdoctoral Scholar",
            universityName: "Princeton University",
        },
    ];

    return (
        <div>
            <HeroSection
                item={{
                    title: "Our Team",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
                }}
            />
            <div className="px-4 sm:px-8 lg:px-36 grid gap-8 lg:gap-12 py-10">
                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold pb-5 ">
                        Project Leadership
                    </div>
                    <div className="m-auto gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {leaderList.map((item, ind) => {
                            return <UserCard item={item} key={ind + "cpi"} />;
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold pb-5 ">
                        Team Members
                    </div>
                    <div className="m-auto gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {teamList.map((item, ind) => {
                            return <UserCard item={item} key={ind + "tm"} />;
                        })}
                    </div>
                </div>

                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold pb-5">
                        Partner Institutions
                        <div className="flax flax-col mt-10">
                            <div className="grid gap-y-8 lg:gap-y-3 grid-cols-1 lg:gap-x-3 sm:grid-cols-2 lg:grid-cols-5">
                                <a
                                    href={"https://www.princeton.edu/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={"Princeton University"}
                                >
                                    <img
                                        className="m-auto lg:m-0 max-w-none h-24 lg:h-28"
                                        src="./images/our-team/partner/princeton-university-hydroframe.png"
                                        alt="Princeton University"
                                    />
                                </a>
                                <a
                                    href={"https://www.arizona.edu/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={"The University of Arizona"}
                                >
                                    <img
                                        className="max-w-none h-16 lg:h-28 m-auto"
                                        src="./images/our-team/partner/the-university-arizona-hydroframe.png"
                                        alt="The University of Arizona"
                                    />
                                </a>
                                <a
                                    href={"https://www.usu.edu/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={"UtahState University"}
                                >
                                    <img
                                        className="max-w-none h-16 lg:h-28 m-auto"
                                        src="./images/our-team/partner/utahstate-university-hydroframe.png"
                                        alt="UtahState University"
                                    />
                                </a>
                                <a
                                    href={"https://www.boisestate.edu/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={"Boise State"}
                                >
                                    <img
                                        className="max-w-none h-16 lg:h-28 m-auto"
                                        src="./images/our-team/partner/boise-state-hydroframe.png"
                                        alt="Boise State"
                                    />
                                </a>
                            </div>
                            <div className="grid gap-y-8 lg:gap-y-3 grid-cols-1 lg:gap-x-3 mt-10 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 ">
                                <a
                                    href={"https://www.cuahsi.org/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={"CUAHSI allied for water science"}
                                >
                                    <img
                                        className="max-w-none h-auto w-20 lg:w-auto lg:h-16 m-auto lg:m-0 mt-3"
                                        src="./images/our-team/partner/cauhsi-hydroframe.png"
                                        alt="CUAHSI allied for water science"
                                    />
                                </a>
                                <a
                                    href={"https://www.sdsc.edu/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={"SDSC"}
                                >
                                    <img
                                        className="max-w-none h-auto w-20 lg:w-auto lg:h-12 m-auto lg:m-0 mt-3"
                                        src="./images/our-team/partner/sdsc-hydroframe.png"
                                        alt="SDSC"
                                    />
                                </a>
                                <a
                                    href={"https://thewatershed.org/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={"The Watershed institute"}
                                >
                                    <img
                                        className="max-w-none w-2/3 lg:h-20 m-auto lg:m-0"
                                        src="./images/our-team/partner/watershed- Institute-hydroframe.png"
                                        alt="The Watershed institute"
                                    />
                                </a>
                            </div>
                            <div className="grid gap-y-8 lg:gap-y-3 grid-cols-1 md:gap-x-20 lg:gap-x-20 mt-10 lg:mt-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                <a
                                    href={"https://www.hydroshare.org/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={"HYDROSHARE"}
                                >
                                    <img
                                        className="m-auto lg:m-0 max-w-none h-auto w-2/3 md:w-full lg:h-16"
                                        src="./images/our-team/partner/hydroshare-hydroframe.png"
                                        alt="HYDROSHARE"
                                    />
                                </a>
                                <a
                                    href={"https://projectwet.arizona.edu/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={"Arizona Project WET"}
                                >
                                    <img
                                        className="max-w-none h-auto w-full md:w-full lg:h-16 m-auto"
                                        src="./images/our-team/partner/arizona-project-wet-hydroframe.png"
                                        alt="Arizona Project WET"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pb-5">
                        <div className="text-primary text-2xl sm:text-4xl font-bold">
                            Funding
                        </div>
                        <div className="mt-5 font-normal">
                            Our project is supported by the National Science
                            Foundation Cyber Infrastructure Program.
                        </div>
                        <div className="grid mt-8">
                            <a
                                href={"https://www.nsf.gov/"}
                                target="_blank"
                                rel="noreferrer"
                                title={"National Science Foundation"}
                            >
                                <img
                                    className="max-w-none h-16 lg:h-28 m-auto md:m-0"
                                    src="./images/our-team/funding/NSF-logo-hydroframe.png"
                                    alt="National Science Foundation"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
