import HeroSection from "components/common/HeroSection";
import HydrogenCard from "components/common/HydrogenCard";
import { useState } from "react";

function Hydrogen() {
    const [cardList,] = useState([
        {
            title: "Explore current and future watershed conditions across the US",
            image: "./images/hydrogen/Hydrogen-App-Laptop-Smaller.gif",
            description:
                "HydroGEN allows users to explore current watershed conditions across the US as well as future scenarios. No prior hydrologic or modeling experience required. Check out our website to learn more and access the application.",
            buttonTitle: "Visit The Website",
            buttonLink: "https://hydro-generation.org/",
        },
    ]);
    return (
        <div>
            <HeroSection
                item={{
                    title: "HydroGEN",
                    description: "",
                    image: "./images/three-line-swoosh.svg",
                }}
            />
            <div className="">
                <div className="px-4 sm:px-8 lg:px-36 grid gap-10 py-5 lg:py-10">
                    {cardList.map((item, ind) => (
                        <HydrogenCard item={item} key={ind} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hydrogen;
