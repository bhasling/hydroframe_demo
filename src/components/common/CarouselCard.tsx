import React from "react";
import { CarouselCardType } from "../utils/types";
import Carousel from "react-multi-carousel";
import CategoryCard from "./CategoryCard";

const CarouselCard: React.FC<CarouselCardType> = (props: CarouselCardType) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
        <div className="">
            <Carousel
                className=" w-full m-auto pb-7 pt-2"
                responsive={responsive}
                arrows={true}
                renderButtonGroupOutside={true}
                containerClass="carousel-container science-slider"
                showDots
                renderDotsOutside
            >
                {props.itemList.map((item, ind) => {
                    return <CategoryCard item={item} key={ind} />;
                })}
            </Carousel>
        </div>
    );
};

export default CarouselCard;
