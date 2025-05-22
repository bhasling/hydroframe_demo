export type CommonCardType = {
    title: string;
    image: string;
    description: string;
};
export type CarouselCardType = {
    itemList: ICategory[];
};
export type AboutCardType = {
    imageLeft: boolean;
    title: string;
    image: string;
    description: string;
};
export type ParflowConusCardType = {
    title: string;
    image: string;
    caption: string;
    description: string;
};
export type ParFlowCardType = {
    title: string;
    image: string;
    caption?: string;
    description: string;
    link: string;
};
export interface ICategory {
    name: string;
    description: string;
    execlink: string;
    codelink: string;
    gitlink: string;
}
export interface ICategoryList {
    title: string;
    list: ICategory[];
}

export type HydrogenCardType = {
    title: string;
    image: string;
    description: string;
    buttonTitle?: string;
    buttonLink?: string;
};
export type HeroSectionType = {
    title: string;
    image: string;
    description: string;
};
export type UserCardType = {
    name: string;
    position: string;
    universityName: string;
    image: string;
};
export type HomePageCardType = {
    group: string;
    url: string;
    title: string;
    description: string;
    image: string;
};
export type OtherToolsandPartnersCardType = {
    title: string;
    description: string;
    image: string;
    buttonTitle?: string;
    buttonLink?: string;
};
export type ResourcesCardType = {
    image: string;
    link?: string;
};
export type SandtankCardType = {
    title: string;
    image: string;
    description: string;
    buttonTitle?: string;
    buttonLink?: string;
};
export type OtherToolsEducationalCardType = {
    title: string;
    image: string;
    description: string;
    buttonTitle?: string;
    buttonLink?: string;
};
