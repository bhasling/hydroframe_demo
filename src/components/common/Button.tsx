import React from "react";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

const Button: React.FC<any> = props => {
    return (
        <button
            type={props.type || "button"}
            className={classNames(
                "flex items-center px-2 lg:px-5 py-1 font-bold bg-secondary hover:bg-secondaryHover border border-gray-300 text-white shadow-md",
                props.class ? props.class : ""
            )}
        >
            <span className="flex m-auto">{props.children}</span>
        </button>
    );
};

export default Button;
