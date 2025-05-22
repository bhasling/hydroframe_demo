import React from "react";
import { UserCardType } from "../utils/types";

const UserCard: React.FC<{ item: UserCardType }> = ({ item }) => {
    return (
        <div className={`grid grid-cols-1`}>
            <div className={`col-span-1`}>
                <div>
                    <img
                        alt=""
                        className={`w-full`}
                        src={"/images/our-team/" + item.image}
                    />
                </div>
                <div className="text-center mt-2">
                    <div
                        className={`font-bold text-xl mb-1`}
                        dangerouslySetInnerHTML={{ __html: item.name }}
                    ></div>
                    <div
                        className="mb-1 text-base"
                        dangerouslySetInnerHTML={{ __html: item.position }}
                    ></div>
                    <div
                        className="font-bold mb-1 text-lg"
                        dangerouslySetInnerHTML={{
                            __html: item.universityName,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
