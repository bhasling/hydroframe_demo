import React from "react";
import { ICategory } from "../utils/types";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

const CategoryCard: React.FC<{ item: ICategory }> = ({ item }) => {
    const logNotebookClick = (item: ICategory, action: string) =>
        ReactGA.event({
            action,
            category: "notebooks",
            label: item.name,
        });

    return (
        <>
            <div className="border border-gray-200 shadow-md p-5 grid gap-y-2 mx-3">
                <div
                    className="font-semibold"
                    dangerouslySetInnerHTML={{ __html: item.name }}
                ></div>

                <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
                <div className="flex gap-x-6 justify-center lg:justify-start">
                    <Link
                        to={item.execlink}
                        target="_blank"
                        className="rounded-full overflow-hidden"
                        onClick={() => logNotebookClick(item, "show_binder")}
                    >
                        <img
                            src="./images/common/play.svg"
                            title="Load Notebook with Binder"
                            alt=""
                            className="w-8"
                        />
                    </Link>
                    <Link
                        to={item.codelink}
                        target="_blank"
                        className="rounded-full overflow-hidden"
                        onClick={() => logNotebookClick(item, "show_source")}
                    >
                        <img
                            src="./images/common/git.png"
                            title="Show Notebook Source Code From GIT"
                            alt=""
                            className="w-8"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CategoryCard;
