import HeroSection from "components/common/HeroSection";
import OtherToolsEducationalCard from "components/common/OtherToolsEducationalCard";
import { useState } from "react";

function OtherToolsandPartners() {
    const [cardList,] = useState([
        {
            title: "DIY Soil Permeameter",
            image: "./images/other-tools-and-partners/permeameter-hydroframe.jpg",
            description:
                'An online application that helps you build your own soil permeameter with materials around your home, then measure the hydraulic conductivity (how quickly water flows through the soil) of your own soil sample. You can also compare your soil samples to others and attempt the designer soil challenge!<div class="mt-5 italic">Developed by Christopher Browne, Princeton University</div> ',
            buttonTitle: "START THE MODULE",
            buttonLink: "https://diypermeameter.hydroframe.org/",
        },
    ]);

    const [cardList1,] = useState([
        {
            title: "Integrated GroundWater Modeling Center",
            image: "./images/other-tools-and-partners/educational-partners-hydroframe.png",
            description:
                "The Integrated GroundWater Modeling Center (IGWMC) is committed to supporting a robust education and outreach program, promoting the education of students as well as community members, through STEM fairs, classroom lessons, workshops and partnerships. These community events provide our students with the opportunity to expand their skill set and experience through broad perspectives how their research is relevant to society.",
            buttonTitle: "VISIT THE WEBSITE",
            buttonLink: "https://igwmc.princeton.edu/education-and-outreach/",
        },
        {
            title: "The Watershed Institute",
            image: "./images/other-tools-and-partners/watershed-Institute-hydroframe.jpg",
            description:
                "The Watershed Institute is a non-profit environmental organization dedicated to protecting and restoring water and the natural environment in central New Jersey. Spanning over 950 acres of pristine land, the institute serves as a hub for environmental education, research, and advocacy. The Watershed Institute offers a variety of educational programs, workshops, and events for the community, aiming to inspire a sense of environmental stewardship.",
            buttonTitle: "VISIT THE WEBSITE",
            buttonLink: "https://thewatershed.org/",
        },
        {
            title: "Arizona Project WET",
            image: "./images/other-tools-and-partners/projectwet-hydroframe.JPEG",
            description:
                "Arizona Project WET is a comprehensive water education program based in Arizona and affiliated with the national Project WET Foundation. This initiative focuses on enhancing water literacy and fostering an understanding of water-related issues among educators, students, and the community. The program offers a range of water-focused educational materials, workshops, and activities designed to engage learners of all ages.",
            buttonTitle: "VISIT THE WEBSITE",
            buttonLink: "https://projectwet.arizona.edu/",
        },
    ]);

    return (
        <div>
            <HeroSection
                item={{
                    title: "Other Tools and Partners",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
                }}
            />
            <div className="px-4 sm:px-8 lg:px-36 grid gap-8 lg:gap-14 py-10">
                {/* <div>
                    {cardList.map((item, ind) => (
                        <OtherEducationalToolCard item={item} key={ind} />
                    ))}
                </div> */}
                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold mb-5">
                        Other Tools
                    </div>
                    <div className="grid gap-14">
                        {cardList.map((item, ind) => (
                            <OtherToolsEducationalCard item={item} key={ind} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-primary text-2xl sm:text-4xl font-bold mb-5">
                        Educational Partners
                    </div>
                    <div className="grid gap-14">
                        {cardList1.map((item, ind) => (
                            <OtherToolsEducationalCard item={item} key={ind} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherToolsandPartners;
